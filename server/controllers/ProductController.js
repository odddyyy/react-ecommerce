const { Product } = require('../models')

class ProductController {

    static async getAllProducts (req, res, next) {
        try {
            const allProducts = await Product.findAll()
            res.status(200).json(allProducts)
        } catch (err) {
            next(err)
        }
    }

    static async getOneProduct (req, res, next) {
        const { id } = req.params
        console.log(id)
        try {
            const product = await Product.findByPk(id)
            res.status(200).json(product)
        } catch (err) {
            next(err)
        }
    }

    static async addProduct (req, res, next) {
        const { name, quantity, image, price, category } = req.body
        try {
            const added = await Product.create({ name, quantity, image, price, category })
            res.status(201).json(added)
        } catch (err) {
            next(err)
        }
    }

    static async deleteProduct (req, res, next) {
        const { id } = req.params
        try {
            const deleting = await Product.destroy({where: { id }})
            if (deleting === 0) throw ({status: 404, message: 'Product not found'})
            res.status(200).json('product deleted')
        } catch (err) {
            next(err)
        }
    }

    static async updateProduct (req, res, next) {
        const { name, quantity, image, price, category } = req.body
        const { id } = req.params
        try {
            const updating = await Product.update({ name, quantity, image, price, category }, {where:{ id }})
            if (updating[0] === 0) throw ({status:404, message: 'Product not found'})
            res.status(201).json('product updated')
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ProductController