var express = require('express');
var router = express.Router();

var add=require('./addamc');
router.use('/add', add);

var view=require('./viewamc');
router.use('/view', view);

var update=require('./updateamc');
router.use('/update', update);

var del=require('./deleteamc');
router.use('/delete', del);

var amc_scheduling=require('./amc_scheduling');
router.use('/amc_scheduling',amc_scheduling);

module.exports=router;