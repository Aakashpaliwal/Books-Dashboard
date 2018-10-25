var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add site page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  req.check('address','invalid address').isLength({min:1,max:100});
  req.check('location_id','invalid location').isNumeric();
  req.check('customer_id','invalid customer').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var address=req.body.address;
    var site = 
    {
      address:address.toUpperCase(),
      customer_id:req.body.customer_id,
      location_id:req.body.location_id,
      createdby:req.decoded.aid
    };
     con.query("select site_id from site where address=? and status=1 ",[site.address],function(err,result,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else if(result.length ==0)
      {
         con.query("Insert into site SET ? ;",site,function(err,result)
        {
          if(err)
          {
            console.log(sql,err);
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
        res.json({success:false,msg:'this address already registered'}) ;    
      }      
    });
  }		   
});
module.exports = router;