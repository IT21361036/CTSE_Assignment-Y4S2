const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CRUD routes
router.post('/products', productController.createProduct);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

// Bulk operations
router.post('/products/bulk', productController.bulkUpdateProducts);

module.exports = router; 