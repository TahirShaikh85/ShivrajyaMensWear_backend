const router = require('express').Router();
const { placeOrder, trackOrder } = require('../../controller/order');

router
    .post('/', placeOrder)  //  '/api/order'
    .get('/track', trackOrder);  //  '/api/order/track'

module.exports = router;