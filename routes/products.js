const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

// api/products
router.post('/', productController.createProduct);
router.get('/products', productController.getProducts);
router.get('/products/category/:category', productController.getProductsByCategories);
router.get('/product/word/:word', productController.getProductsByWords);
router.get('/product/:id', productController.getDetailProduct);


module.exports = router;