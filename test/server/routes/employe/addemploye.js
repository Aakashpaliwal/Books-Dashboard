var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add employe page'});     
// });
//`employe_id`, name  alias other name for removing conflict  email mobile  position  createdby fk adminid  employename password
router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  req.check('name','invalid employe name').exists().isLength({min: 2 , max: 100}).withMessage('Name should not be empty, should be more than 2 and less than 100 character').trim();
  req.check('mobile','invalid mobile').isLength({min:10,max:10}).isNumeric();
  req.check('position','invalid position').isLength({min:1,max:1}).isNumeric();
  // var regex = new RegExp('/^[/d[789]{1}/d{9}$/'); // ^[\d]{2,4}[- ]?[\d]{3}[- ]?[\d]{3,5}|([0])?(\+\d{1,2}[- ]?)?[789]{1}\d{9}$
  // req.check('mobile',"invalid mobile").matches(regex);
  req.check('email','invalid email').isEmail().isLength({min:2,max:100});

  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var employe = 
    {
      name:req.body.name,
      mobile:req.body.mobile,
      email:req.body.email,
      position:req.body.position,
      createdby:req.decoded.aid,
      alias:req.body.alias,
    };
    con.query("select *  from employe where email=?",employe.email,function(err,result,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false});
      }
      else if(result.length ==0)
      {
         con.query("Insert into employe SET ? ;",employe,function(err,result)
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
        res.json({success:true,msg:'email is not allowed'}) ;    
      }      
    });    
  }		   
});


module.exports = router;