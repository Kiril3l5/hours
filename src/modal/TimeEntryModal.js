// TimeEntryModal.js
import { DateUtils } from '../../../shared/utils/DateUtils.js';

export class TimeEntryModal {
    constructor(onSaveCallback) {
        if (typeof onSaveCallback !== 'function') {
            throw new Error('TimeEntryModal requires a valid onSave callback function');
        }

        this.onSave = onSaveCallback;
        this.state = {
            isOpen: false,
            isLoading: false,
            selectedDate: null,
            currentEntry: null,
            hasUnsavedChanges: false
        };

        this.createModal();
        this.setupEventListeners();
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.className = 'time-entry-modal';
        this.modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Time Entry</h2>
                    <button class="close-button" aria-label="Close">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="timeEntryForm">
                        <div class="form-group">
                            <label for="entryDate">Date</label>
                            <input type="date" id="entryDate" disabled>
                        </div>
                        
                        <div class="form-group">
                            <label>
                                <input type="checkbox" id="timeOffCheck">
                                Time Off
                            </label>
                        </div>

                        <div class="form-group" id="hoursGroup">
                            <label for="hoursInput">Hours</label>
                            <input type="number" id="hoursInput" min="0" max="24" step="0.5">
                        </div>

                        <div class="form-group" id="timeOffGroup" style="display: none;">
                            <label>
                                <input type="checkbox" id="managerApprovedCheck">
                                Manager Approved
                            </label>
                        </div>

                        <div class="form-group" id="overtimeGroup" style="display: none;">
                            <label>
                                <input type="checkbox" id="overtimeApprovedCheck">
                                Overtime Approved
                            </label>
                        </div>

                        <div class="form-group">
                            <label for="notesInput">Notes</label>
                            <textarea id="notesInput" rows="3"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-secondary" data-action="cancel">Cancel</button>
                    <button type="button" class="btn-primary" data-action="save">Save</button>
                </div>
                <div class="loading-overlay" style="display: none;">
                    <div class="spinner"></div>
                </div>
            </div>
        `;

        document.body.appendChild(this.modal);
        this.initializeElements();
    }

    initializeElements() {
        this.elements = {
            form: this.modal.querySelector('#timeEntryForm'),
            dateInput: this.modal.querySelector('#entryDate'),
            timeOffCheck: this.modal.querySelector('#timeOffCheck'),
            hoursInput: this.modal.querySelector('#hoursInput'),
            hoursGroup: this.modal.querySelector('#hoursGroup'),
            timeOffGroup: this.modal.querySelector('#timeOffGroup'),
            overtimeGroup: this.modal.querySelector('#overtimeGroup'),
            managerApprovedCheck: this.modal.querySelector('#managerApprovedCheck'),
            overtimeApprovedCheck: this.modal.querySelector('#overtimeApprovedCheck'),
            notesInput: this.modal.querySelector('#notesInput'),
            loadingOverlay: this.modal.querySelector('.loading-overlay'),
            saveButton: this.modal.querySelector('[data-action="save"]'),
            cancelButton: this.modal.querySelector('[data-action="cancel"]'),
            closeButton: this.modal.querySelector('.close-button')
        };
    }

    setupEventListeners() {
        this.elements.timeOffCheck.addEventListener('change', () => this.handleTimeOffToggle());
        this.elements.hoursInput.addEventListener('input', () => this.handleHoursInput());
        this.elements.saveButton.addEventListener('click', () => this.handleSave());
        this.elements.cancelButton.addEventListener('click', () => this.close());
        this.elements.closeButton.addEventListener('click', () => this.close());
        
        this.elements.form.addEventListener('change', () => {
            this.state.hasUnsavedChanges = true;
        });

        document.addEventListener('keydown', (e) => {
            if (this.state.isOpen) {
                if (e.key === 'Escape') {
                    e.preventDefault();
                    this.close();
                } else if (e.key === 'Enter' && e.ctrlKey) {
                    e.preventDefault();
                    this.handleSave();
                }
            }
        });

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });
    }

    open(date, currentEntry = null) {
        if (!date || !(date instanceof Date)) {
            throw new Error('Invalid date provided to modal');
        }

        this.state.selectedDate = date;
        this.state.currentEntry = currentEntry;
        this.state.hasUnsavedChanges = false;
        this.state.isOpen = true;

        this.elements.dateInput.value = DateUtils.formatDate(date);
        this.populateForm(currentEntry);
        
        this.modal.classList.add('active');
        this.elements.hoursInput.focus();
    }

    close() {
        if (this.state.hasUnsavedChanges) {
            const proceed = confirm('You have unsaved changes. Are you sure you want to close?');
            if (!proceed) return;
        }

        this.modal.classList.remove('active');
        this.resetForm();
        this.state.isOpen = false;
    }

    populateForm(entry) {
        if (entry) {
            this.elements.timeOffCheck.checked = entry.isTimeOff || false;
            this.elements.hoursInput.value = entry.hours || '';
            this.elements.managerApprovedCheck.checked = entry.managerApproved || false;
            this.elements.overtimeApprovedCheck.checked = entry.overtimeApproved || false;
            this.elements.notesInput.value = entry.notes || '';
        } else {
            this.resetForm();
        }

        this.updateVisibility();
    }

    resetForm() {
        this.elements.form.reset();
        this.elements.hoursInput.value = '8';
        this.updateVisibility();
    }

    handleTimeOffToggle() {
        this.updateVisibility();
        this.state.hasUnsavedChanges = true;
    }

    handleHoursInput() {
        const hours = parseFloat(this.elements.hoursInput.value);
        this.elements.overtimeGroup.style.display = hours > 8 ? 'block' : 'none';
        this.state.hasUnsavedChanges = true;
    }

    updateVisibility() {
        const isTimeOff = this.elements.timeOffCheck.checked;
        this.elements.hoursGroup.style.display = isTimeOff ? 'none' : 'block';
        this.elements.timeOffGroup.style.display = isTimeOff ? 'block' : 'none';
        this.elements.overtimeGroup.style.display = 
            !isTimeOff && parseFloat(this.elements.hoursInput.value) > 8 ? 'block' : 'none';
    }

    async handleSave() {
        if (this.state.isLoading || !this.validateForm()) return;

        const formData = this.collectFormData();
        
        try {
            this.setLoading(true);
            await this.onSave(this.state.selectedDate, formData);
            this.state.hasUnsavedChanges = false;
            this.close();
        } catch (error) {
            console.error('Error saving time entry:', error);
            this.showError('Failed to save time entry');
        } finally {
            this.setLoading(false);
        }
    }

    validateForm() {
        const hours = parseFloat(this.elements.hoursInput.value);
        if (!this.elements.timeOffCheck.checked && (isNaN(hours) || hours < 0 || hours > 24)) {
            this.showError('Please enter valid hours (0-24)');
            return false;
        }
        return true;
    }

    collectFormData() {
        return {
            isTimeOff: this.elements.timeOffCheck.checked,
            hours: this.elements.timeOffCheck.checked ? 0 : parseFloat(this.elements.hoursInput.value),
            managerApproved: this.elements.managerApprovedCheck.checked,
            overtimeApproved: this.elements.overtimeApprovedCheck.checked,
            notes: this.elements.notesInput.value.trim(),
            timestamp: new Date().toISOString()
        };
    }

    setLoading(isLoading) {
        this.state.isLoading = isLoading;
        this.elements.loadingOverlay.style.display = isLoading ? 'flex' : 'none';
        this.elements.saveButton.disabled = isLoading;
    }

    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'modal-error';
        errorDiv.textContent = message;
        
        const existingError = this.modal.querySelector('.modal-error');
        if (existingError) existingError.remove();
        
        this.modal.querySelector('.modal-body').prepend(errorDiv);
        setTimeout(() => errorDiv.remove(), 5000);
    }

    destroy() {
        this.modal.remove();
    }
}