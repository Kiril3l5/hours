// TimeTrackingCalendar.js
import { db } from "../firebase.js";
import { DateUtils } from "../../../shared/utils/DateUtils.js";
import {
    collection,
    query,
    where,
    getDocs,
    addDoc,
    doc,
    serverTimestamp,
    writeBatch,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

export class TimeTrackingCalendar {
    constructor(userId) {
        if (!userId) {
            console.error("Constructor Error: Invalid userId.");
            throw new Error("TimeTrackingCalendar requires a valid userId.");
        }

        console.log("Initializing TimeTrackingCalendar for user:", userId);
        this.userId = userId;
        this.timeEntries = new Map();
        this.submittedWeeks = new Set();
        this.isOnline = navigator.onLine;
        this.lastSync = null;
        this.syncInterval = 5 * 60 * 1000; // 5 minutes

        window.addEventListener("online", () => {
            console.log("Network status: Online");
            this.syncData();
        });
        window.addEventListener("offline", () => {
            console.log("Network status: Offline");
            this.isOnline = false;
        });
    }

    async initializeCalendar(containerId) {
        console.log("Initializing calendar UI for container:", containerId);
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Container with ID ${containerId} not found.`);
            throw new Error(`Container with ID ${containerId} not found.`);
        }

        this.renderCalendar();
        await this.loadInitialData();
        this.attachEventListeners();
    }

    async loadInitialData() {
        console.log("Loading initial data...");
        this.setLoading(true);
        try {
            await Promise.all([this.loadSavedData(), this.loadSubmittedEntries()]);
            console.log("Initial data loaded successfully.");
            this.render();
            this.updateWeekSummary();
        } catch (error) {
            console.error("Error loading initial data:", error);
            this.showError("Failed to load calendar data. Please refresh the page.");
        } finally {
            this.setLoading(false);
        }
    }

    async loadSavedData() {
        console.log("Loading saved data from localStorage...");
        try {
            const savedEntries = localStorage.getItem(`timeEntries_${this.userId}`);
            const savedSubmissions = localStorage.getItem(`submittedWeeks_${this.userId}`);

            if (savedEntries) {
                this.timeEntries = new Map(Object.entries(JSON.parse(savedEntries)));
                console.log("Loaded time entries from localStorage.");
            }

            if (savedSubmissions) {
                this.submittedWeeks = new Set(JSON.parse(savedSubmissions));
                console.log("Loaded submitted weeks from localStorage.");
            }
        } catch (error) {
            console.error("Error loading saved data:", error);
            this.timeEntries.clear();
            this.submittedWeeks.clear();
        }
    }

    async loadSubmittedEntries() {
        if (!this.isOnline) {
            console.log("Skipping loadSubmittedEntries: Offline");
            return;
        }

        console.log("Fetching submitted entries from Firestore...");
        try {
            const q = query(collection(db, "timeEntries"), where("userId", "==", this.userId));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                this.submittedWeeks.add(data.week);

                data.hours.forEach((hourEntry) => {
                    if (hourEntry.hours > 0 || hourEntry.isTimeOff) {
                        this.timeEntries.set(hourEntry.date, hourEntry);
                    }
                });
            });

            console.log("Submitted entries loaded successfully.");
            this.updateLocalStorage();
        } catch (error) {
            console.error("Error loading submitted entries:", error);
        }
    }

    updateLocalStorage() {
        console.log("Updating localStorage with current state...");
        try {
            localStorage.setItem(`timeEntries_${this.userId}`, JSON.stringify(Object.fromEntries(this.timeEntries)));
            localStorage.setItem(`submittedWeeks_${this.userId}`, JSON.stringify(Array.from(this.submittedWeeks)));
            console.log("localStorage updated successfully.");
        } catch (error) {
            console.error("Error updating localStorage:", error);
        }
    }

    renderCalendar() {
        console.log("Rendering calendar UI...");
        this.container.innerHTML = "<div class='calendar-grid'></div>";

        const calendarGrid = this.container.querySelector(".calendar-grid");
        for (let i = 1; i <= 31; i++) {
            const dayCell = document.createElement("div");
            dayCell.classList.add("calendar-day");
            dayCell.textContent = i;
            dayCell.dataset.date = `2023-09-${i.toString().padStart(2, "0")}`;
            calendarGrid.appendChild(dayCell);
        }
    }

    render() {
        console.log("Rendering time entries on the calendar...");
        this.timeEntries.forEach((entry, date) => {
            this.updateCalendarEntry(date, entry.hours);
        });
    }

    updateCalendarEntry(date, hours) {
        console.log(`Updating calendar entry: ${date}, ${hours} hours.`);
        const dayCell = this.container.querySelector(`[data-date='${date}']`);
        if (dayCell) {
            dayCell.classList.add("has-entry");
            dayCell.title = `${hours} hours logged`;
        }
    }

    attachEventListeners() {
        console.log("Attaching event listeners to the calendar...");
        this.container.addEventListener("click", (event) => {
            const target = event.target;
            if (target.classList.contains("calendar-day")) {
                const selectedDate = target.dataset.date;
                console.log("Clicked on calendar day:", selectedDate);
                const loggedHours = prompt(`Enter hours for ${selectedDate}:`);

                if (loggedHours && !isNaN(loggedHours)) {
                    console.log(`Adding time entry: ${loggedHours} hours on ${selectedDate}`);
                    this.addTimeEntry(new Date(selectedDate), parseFloat(loggedHours));
                } else {
                    alert("Please enter a valid number of hours.");
                }
            }
        });
    }

    async addTimeEntry(date, hours) {
        console.log(`Adding time entry: ${hours} hours on ${DateUtils.formatDate(date)}`);
        try {
            const entry = {
                date: DateUtils.formatDate(date),
                hours,
                userId: this.userId,
                createdAt: serverTimestamp(),
            };

            const docRef = await addDoc(collection(db, "timeEntries"), entry);
            console.log("Time entry added successfully to Firestore with ID:", docRef.id);
            this.timeEntries.set(entry.date, { ...entry, id: docRef.id });
            this.updateCalendarEntry(entry.date, hours);
        } catch (error) {
            console.error("Failed to add time entry:", error);
        }
    }

    setLoading(isLoading) {
        console.log(`Setting loading state to: ${isLoading}`);
        const loadingIndicator = document.querySelector(".calendar-loading");
        if (loadingIndicator) {
            loadingIndicator.style.display = isLoading ? "block" : "none";
        }
    }

    showError(message) {
        console.error("Error displayed to user:", message);
        const errorEl = document.createElement("div");
        errorEl.className = "calendar-error";
        errorEl.textContent = message;
        this.container.appendChild(errorEl);
        setTimeout(() => errorEl.remove(), 5000);
    }

    async syncData() {
        console.log("Synchronizing data with Firestore...");
        if (!this.isOnline) {
            console.warn("Cannot sync: Offline");
            return;
        }

        try {
            const batch = writeBatch(db);
            const timeEntriesRef = collection(db, "timeEntries");
            this.timeEntries.forEach((entry) => {
                const docRef = doc(timeEntriesRef, `${this.userId}_${entry.date}`);
                batch.set(docRef, { ...entry, syncedAt: serverTimestamp() });
            });

            await batch.commit();
            console.log("Data synchronized successfully.");
        } catch (error) {
            console.error("Error during data synchronization:", error);
        }
    }
}