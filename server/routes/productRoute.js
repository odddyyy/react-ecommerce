const router = require('express').Router()
const ProductController = require('../controllers/ProductController')
const { authentication, adminAuthorization } = require('../middlewares/auth')

router.get('/', ProductController.getAllProducts)
router.get('/:id', ProductController.getOneProduct)
router.post('/', authentication, adminAuthorization, ProductController.addProduct)
router.delete('/:id', authentication, adminAuthorization, ProductController.deleteProduct)
router.put('/:id', authentication, adminAuthorization, ProductController.updateProduct)

module.exports = router