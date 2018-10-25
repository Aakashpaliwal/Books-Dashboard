var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add myequipment page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
    req.check('category','equipment category must have proper value ').isLength({min:3});
    req.check('capacity','equipment capacity must have proper value ').isLength({min:3});
    req.check('year','year must have proper value ').isLength({min:4,max:4}).isNumeric().trim();
    req.check('brand','equipment brand must have proper value ').isLength({min:3});
    req.check('model','model must have proper value ').isLength({min:3});

  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var myequipment = 
    {
        category:req.body.category,
        brand:req.body.brand,
        model:req.body.model,
        year:req.body.year,
        capacity:req.body.capacity,
    };
    con.query("update myequipment SET ? where myequipment_id=? and status=1 ;",[myequipment,req.body.id],function(err,myequipmentresult,fields)
    {
      if(err)
      {
        console.log(sql,err);
        res.json({success:false,msg: 'something went wrong',});
      }
      else
      {
        if(myequipmentresult["affectedRows"]==1)
        res.json({"success":true,'msg':'myequipment updated'});
        else
        res.json({"success":false,'msg':'invalid operation'}); 
        
      }
    });
  }		   
});


module.exports = router;