const CategorySchema = require('../../model/Category');
const LabelSchema = require('../../model/Label');

// get all the categories for UI
exports.fetchAllCategories = async (req, res) => {
    try {
        const categories = await CategorySchema.find({});
        res.status(201).send(categories)
    } catch (error) {
        res.status(500).send(error)
    }
}

// get all the labels for UI
exports.fetchAllLabels = async (req, res) => {
    try {
        const labels = await LabelSchema.find({});
        res.status(201).send(labels)
    } catch (error) {
        res.status(500).send(error)
    }
}