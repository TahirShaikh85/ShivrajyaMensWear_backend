const router = require('express').Router();
const { makePayment, verifyPayment } = require('../../controller/payment');

router.post("/", makePayment)
	.post("/verify", verifyPayment);

module.exports = router;