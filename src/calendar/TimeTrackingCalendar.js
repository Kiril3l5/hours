// TimeTrackingCalendar.js
import { db } from '../../../shared/firebase.js';
import { DateUtils } from '../../../shared/utils/DateUtils.js';
import {
    collection,
    query,
    where,
    getDocs,
    addDoc,
    doc,
    serverTimestamp,
    writeBatch,
    onSnapshot
} from 'firebase/firestore';

export class TimeTrackingCalendar {
    constructor(userId) {
        if (!userId) {
            throw new Error("TimeTrackingCalendar requires a valid userId");
        }

        this.userId = userId;
        this.timeEntries = new Map();
        this.submittedWeeks = new Set();
        this.isOnline = navigator.onLine;
        this.currentMonth = new Date();
        
        this.initializeNetworkListeners();
    }

    initializeNetworkListeners() {
        window.addEventListener('online', () => {
            this.isOnline = true;
            this.syncData();
        });
        
        window.addEventListener('offline', () => {
            this.isOnline = false;
            this.showNotification('You are offline. Changes will be saved locally.');
        });
    }

    async initializeCalendar(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            throw new Error(`Container element '${containerId}' not found`);
        }

        this.setupCalendarStructure();
        await this.loadData();
        this.setupRealTimeUpdates();
        this.attachEventListeners();
    }

    setupCalendarStructure() {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'calendar-header';
        
        const monthNav = document.createElement('div');
        monthNav.className = 'month-navigation';
        monthNav.innerHTML = `
            <button class="prev-month">&lt;</button>
            <h2 id="currentMonth"></h2>
            <button class="next-month">&gt;</button>
        `;

        const calendarGrid = document.createElement('div');
        calendarGrid.className = 'calendar-grid';
        
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const weekdaysRow = document.createElement('div');
        weekdaysRow.className = 'weekdays';
        weekdaysRow.innerHTML = weekdays.map(day => `<div>${day}</div>`).join('');

        this.container.appendChild(headerDiv);
        this.container.appendChild(monthNav);
        this.container.appendChild(weekdaysRow);
        this.container.appendChild(calendarGrid);

        this.elements = {
            grid: calendarGrid,
            monthDisplay: document.getElementById('currentMonth'),
            prevButton: this.container.querySelector('.prev-month'),
            nextButton: this.container.querySelector('.next-month')
        };

        this.renderCalendar();
    }

    async loadData() {
        this.setLoading(true);
        try {
            await Promise.all([
                this.loadLocalData(),
                this.isOnline ? this.loadFirestoreData() : Promise.resolve()
            ]);
            this.render();
        } catch (error) {
            console.error('Error loading calendar data:', error);
            this.showError('Failed to load time entries');
        } finally {
            this.setLoading(false);
        }
    }

    setupRealTimeUpdates() {
        if (!this.isOnline) return;

        const timeEntriesRef = collection(db, 'timeEntries');
        const q = query(timeEntriesRef, where('userId', '==', this.userId));

        this.unsubscribe = onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach(change => {
                const data = change.doc.data();
                if (change.type === 'added' || change.type === 'modified') {
                    this.timeEntries.set(data.date, data);
                } else if (change.type === 'removed') {
                    this.timeEntries.delete(data.date);
                }
            });
            this.render();
        }, (error) => {
            console.error('Error in real-time updates:', error);
            this.showError('Failed to get real-time updates');
        });
    }

    renderCalendar() {
        const year = this.currentMonth.getFullYear();
        const month = this.currentMonth.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();

        this.elements.monthDisplay.textContent = 
            `${this.currentMonth.toLocaleString('default', { month: 'long' })} ${year}`;

        this.elements.grid.innerHTML = '';
        let dayCount = 1;

        // Create grid cells
        for (let i = 0; i < 42; i++) {
            const cell = document.createElement('div');
            cell.className = 'calendar-day';

            if (i >= startingDay && dayCount <= daysInMonth) {
                const date = new Date(year, month, dayCount);
                const dateStr = DateUtils.formatDate(date);
                
                cell.textContent = dayCount;
                cell.dataset.date = dateStr;
                
                const entry = this.timeEntries.get(dateStr);
                if (entry) {
                    cell.classList.add('has-entry');
                    cell.title = `${entry.hours} hours logged`;
                }
                
                dayCount++;
            }

            this.elements.grid.appendChild(cell);
        }
    }

    async addTimeEntry(date, hours) {
        if (!DateUtils.isValidDate(date) || isNaN(hours)) {
            throw new Error('Invalid date or hours');
        }

        const entry = {
            date: DateUtils.formatDate(date),
            hours: Number(hours),
            userId: this.userId,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        };

        try {
            if (this.isOnline) {
                const docRef = await addDoc(collection(db, 'timeEntries'), entry);
                entry.id = docRef.id;
            }
            
            this.timeEntries.set(entry.date, entry);
            this.saveLocalData();
            this.render();
            
            return entry;
        } catch (error) {
            console.error('Error adding time entry:', error);
            this.showError('Failed to save time entry');
            throw error;
        }
    }
    async loadLocalData() {
        try {
            const savedEntries = localStorage.getItem(`timeEntries_${this.userId}`);
            const savedSubmissions = localStorage.getItem(`submittedWeeks_${this.userId}`);

            if (savedEntries) {
                this.timeEntries = new Map(JSON.parse(savedEntries));
            }
            
            if (savedSubmissions) {
                this.submittedWeeks = new Set(JSON.parse(savedSubmissions));
            }
        } catch (error) {
            console.error('Error loading local data:', error);
        }
    }

    async loadFirestoreData() {
        try {
            const q = query(
                collection(db, 'timeEntries'),
                where('userId', '==', this.userId)
            );
            
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                this.timeEntries.set(data.date, { ...data, id: doc.id });
            });
            
            this.saveLocalData();
        } catch (error) {
            console.error('Error loading Firestore data:', error);
            throw error;
        }
    }

    async syncData() {
        if (!this.isOnline) return;

        try {
            const batch = writeBatch(db);
            const pendingEntries = Array.from(this.timeEntries.values())
                .filter(entry => !entry.id);

            pendingEntries.forEach(entry => {
                const docRef = doc(collection(db, 'timeEntries'));
                batch.set(docRef, {
                    ...entry,
                    updatedAt: serverTimestamp()
                });
            });

            await batch.commit();
            await this.loadFirestoreData();
            this.showNotification('All changes synchronized');
        } catch (error) {
            console.error('Error syncing data:', error);
            this.showError('Failed to sync changes');
        }
    }

    saveLocalData() {
        try {
            localStorage.setItem(
                `timeEntries_${this.userId}`,
                JSON.stringify(Array.from(this.timeEntries.entries()))
            );
            localStorage.setItem(
                `submittedWeeks_${this.userId}`,
                JSON.stringify(Array.from(this.submittedWeeks))
            );
        } catch (error) {
            console.error('Error saving local data:', error);
        }
    }

    attachEventListeners() {
        this.elements.prevButton.addEventListener('click', () => {
            this.currentMonth = new Date(
                this.currentMonth.getFullYear(),
                this.currentMonth.getMonth() - 1
            );
            this.renderCalendar();
        });

        this.elements.nextButton.addEventListener('click', () => {
            this.currentMonth = new Date(
                this.currentMonth.getFullYear(),
                this.currentMonth.getMonth() + 1
            );
            this.renderCalendar();
        });

        this.elements.grid.addEventListener('click', (event) => {
            const cell = event.target.closest('.calendar-day');
            if (cell && cell.dataset.date) {
                this.handleDayClick(cell.dataset.date);
            }
        });
    }

    handleDayClick(dateStr) {
        const entry = this.timeEntries.get(dateStr);
        const event = new CustomEvent('dayClick', {
            detail: {
                date: dateStr,
                entry: entry || null
            }
        });
        this.container.dispatchEvent(event);
    }

    setLoading(isLoading) {
        this.container.classList.toggle('loading', isLoading);
    }

    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'calendar-error';
        errorDiv.textContent = message;
        
        this.container.appendChild(errorDiv);
        setTimeout(() => errorDiv.remove(), 5000);
    }

    showNotification(message) {
        const notificationDiv = document.createElement('div');
        notificationDiv.className = 'calendar-notification';
        notificationDiv.textContent = message;
        
        this.container.appendChild(notificationDiv);
        setTimeout(() => notificationDiv.remove(), 3000);
    }

    destroy() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
        
        window.removeEventListener('online', this.handleOnline);
        window.removeEventListener('offline', this.handleOffline);
    }
}