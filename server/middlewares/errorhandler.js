module.exports = (err, req, res, next) => {
    if (err.name === 'SequelizeValidationError') {
        console.log(err)
        const invalid = []
        err.errors.forEach(i => {
            invalid.push(i.message)
        })
        res.status(400).json(invalid)
    }
    if (err.name === 'JsonWebTokenError') res.status(403).json('Token not provided')
    if (err.name === 'SequelizeConnectionRefusedError') res.status(500).json('Server error !')
    res.status(err.status).json(err.message)
}