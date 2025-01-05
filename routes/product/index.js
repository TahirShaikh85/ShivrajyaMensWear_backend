const router = require('express').Router();
const { fetchAllProducts, fetchProductById } = require('../../controller/product');

router.get('/', fetchAllProducts)
    .get('/id', fetchProductById);

module.exports = router;