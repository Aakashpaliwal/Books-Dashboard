var express = require('express');
var router = express.Router();

var add=require('./addcomplaint');
router.use('/add', add);

var view=require('./viewcomplaint');
router.use('/view', view);

var update=require('./updatecomplaint');
router.use('/update', update);

var del=require('./deletecomplaint');
router.use('/delete', del);

module.exports=router;