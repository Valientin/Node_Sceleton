const logger = require('../logger');

module.exports = function(error, req, res, next) {
    const status = error.status || 500;

    logger.error(
        `Error ${status}: ${error.message}\n ${error.stack}\n`
    );

    res.status(status).json({
        error: error.message,
        data: error.data
    });
};
