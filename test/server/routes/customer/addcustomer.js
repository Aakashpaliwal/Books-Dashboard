var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');
//`customer_id`, `name`, `spoc`, `email`, `mobile`, `address`
router.post('/',func.auth2,function(req,res)
{
    console.log(req.ip);
    req.check('name','name must have proper value ').isLength({min:3});
    req.check('spoc','spoc must have proper value ').optional().isLength({min:1});
    req.check('email','email must have proper value ').isLength({min:4}).isEmail().trim();
    req.check('mobile','mobile must have proper value ').optional().isLength({min:10,max:15});
    req.check('address','address must have proper value ').optional().isLength({min:3});
    var verrs=req.validationErrors();
    if(verrs)
    {
      res.json({ success:false,msg: verrs[0].msg,});
      //console.log('*******'+verrs.length+'**********'+JSON.stringify(verrs)+'********'+verrs[1].msg+'********');
    }
    else
    {
    var customername=req.body.name;
    var customer = 
    {
        customer_name:customername.toUpperCase(),
        spoc:req.body.spoc,
        email:req.body.email,
        mobile:req.body.mobile,
        address:req.body.address,
      };
    con.query("select customer_id  from customer where customer_name=? and status=1",customer.customer_name,function(err,result,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else if(result.length ==0)
      {
          con.query("Insert into customer SET ? ;",customer,function(err,result)
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
      else
      { 
        res.json({success:false,msg:'customer name is not allowed'}) ;    
      }      
    });
    }       
});

module.exports = router;