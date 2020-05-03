const { User } = require('../models')
//helpers
const { createToken } = require('../helpers/token')
const { decryptPassword } = require('../helpers/bcrypt')

class UserController {

    static async register (req, res, next) {
        const { name, email, password, admin } = req.body
        try {
            const unique = await User.findOne({where: { email }})
            if (unique) throw ({status: 400, message: 'email already in use'})
            const addUser = await User.create({ name, email, password, admin })
            const token = createToken({
                id: addUser.id,
                name: addUser.name,
                email: addUser.email,
                admin: addUser.admin
            })
            res.status(201).json({ token, name, admin: addUser.admin })
        } catch (err) {
            next(err)
        }
    }

    static async login (req, res, next) {
        const { email, password } = req.body
        try {
            const find = await User.findOne({where: { email }})
            if (!find) throw ({status:400, message: 'Invalid email / password'})
            console.log(find)
            const checkPassword = decryptPassword(password, find.password)
            if (!checkPassword) throw ({status:400, message: 'Invalid email / password'})
            const token = createToken({
                id: find.id,
                name: find.name,
                email: find.email,
                admin: find.admin
            })
            res.status(200).json({ token, name: find.name, admin: find.admin })
        } catch (err) {
            next(err)
        }
    }

}

module.exports = UserController