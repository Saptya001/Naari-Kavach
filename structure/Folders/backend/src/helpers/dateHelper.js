const moment = require('moment');

/**
 * Get current date and time in a formatted string
 * @param {string} format - Optional format, default: 'YYYY-MM-DD HH:mm:ss'
 * @returns {string}
 */
const getCurrentDateTime = (format = 'YYYY-MM-DD HH:mm:ss') => {
    return moment().format(format);
};

/**
 * Format a given date
 * @param {Date|string} date
 * @param {string} format - Optional format, default: 'YYYY-MM-DD HH:mm:ss'
 * @returns {string}
 */
const formatDate = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(date).format(format);
};

/**
 * Check if a date is before another date
 * @param {Date|string} date1
 * @param {Date|string} date2
 * @returns {boolean}
 */
const isBefore = (date1, date2) => {
    return moment(date1).isBefore(moment(date2));
};

/**
 * Check if a date is after another date
 * @param {Date|string} date1
 * @param {Date|string} date2
 * @returns {boolean}
 */
const isAfter = (date1, date2) => {
    return moment(date1).isAfter(moment(date2));
};

/**
 * Calculate difference between two dates in given units
 * @param {Date|string} date1
 * @param {Date|string} date2
 * @param {string} unit - 'days', 'hours', 'minutes', 'seconds'
 * @returns {number}
 */
const diffBetweenDates = (date1, date2, unit = 'days') => {
    return moment(date2).diff(moment(date1), unit);
};

module.exports = {
    getCurrentDateTime,
    formatDate,
    isBefore,
    isAfter,
    diffBetweenDates
};
