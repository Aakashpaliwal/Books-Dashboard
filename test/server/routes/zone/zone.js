var express = require('express');
var router = express.Router();

var add=require('./addzone');
router.use('/add', add);

var view=require('./viewzone');
router.use('/view', view);

var update=require('./updatezone');
router.use('/update', update);

var del=require('./deletezone');
router.use('/delete', del);

module.exports=router;