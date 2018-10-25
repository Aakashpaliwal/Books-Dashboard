var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add customer page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
    req.check('name','name must have proper value ').isLength({min:3});
    req.check('spoc','spoc must have proper value ').optional().isLength({min:1});
    req.check('email','email must have proper value ').isLength({min:4}).isEmail().trim();
    req.check('mobile','mobile must have proper value ').optional().isLength({min:10,max:15});
    req.check('address','address must have proper value ').optional().isLength({min:3});
    req.check('id', 'id must be a number').isNumeric();
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
       con.query("select customer_id  from customer where customer_name=? and status=1 and customer_id!=?",[customer.customer_name,req.body.id],function(err,result,fields)
      {
        if(err)
        {
          console.log(err);
          res.json({'success':false,msg: 'something went wrong'});
        }
        else if(result.length ==0)
        {
          con.query("update customer SET ? where customer_id=? and status=1 ;",[customer,req.body.id],function(err,customerresult,fields)
          {
            if(err)
            {
              console.log(sql,err);
              res.json({success:false,msg: 'something went wrong',});
            }
            else
            {
              if(customerresult["affectedRows"]==1)
              res.json({"success":true,'msg':'customer updated'});
              else
              res.json({"success":false,'msg':'invalid operation'}); 
              
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