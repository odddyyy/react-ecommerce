const router = require('express').Router()
const ProductController = require('../controllers/ProductController')
const { authentication, adminAuthorization } = require('../middlewares/auth')

router.get('/', ProductController.getAllProducts)
router.get('/search', ProductController.searchProduct)
router.get('/:id', ProductController.getOneProduct)
router.post('/', ProductController.addProduct)
router.delete('/:id', authentication, adminAuthorization, ProductController.deleteProduct)
router.put('/:id', authentication, adminAuthorization, ProductController.updateProduct)

module.exports = router