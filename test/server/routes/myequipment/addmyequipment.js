// in db same record(duplicate) can't inserted : unique defined

var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.post('/',func.auth2,function(req,res)
{
    console.log(req.ip);
    req.check('category_id','equipment category must have proper value ').isNumeric();
    req.check('capacity','equipment capacity must have proper value ').isLength({min:1});
    req.check('year','year must have proper value ').isLength({min:4,max:4}).isNumeric().trim();
    req.check('brand','equipment brand must have proper value ').isLength({min:3});
    req.check('model','model must have proper value ').isLength({min:3});
    var verrs=req.validationErrors();
    if(verrs)
    {
      res.json({ success:false,msg: verrs[0].msg,});
      //console.log('*******'+verrs.length+'**********'+JSON.stringify(verrs)+'********'+verrs[1].msg+'********');
    }
    else
    {
      var myequipment = 
      {
        category_id:req.body.category_id,
        brand:req.body.brand,
        model:req.body.model,
        year:req.body.year,
        capacity:req.body.capacity,
      };
      con.query("Insert into myequipment SET ? ;",myequipment,function(err,result)
      {
        if(err)
        {
          console.log(err);
          res.json({success:false,msg: 'something went wrong',});
        }
        else
        {
          res.json({ success:true,msg: 'succesful entry', });
        }
      });

    }       
});

module.exports = router;