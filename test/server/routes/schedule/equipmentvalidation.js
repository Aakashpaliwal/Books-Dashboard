var express = require('express');
var router = express.Router();
var func = require('../func.js');
// var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{
    var equipment=req.query.name;
    con.query("select equipment_id as id from equipment where status=1 and name=?",equipment,function(err,result,fields)
  {
    if(err)
    {
      console.log(err);
      res.json({'success':false,'msg':''});
    }
    else if(result.length==1)
    {
      res.json({"success":true,'msg':'','data':result});
    }
    else
    {
      res.json({"success":false,'msg':'equipment not valid'});    
    }      
  });       
});


module.exports = router;