var express = require('express');
var router = express.Router();

var view_loc_sup = require('./view_location_supervisor');
router.use('/view', view_loc_sup);

var add_location_supervisor = require('./add_location_supervisor');
router.use('/add', add_location_supervisor);

module.exports=router;