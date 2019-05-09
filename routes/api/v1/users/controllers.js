const ApiError = require('../../../../lib/api-error');

module.exports.getUsers = async function(req, res, next) {

    return res.json({
        hello: 'World'
    })
}