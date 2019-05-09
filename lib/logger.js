const winston = require('winston');
const path = require('path');

const logger = new winston.createLogger({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    handleExceptions: true,
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: path.join(__dirname, '../logs/app.log'),
            handleExceptions: true,
            format: winston.format.simple(),
            maxsize: 5242880, // 5MB
            maxFiles: 5
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true
        })
    ],
    exitOnError: false
});

module.exports = logger;