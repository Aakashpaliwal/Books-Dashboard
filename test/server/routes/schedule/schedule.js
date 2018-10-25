var express = require('express');
var router = express.Router();

var add=require('./addschedule');
router.use('/add', add);

var view=require('./viewschedule');
router.use('/view', view);

var completeservice=require('./completeservice');
router.use('/completeservice', completeservice);

var update=require('./updateschedule');
router.use('/update', update);

var del=require('./deleteschedule');
router.use('/delete', del);

var dueschedule=require('./dueschedule');
router.use('/dueschedule', dueschedule);

var todayschedule=require('./todayschedule');
router.use('/todayschedule', todayschedule);

var postschedule=require('./postschedule');
router.use('/postschedule', postschedule);

var equipment=require('./equipmentvalidation');
router.use('/equipment', equipment);

var company=require('./companyvalidation');
router.use('/company', company);

var zone=require('./zonevalidation');
router.use('/zone', zone);




module.exports=router;