const fs = require('fs');
const path = require('path');

const logStream = fs.createWriteStream(path.join(__dirname, 'app.log'), { flags: 'a' });

/**
 * Log a message to the log file
 * @param {string} message - Message to log
 */
const logMessage = (message) => {
    const timestamp = new Date().toISOString();
    logStream.write(`[${timestamp}] ${message}\n`);
};

module.exports = {
    logMessage,
};
