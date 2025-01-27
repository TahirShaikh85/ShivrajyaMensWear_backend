const crypto = require('crypto');

// // ⭐ POST - '/api/payment/verify'
exports.verifyPayment = async (req, res) => {
    try {
        const
            { razorpay_order_id, razorpay_payment_id, razorpay_signature }
                = req.body;
                
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", process.env.RAZOR_PAY_KEY_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (razorpay_signature === expectedSign) {
            return res.status(200).json({ message: "Payment verified successfully", paymentSuccess: true });
        } else {
            return res.status(400).json({ message: "Invalid signature sent!", paymentSuccess: false });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!", paymentSuccess: false });
        console.log(error);
    }
};