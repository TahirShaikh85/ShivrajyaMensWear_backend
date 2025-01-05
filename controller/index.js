// 🌟 user - product controller
const { fetchAllProducts, fetchProductById } = require('./product/retrieve');

// 🌟 user - category & label controller
const { fetchAllCategories, fetchAllLabels } = require('./category/retrieve');

// 🌟 user - order controller
const { trackOrder } = require('./order/retrieve');
const { placeOrder } = require('./order/create');

// ----
module.exports = {
    fetchAllProducts,
    fetchProductById,
    fetchAllCategories,
    fetchAllLabels,
    trackOrder,
    placeOrder
}

