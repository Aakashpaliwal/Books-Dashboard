var express = require('express');
var router = express.Router();

var supervisorlist = require('./supervisorlist');
router.use('/supervisorlist', supervisorlist);

var companylist = require('./companylist');
router.use('/companylist', companylist);

var categorylist = require('./categorylist');
router.use('/categorylist', categorylist);

var zonelist = require('./zonelist');
router.use('/zonelist', zonelist);

var searchcompanylist = require('./searchcompanylist');
router.use('/searchcompanylist', searchcompanylist);

var equipmentonsite = require('./equipmentonsite');
router.use('/equipmentonsite', equipmentonsite);

var siteoncompany = require('./siteoncompany');
router.use('/siteoncompany', siteoncompany);

var locationonzone = require('./locationonzone');
router.use('/locationonzone', locationonzone);

var zoneloc = require('./zoneloc');
router.use('/zoneloc', zoneloc);

var supervisoronloc = require('./supervisoronloc');
router.use('/supervisoronloc', supervisoronloc);

var supervisoronsite = require('./supervisoronsite');
router.use('/supervisoronsite', supervisoronsite);



module.exports=router;