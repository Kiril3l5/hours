// main.js
import { auth } from '../shared/firebase.js';
import { AuthManager } from './src/auth/AuthManager.js';
import { TimeTrackingCalendar } from './src/calendar/TimeTrackingCalendar.js';
import { TimeEntryModal } from './src/modal/TimeEntryModal.js';

// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Initialize authentication
        const authManager = new AuthManager();
        
        // Listen for authentication state changes
        auth.onAuthStateChanged((user) => {
            // Hide loading screen
            const loadingScreen = document.getElementById('appLoading');
            if (loadingScreen) {
                loadingScreen.style.display = 'none';
            }

            if (user) {
                console.log('User authenticated:', user.email);
                
                // Initialize calendar
                const calendar = new TimeTrackingCalendar(user.uid);
                calendar.initializeCalendar('calendarContainer');
                
                // Initialize modal with callback to add time entries
                const modal = new TimeEntryModal(async (date, data) => {
                    try {
                        await calendar.addTimeEntry(date, data.hours);
                    } catch (error) {
                        console.error('Failed to add time entry:', error);
                        // Show error in UI
                        const errorDiv = document.getElementById('errorMessage');
                        if (errorDiv) {
                            errorDiv.textContent = 'Failed to save time entry';
                            errorDiv.parentElement.removeAttribute('aria-hidden');
                        }
                    }
                });
            } else {
                console.log('User not authenticated');
                // Show auth container
                const authContainer = document.getElementById('authContainer');
                if (authContainer) {
                    authContainer.classList.add('active');
                }
            }
        });
    } catch (error) {
        console.error('Application initialization error:', error);
        // Show error boundary
        const errorBoundary = document.getElementById('errorBoundary');
        const errorMessage = document.getElementById('errorMessage');
        if (errorBoundary && errorMessage) {
            errorBoundary.removeAttribute('aria-hidden');
            errorMessage.textContent = 'Failed to initialize application';
        }
    }
});