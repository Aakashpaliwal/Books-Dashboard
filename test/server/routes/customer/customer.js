var express = require('express');
var router = express.Router();

var add=require('./addcustomer');
router.use('/add', add);

var view=require('./viewcustomer');
router.use('/view', view);

var update=require('./updatecustomer');
router.use('/update', update);

var del=require('./deletecustomer');
router.use('/delete', del);

module.exports=router;