const OrderSchema = require('../../model/Order');

// track order 
exports.trackOrder = async (req, res) => {
    try {
        if (!req.body || !req.body.orderIDorMobile) {
            return res.status(400).json({ error: "Please provide a valid order ID or mobile number" });
        }

        const { orderIDorMobile } = req.body;

        const displayThis = {
            "currentBuyNowProduct.title": 1,
            "currentBuyNowProduct.id": 1,
            "currentBuyNowProduct.thumbnail": 1,
            "currentBuyNowProduct.brand": 1,
            "currentBuyNowProduct.quantity": 1,
            "currentBuyNowProduct.selectedSize": 1,
            orderId:1,
            totalAmount: 1,
            status: 1,
            createdAt: 1,
            updatedAt: 1
        }

        const trackedOrder = await OrderSchema.findOne({
            $or: [
                { orderId: { $regex: new RegExp(orderIDorMobile, "i") } },
                { "address.phone": { $regex: new RegExp(orderIDorMobile) } }
            ]
        }, displayThis);

        if (!trackedOrder) {
            return res.status(404).json({ error: "Order not found. Please enter a valid Order ID or Mobile Number" });
        }

        res.status(201).json(trackedOrder);

    } catch (error) {
        console.error("Error tracking order:", error);
        res.status(500).json({ error: "An error occurred while tracking your order" });
    }
}