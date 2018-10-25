var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');
//verification only by jwt
router.get('/',func.auth2,function(req, res, next) 
{
  con.query("select *  from admin where createdby=? and status=1",req.decoded.aid,function(err,adminresult,fields)
  {
    if(err)
    {
      console.log(err);
      res.json({'success':false});
    }
    else
    { 
      console.log(adminresult);
      res.json({"success":true,'msg':'all admins made by you ','admindata':adminresult});    
    }      
  });          
});

module.exports = router;