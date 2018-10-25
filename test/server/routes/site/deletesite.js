var express = require('express');
var router = express.Router();
var func = require('../func.js');
// var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{
  var site_id=req.query.id;
  // req.checkQuery('id', 'id must be a number').optional().isNumber();
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    con.query("update site set ? where site_id= ? and status=1 ",[{'status':0,'createdby':req.decoded.aid},site_id],function(err,siteresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false});
      }
      else
      { 
        if(siteresult["affectedRows"]==1)
        res.json({"success":true,'msg':'site deleted'});
        else
        res.json({"success":false,'msg':'invalid operation'});    
      }      
    });  
  }       
});


module.exports = router;