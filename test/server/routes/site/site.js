var express = require('express');
var router = express.Router();

var add=require('./addsite');
router.use('/add', add);

var view=require('./viewsite');
router.use('/view', view);

var update=require('./updatesite');
router.use('/update', update);

var del=require('./deletesite');
router.use('/delete', del);

module.exports=router;