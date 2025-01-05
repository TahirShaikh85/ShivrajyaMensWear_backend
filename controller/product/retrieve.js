const ProductSchema = require('../../model/Product');

// fetch all products -- for both User & Admin panel
exports.fetchAllProducts = async (req, res) => {
    
    let query = ProductSchema.find({}).sort({ createdAt: -1 });

    if (req.query.category) {
        query = query.find({ category: req.query.category });
    }
    if (req.query.label) {
        query = query.find({ label: req.query.label });
    }
    //TODO : How to get sort on discounted Price not on Actual price
    if (req.query._sort && req.query._order) {
        query = query.sort({ [req.query._sort]: req.query._order });
    }

    try {
        const docs = await query.exec();
        res.status(200).json(docs);
    } catch (err) {
        res.status(400).json(err);
    }
};

// fetch particular product
exports.fetchProductById = async (req, res) => {
    try {
        let { id } = req.query;
        const product = await ProductSchema.findOne({ _id: id });
        res.status(201).send(product);

    } catch (error) {
        res.status(500).send(error);
    }
}
