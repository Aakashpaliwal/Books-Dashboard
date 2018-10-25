var express = require('express');
var router = express.Router();

var add=require('./addlocation');
router.use('/add', add);

var view=require('./viewlocation');
router.use('/view', view);

var update=require('./updatelocation');
router.use('/update', update);

var del=require('./deletelocation');
router.use('/delete', del);

module.exports=router;