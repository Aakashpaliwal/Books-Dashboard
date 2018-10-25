var express = require('express');
var router = express.Router();

var add=require('./addproposal');
router.use('/add', add);

var view=require('./viewproposal');
router.use('/view', view);

var update=require('./updateproposal');
router.use('/update', update);

var del=require('./deleteproposal');
router.use('/delete', del);

module.exports=router;