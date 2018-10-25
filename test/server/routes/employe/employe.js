var express = require('express');
var router = express.Router();

//any admin can add
var add=require('./addemploye');
router.use('/add', add);

//any admin can view
var view=require('./viewemploye');
router.use('/view', view);

//any admin can update
var update=require('./updateemploye');
router.use('/update', update);

//any admin can delete
var del=require('./deleteemploye');
router.use('/delete',del);

module.exports=router;