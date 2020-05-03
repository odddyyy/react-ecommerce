module.exports = (err, req, res, next) => {
    console.log(err, 'ERROR')
    console.log(err.name, 'ERROR NAME')
    if (err.name === 'JsonWebTokenError') res.status(403).json('Token not provided')
    if (err.name === 'SequelizeConnectionRefusedError') res.status(500).json('Server error !')
    res.status(err.status).json(err.message)
}