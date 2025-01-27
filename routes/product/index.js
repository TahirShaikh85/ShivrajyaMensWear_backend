const router = require('express').Router();
const { fetchAllProducts, fetchProductById } = require('../../controller/product');

router.get('/', fetchAllProducts) //  '/api/products'
    .get('/:id', fetchProductById); //  '/api/products/:id'

module.exports = router;