var express = require('express');
var router = express.Router();
var func = require('../func.js');
// var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{
  var customer=req.query.name;
  con.query("select customer_id as id from customer where status=1 and name=?",customer,function(err,result,fields)
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
      res.json({"success":false,'msg':'company/customer not valid'});    
    }      
  });       
});


module.exports = router;