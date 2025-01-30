const Razorpay = require("razorpay");
const crypto = require('crypto');
const ProductSchema = require('../../model/Product');

// POST - '/api/payment'
exports.makePayment = async (req, res) => {
    try {
        // Validate Razorpay credentials
        if (!process.env.RAZOR_PAY_KEY_ID || !process.env.RAZOR_PAY_KEY_SECRET) {
            return res.status(500).json({ message: "Razorpay credentials are missing!" });
        }

		console.log(process.env.RAZOR_PAY_KEY_ID, " ", process.env.RAZOR_PAY_KEY_SECRET);
		
        const instance = new Razorpay({
            key_id: process.env.RAZOR_PAY_KEY_ID,
            key_secret: process.env.RAZOR_PAY_KEY_SECRET,
        });

        const orderDetails = req.body.orderDetails;

        // Fetch product details
        const buyNowProduct = await ProductSchema.findOne({ _id: orderDetails.id });
        if (!buyNowProduct) {
            return res.status(404).json({ message: "Product not found!" });
        }

        // Calculate the final amount
        const actualAmount = Math.round(
            +buyNowProduct.price - (+buyNowProduct.price * (+buyNowProduct.discountPercentage / 100))
        );
        const deliveryCharge = +buyNowProduct.deliveryCharge || 0;
        const finalAmount = Math.round(actualAmount * +orderDetails.quantity + deliveryCharge);

        // Prepare Razorpay order options
        const receiptId = `receipt_${crypto.randomBytes(10).toString("hex")}`;
        const options = {
            amount: finalAmount * 100, // Amount in paise
            currency: "INR",
            receipt: receiptId,
        };

        console.log("Order Options:", options);

        // Create order in Razorpay
        const order = await instance.orders.create(options);
        res.status(200).json({ data: order });
    } catch (error) {
        console.error("Error in makePayment:", error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
};
