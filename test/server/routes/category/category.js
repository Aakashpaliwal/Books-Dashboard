var express = require('express');
var router = express.Router();



// var viewcategory = require('./viewcategory');
// router.use('/view', viewcategory);

var add_category = require('./add_category');
router.use('/add', add_category);




module.exports=router;