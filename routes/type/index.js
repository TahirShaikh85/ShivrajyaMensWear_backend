const router = require('express').Router();
const { fetchAllCategories, fetchAllLabels } = require('../../controller/type');

router
    .get('/categories', fetchAllCategories)
    .get('/labels', fetchAllLabels);
    
module.exports = router;