const OrderSchema = require('../../model/Order');

// create new order (place order) - User
exports.placeOrder = async (req, res) => {
    const order = new OrderSchema(req.body);
    try {
        const doc = await order.save();
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }

};