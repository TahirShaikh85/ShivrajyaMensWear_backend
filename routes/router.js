const router = require('express').Router();

// '/api/products'
router.use('/products', require('./product'));

// '/api/type'
router.use('/type', require('./type')); // type like categories & labels

// '/api/order'
router.use('/order', require('./order'));

// '/api/payment'
router.use('/payment', require('./payment'));

module.exports = router;