// AuthManager.js
import { auth, db } from '../../../shared/firebase.js';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    setPersistence,
    browserLocalPersistence,
    signOut
} from 'firebase/auth';
import {
    doc,
    setDoc,
    serverTimestamp,
    collection,
} from 'firebase/firestore';

export class AuthManager {
    constructor() {
        try {
            this.verifyRequiredElements();
            this.initializeState();
            this.bindEvents();
            this.setupAuthPersistence();
        } catch (error) {
            console.error("Error initializing AuthManager:", error);
            this.showError("Failed to initialize authentication");
            throw error;
        }
    }

    verifyRequiredElements() {
        const requiredElements = [
            "authContainer",
            "calendarContainer",
            "userEmail",
            "loginTab",
            "registerTab",
            "loginForm",
            "registerForm",
            "authErrorContainer",
            "authErrorMessage",
            "logoutBtn",
            "appLoading"
        ];

        const missingElements = requiredElements.filter(id => !document.getElementById(id));
        if (missingElements.length > 0) {
            throw new Error(`Missing required elements: ${missingElements.join(", ")}`);
        }

        this.elements = requiredElements.reduce((acc, id) => {
            acc[id] = document.getElementById(id);
            return acc;
        }, {});
    }

    initializeState() {
        this.state = {
            isLoading: false,
            currentUser: null,
            isRegistering: false
        };
    }

    bindEvents() {
        this.elements.loginTab.addEventListener('click', () => this.switchTab('login'));
        this.elements.registerTab.addEventListener('click', () => this.switchTab('register'));
        this.elements.loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        this.elements.registerForm.addEventListener('submit', (e) => this.handleRegister(e));
        this.elements.logoutBtn.addEventListener('click', () => this.handleLogout());
    }

    async setupAuthPersistence() {
        try {
            await setPersistence(auth, browserLocalPersistence);
            auth.onAuthStateChanged((user) => this.handleAuthStateChange(user));
        } catch (error) {
            console.error("Error setting auth persistence:", error);
            this.showError("Failed to initialize authentication");
        }
    }

    async handleAuthStateChange(user) {
        this.state.currentUser = user;
        this.elements.appLoading.style.display = 'none';

        if (user) {
            this.elements.authContainer.classList.remove('active');
            this.elements.calendarContainer.classList.add('active');
            this.elements.userEmail.textContent = user.email;
            this.clearError();
        } else {
            this.elements.authContainer.classList.add('active');
            this.elements.calendarContainer.classList.remove('active');
            this.elements.userEmail.textContent = '';
        }
    }

    switchTab(tab) {
        this.state.isRegistering = tab === 'register';
        this.elements.loginTab.classList.toggle('active', !this.state.isRegistering);
        this.elements.registerTab.classList.toggle('active', this.state.isRegistering);
        this.elements.loginForm.classList.toggle('active', !this.state.isRegistering);
        this.elements.registerForm.classList.toggle('active', this.state.isRegistering);
        this.clearError();
    }

    async handleLogin(event) {
        event.preventDefault();
        if (this.state.isLoading) return;

        const form = event.target;
        const email = form.email.value.trim();
        const password = form.password.value;

        this.setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            form.reset();
            this.clearError();
        } catch (error) {
            console.error("Login error:", error);
            this.showError(this.getAuthErrorMessage(error));
        } finally {
            this.setLoading(false);
        }
    }

    async handleRegister(event) {
        event.preventDefault();
        if (this.state.isLoading) return;

        const form = event.target;
        const email = form.email.value.trim();
        const password = form.password.value;
        const firstName = form.firstName.value.trim();
        const lastName = form.lastName.value.trim();

        this.setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const userDoc = doc(collection(db, "users"), userCredential.user.uid);
            
            await setDoc(userDoc, {
                firstName,
                lastName,
                email,
                role: "worker",
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            });

            form.reset();
            this.clearError();
        } catch (error) {
            console.error("Registration error:", error);
            this.showError(this.getAuthErrorMessage(error));
        } finally {
            this.setLoading(false);
        }
    }

    async handleLogout() {
        if (this.state.isLoading) return;

        this.setLoading(true);
        try {
            await signOut(auth);
            this.clearError();
        } catch (error) {
            console.error("Logout error:", error);
            this.showError("Failed to log out. Please try again.");
        } finally {
            this.setLoading(false);
        }
    }

    setLoading(isLoading) {
        this.state.isLoading = isLoading;
        const buttons = [
            ...this.elements.loginForm.querySelectorAll('button'),
            ...this.elements.registerForm.querySelectorAll('button'),
            this.elements.logoutBtn
        ];
        
        buttons.forEach(button => {
            button.disabled = isLoading;
        });
    }

    showError(message) {
        this.elements.authErrorContainer.style.display = 'block';
        this.elements.authErrorMessage.textContent = message;
    }

    clearError() {
        this.elements.authErrorContainer.style.display = 'none';
        this.elements.authErrorMessage.textContent = '';
    }

    getAuthErrorMessage(error) {
        switch (error.code) {
            case 'auth/user-not-found':
            case 'auth/wrong-password':
                return 'Invalid email or password';
            case 'auth/email-already-in-use':
                return 'Email is already registered';
            case 'auth/weak-password':
                return 'Password should be at least 6 characters';
            case 'auth/invalid-email':
                return 'Invalid email address';
            default:
                return 'An error occurred. Please try again.';
        }
    }
}