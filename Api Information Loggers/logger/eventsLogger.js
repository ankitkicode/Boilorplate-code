const { createLogger, format, transports } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const path = require('path');
const fs = require('fs');

function getEventLogger(userId) {
  const logDir = path.join(__dirname, '../logs/events');
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });

  return createLogger({
    level: 'info',
    format: format.combine(
      format.timestamp(),
      format.printf(({ timestamp, level, message }) => {
        return `${timestamp} [User ${userId}] ${level.toUpperCase()}: ${message}`;
      })
    ),
    transports: [
      new DailyRotateFile({
        filename: path.join(logDir, `user-${userId}-%DATE%-events.log`),
        datePattern: 'YYYY-MM-DD',
        zippedArchive: false,      // Set to true if you want logs compressed
        maxSize: '5m',             // Max file size
        maxFiles: '7d'             // Keep logs for last 7 days only
      })
    ]
  });
}

module.exports = getEventLogger;
