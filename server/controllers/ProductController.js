const { Product } = require('../models')
const Sequilize = require('sequelize')
const testing = require('../helpers/testing')

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
        console.log(req.params)
        try {
            const { testing, barang } = req.body
            const getProduct = await Product.findOne({where:{ id }})
            res.status(200).json(getProduct)
        } catch (error) {
            next(error)
        }
    }

    static async addProduct (req, res, next) {
        const { name, quantity, image, price, category } = req.body
        try {
            // const added = await Product.create({ name, quantity, image, price, category })
            testing({ namaBarang: name })
            res.status(201).json({ namaBarang: name })
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

    static async searchProduct (req, res, next) {
        const { search } = req.query
        const Op = Sequilize.Op
        try {
            const findProduct = await Product.findAll({
                where: {
                    // quantity: 100,
                    [Op.or]: [
                        { name: { [Op.iLike]: `%${search}%` } },
                        { category: { [Op.iLike]: `%${search}%` } }
                    ]
                }
            })
            console.log(findProduct)
            res.json(findProduct)
        } catch (err) {
            res.json(err)
        }
    }
}

module.exports = ProductController