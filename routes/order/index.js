const router = require('express').Router();
const { placeOrder, trackOrder } = require('../../controller/order');

router
    .post('/', placeOrder)
    .get('/track', trackOrder);

module.exports = router;