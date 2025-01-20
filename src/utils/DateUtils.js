// DateUtils.js
export class DateUtils {
    /**
     * Format a Date object as a string (YYYY-MM-DD).
     * @param {Date} date - The date to format.
     * @returns {string} - The formatted date string.
     */
    static formatDate(date) {
        if (!(date instanceof Date)) {
            throw new Error("Invalid date object");
        }
        return date.toISOString().split("T")[0];
    }

    /**
     * Parse a string (YYYY-MM-DD) into a Date object.
     * @param {string} dateString - The date string to parse.
     * @returns {Date} - The parsed Date object.
     */
    static parseDate(dateString) {
        const date = new Date(dateString);
        if (isNaN(date)) {
            throw new Error("Invalid date string");
        }
        return date;
    }

    /**
     * Normalize a Date object by setting time to midnight.
     * @param {Date} date - The date to normalize.
     * @returns {Date} - The normalized Date object.
     */
    static normalizeDate(date) {
        if (!(date instanceof Date)) {
            throw new Error("Invalid date object");
        }
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    /**
     * Get the difference in days between two dates.
     * @param {Date} startDate - The start date.
     * @param {Date} endDate - The end date.
     * @returns {number} - The difference in days.
     */
    static getDateDifference(startDate, endDate) {
        const start = this.normalizeDate(startDate);
        const end = this.normalizeDate(endDate);
        return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    }

    /**
     * Check if a date is within a range (inclusive).
     * @param {Date} date - The date to check.
     * @param {Date} startDate - The start of the range.
     * @param {Date} endDate - The end of the range.
     * @returns {boolean} - Whether the date is within the range.
     */
    static isDateInRange(date, startDate, endDate) {
        const normalizedDate = this.normalizeDate(date);
        return normalizedDate >= this.normalizeDate(startDate) && normalizedDate <= this.normalizeDate(endDate);
    }
}