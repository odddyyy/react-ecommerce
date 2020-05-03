const { verifyToken } = require('../helpers/token')

const authentication = (req, res, next) => {
    const { token } = req.headers
    try {
        req.userData = verifyToken(token)
        next()
    } catch (err) {
        next(err)
    }
}

const adminAuthorization = (req, res, next) => {
    try {
        if (!req.userData.admin) throw ({status:403, message: 'Not authorized'})
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = { authentication, adminAuthorization }