const bcrypt = require('bcryptjs')
const salt = 10

const encryptPassword = (password) => {
    return bcrypt.hashSync(password, salt)
}

const decryptPassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword)
}

module.exports = { encryptPassword, decryptPassword }