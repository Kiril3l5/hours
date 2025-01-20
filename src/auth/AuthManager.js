// AuthManager.js
import { auth, db } from "../firebase.js";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    setPersistence,
    browserLocalPersistence,
    signOut,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import {
    doc,
    setDoc,
    serverTimestamp,
    collection,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

export class AuthManager {
    constructor() {
        try {
            this.verifyRequiredElements();
            this.initializeState();
            this.bindEvents();
            this.setupAuthPersistence();
        } catch (error) {
            console.error("Error initializing AuthManager:", error);
            this.showError("Failed to initialize application");
            throw error;
        }
    }

    setupAuthPersistence() {
        setPersistence(auth, browserLocalPersistence)
            .then(() => {
                onAuthStateChanged(auth, (user) => this.handleAuthStateChange(user));
            })
            .catch((error) => {
                console.error("Error setting persistence:", error);
                this.showError("Failed to initialize persistence");
            });
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
        ];

        const missingElements = requiredElements.filter((id) => !document.getElementById(id));
        if (missingElements.length > 0) {
            throw new Error(`Missing required elements: ${missingElements.join(", ")}`);
        }
    }

    initializeState() {
        this.state = {
            isLoading: false,
            user: null,
        };

        this.authContainer = document.getElementById("authContainer");
        this.calendarContainer = document.getElementById("calendarContainer");
        this.userEmail = document.getElementById("userEmail");
        this.errorContainer = document.getElementById("authErrorContainer");
        this.errorMessage = document.getElementById("authErrorMessage");
        this.loginForm = document.getElementById("loginForm");
        this.registerForm = document.getElementById("registerForm");
    }

    bindEvents() {
        document.getElementById("loginTab").addEventListener("click", () => this.switchTab("login"));
        document.getElementById("registerTab").addEventListener("click", () => this.switchTab("register"));
        this.loginForm.addEventListener("submit", (e) => this.handleLogin(e));
        this.registerForm.addEventListener("submit", (e) => this.handleRegister(e));
        document.getElementById("logoutBtn")?.addEventListener("click", () => this.handleLogout());
    }

    switchTab(tab) {
        const loginTab = document.getElementById("loginTab");
        const registerTab = document.getElementById("registerTab");
        const loginForm = document.getElementById("loginForm");
        const registerForm = document.getElementById("registerForm");

        if (tab === "login") {
            loginTab.classList.add("active");
            registerTab.classList.remove("active");
            loginForm.classList.add("active");
            registerForm.classList.remove("active");
        } else {
            registerTab.classList.add("active");
            loginTab.classList.remove("active");
            registerForm.classList.add("active");
            loginForm.classList.remove("active");
        }

        this.clearError();
    }

    async handleAuthStateChange(user) {
        if (user) {
            this.state.user = user;
            this.authContainer.classList.remove("active");
            this.calendarContainer.classList.add("active");
            this.userEmail.textContent = user.email;
        } else {
            this.state.user = null;
            this.authContainer.classList.add("active");
            this.calendarContainer.classList.remove("active");
            this.userEmail.textContent = "";
        }
    }

    async handleLogin(event) {
        event.preventDefault();
        const email = event.target.email.value.trim();
        const password = event.target.password.value;

        this.setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            this.clearError();
        } catch (error) {
            console.error("Login failed:", error);
            this.showError("Invalid email or password");
        } finally {
            this.setLoading(false);
        }
    }

    async handleRegister(event) {
        event.preventDefault();
        const email = event.target.email.value.trim();
        const password = event.target.password.value;
        const firstName = event.target.firstName.value.trim();
        const lastName = event.target.lastName.value.trim();

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
            });

            this.clearError();
        } catch (error) {
            console.error("Registration failed:", error);
            this.showError("Error creating account. Please try again.");
        } finally {
            this.setLoading(false);
        }
    }

    async handleLogout() {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout error:", error);
            this.showError("Error logging out. Please try again.");
        }
    }

    setLoading(isLoading) {
        this.state.isLoading = isLoading;
        const loader = document.getElementById("authLoader");
        if (loader) loader.style.display = isLoading ? "block" : "none";
    }

    showError(message) {
        if (this.errorMessage) {
            this.errorMessage.textContent = message;
            this.errorContainer.style.display = "block";
        }
    }

    clearError() {
        if (this.errorContainer) {
            this.errorContainer.style.display = "none";
            this.errorMessage.textContent = "";
        }
    }
}