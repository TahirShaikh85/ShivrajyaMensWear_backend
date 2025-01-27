const router = require('express').Router();
const { makePayment, verifyPayment } = require('../../controller/payment');

router.post("/", makePayment)  //  '/api/payment'
	.post("/verify", verifyPayment); //  '/api/payment/verify'

module.exports = router;