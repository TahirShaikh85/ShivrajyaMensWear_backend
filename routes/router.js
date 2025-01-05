const router = require('express').Router();

router.use('/products', require('./product'));

router.use('/type', require('./type')); // type like categories & labels

router.use('/order', require('./order'));

router.use('/payment', require('./payment'));

module.exports = router;