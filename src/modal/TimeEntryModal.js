// TimeEntryModal.js
export class TimeEntryModal {
    constructor(onSaveCallback) {
        if (typeof onSaveCallback !== "function") {
            throw new Error("TimeEntryModal requires a valid onSave callback function.");
        }

        this.onSave = onSaveCallback;
        this.state = {
            isOpen: false,
            isLoading: false,
            selectedDate: null,
            currentEntry: null,
            hasUnsavedChanges: false,
        };

        this.initializeElements();
        this.setupValidationRules();
        this.bindEventHandlers();
        this.setupKeyboardNavigation();
    }

    initializeElements() {
        this.modal = document.getElementById("timeEntryModal");
        if (!this.modal) throw new Error("Modal element not found.");

        this.dateDisplay = document.getElementById("modalDate");
        this.timeOffCheck = document.getElementById("timeOffCheck");
        this.managerApprovalCheck = document.getElementById("managerApprovedCheck");
        this.hoursInput = document.getElementById("hoursInput");
        this.overtimeApprovalCheck = document.getElementById("overtimeApprovedCheck");
        this.shortDayApprovalCheck = document.getElementById("shortDayApprovedCheck");

        this.saveButton = document.getElementById("saveEntry");
        this.closeButton = document.getElementById("closeModal");

        this.loadingOverlay = document.createElement("div");
        this.loadingOverlay.className = "modal-loading-overlay";
        this.loadingOverlay.innerHTML = '<div class="spinner"></div>';
        this.loadingOverlay.style.display = "none";
        this.modal.appendChild(this.loadingOverlay);
    }

    setupValidationRules() {
        this.validationRules = {
            hours: {
                validate: (value) => {
                    const hours = Number(value);
                    return !isNaN(hours) && hours >= 0 && hours <= 24;
                },
                message: "Please enter valid hours (0 to 24).",
            },
        };
    }

    bindEventHandlers() {
        this.timeOffCheck.addEventListener("change", () => this.handleTimeOffToggle());
        this.hoursInput.addEventListener("input", () => this.handleHoursInputChange());
        this.hoursInput.addEventListener("blur", () => this.validateInput("hours"));
        this.saveButton.addEventListener("click", () => this.handleSave());
        this.closeButton.addEventListener("click", () => this.close());

        this.modal.querySelectorAll("input").forEach((input) => {
            input.addEventListener("change", () => {
                this.state.hasUnsavedChanges = true;
            });
        });
    }

    setupKeyboardNavigation() {
        document.addEventListener("keydown", (event) => {
            if (!this.state.isOpen) return;

            if (event.key === "Escape") {
                event.preventDefault();
                this.close();
            } else if (event.key === "Enter" && event.ctrlKey) {
                event.preventDefault();
                this.handleSave();
            }
        });
    }

    open(date, currentEntry = null) {
        if (!date || isNaN(date.getTime())) {
            console.error("Invalid date passed to modal:", date);
            return;
        }

        this.state.selectedDate = date;
        this.state.currentEntry = currentEntry;
        this.state.hasUnsavedChanges = false;
        this.state.isOpen = true;

        this.updateModalContent();
        this.modal.style.display = "flex";
        requestAnimationFrame(() => {
            this.modal.classList.add("modal-visible");
        });
    }

    close() {
        if (this.state.hasUnsavedChanges && !confirm("You have unsaved changes. Discard them?")) {
            return;
        }

        this.modal.classList.remove("modal-visible");
        setTimeout(() => {
            this.modal.style.display = "none";
            this.resetState();
        }, 300);
    }

    resetState() {
        this.state = {
            isOpen: false,
            isLoading: false,
            selectedDate: null,
            currentEntry: null,
            hasUnsavedChanges: false,
        };
    }

    updateModalContent() {
        this.dateDisplay.textContent = this.formatDate(this.state.selectedDate);

        const entry = this.state.currentEntry;
        this.timeOffCheck.checked = entry?.isTimeOff || false;
        this.managerApprovalCheck.checked = entry?.managerApproved || false;
        this.hoursInput.value = entry?.hours ?? 8;
        this.overtimeApprovalCheck.checked = entry?.overtimeApproved || false;
        this.shortDayApprovalCheck.checked = entry?.shortDayApproved || false;

        this.updateSectionVisibility();
        this.setInitialFocus();
    }

    handleTimeOffToggle() {
        const isTimeOff = this.timeOffCheck.checked;
        this.hoursInput.value = isTimeOff ? 0 : 8;
        this.updateSectionVisibility();
        this.state.hasUnsavedChanges = true;
    }

    handleHoursInputChange() {
        this.validateInput("hours");
        this.updateSectionVisibility();
        this.state.hasUnsavedChanges = true;
    }

    updateSectionVisibility() {
        const isTimeOff = this.timeOffCheck.checked;
        const hours = Number(this.hoursInput.value);

        document.getElementById("timeOffApproval").style.display = isTimeOff ? "block" : "none";
        document.getElementById("hoursSection").style.display = isTimeOff ? "none" : "block";
        document.getElementById("overtimeApproval").style.display = hours > 8 ? "block" : "none";
        document.getElementById("shortDayApproval").style.display = hours < 8 ? "block" : "none";
    }

    async handleSave() {
        if (this.state.isLoading || !this.validate()) return;

        try {
            this.setLoading(true);
            const entryData = this.collectFormData();
            await this.onSave(this.state.selectedDate, entryData);
            this.state.hasUnsavedChanges = false;
            this.close();
        } catch (error) {
            console.error("Error saving time entry:", error);
            this.showError("Failed to save time entry. Please try again.");
        } finally {
            this.setLoading(false);
        }
    }

    validate() {
        const isValid = this.validationRules.hours.validate(this.hoursInput.value);
        if (!isValid) this.showError(this.validationRules.hours.message);
        return isValid;
    }

    collectFormData() {
        const isTimeOff = this.timeOffCheck.checked;
        return {
            hours: isTimeOff ? 0 : Number(this.hoursInput.value),
            isTimeOff,
            managerApproved: this.managerApprovalCheck.checked,
            overtimeApproved: this.overtimeApprovalCheck.checked,
            shortDayApproved: this.shortDayApprovalCheck.checked,
            timestamp: new Date().toISOString(),
        };
    }

    setLoading(isLoading) {
        this.state.isLoading = isLoading;
        this.loadingOverlay.style.display = isLoading ? "flex" : "none";
        this.saveButton.disabled = isLoading;
    }

    showError(message) {
        const errorEl = document.createElement("div");
        errorEl.className = "modal-error";
        errorEl.textContent = message;

        const existingError = this.modal.querySelector(".modal-error");
        if (existingError) existingError.remove();

        this.modal.appendChild(errorEl);
        setTimeout(() => errorEl.remove(), 5000);
    }

    setInitialFocus() {
        if (this.timeOffCheck.checked) {
            this.managerApprovalCheck.focus();
        } else {
            this.hoursInput.focus();
            this.hoursInput.select();
        }
    }

    formatDate(date) {
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
}