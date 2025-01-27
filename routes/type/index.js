const router = require('express').Router();
const { fetchAllCategories, fetchAllLabels } = require('../../controller/type');

router
    .get('/categories', fetchAllCategories) //   '/api/type/categories'
    .get('/labels', fetchAllLabels);  //   '/api/type/labels'
    
module.exports = router;