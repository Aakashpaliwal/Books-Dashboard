//who made can update only
var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add admin page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  req.check('adminname','invalid adminname').isLength({min:2,max:100});
  req.check('password','invalid password').isLength({min:2,max:100});
  req.check('name','invalid name').isLength({min:2,max:100});
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var admin = 
    {
      admin_name:req.body.adminname,
      admin_password:edo.hashPassword(req.body.password),
      name:req.body.name,          
      created_by:req.decoded.aid
    };
    con.query("update admin SET ? where admin_id=? and status=1 ;",[admin,req.decoded.aid],function(err,adminresult,fields)
    {
      if(err)
      {
        console.log(sql,err);
        res.json({success:false,msg: 'something went wrong',});
      }
      else
      {
        if(adminresult["affectedRows"]==1)
        res.json({"success":true,'msg':'admin updated'});
        else
        res.json({"success":false,'msg':'invalid operation'}); 
        
      }
    });
  }		   
});


module.exports = router;