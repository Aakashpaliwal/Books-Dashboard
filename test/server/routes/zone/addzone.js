// is supervisor_id(employe_id) is valid or not baki he

var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add zone page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  req.check('name','invalid zone name').exists().isLength({min: 2 , max: 100}).withMessage('Name should not be empty, should be more than 2 and less than 100 character').trim();
  req.check('pin','invalid pin').isLength({min:6,max:6}).isNumeric();
  // req.check('supervisor_id', 'invalid supervisor').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var zonename=req.body.name;
    var zone = 
    {
      zone_name:zonename.toUpperCase(),
      pin:req.body.pin,
      // employe_id:req.body.supervisor_id,
      createdby:req.decoded.aid
    };
        con.query("select zone_id  from zone where zone_name=? and status=1",zone.zone_name,function(err,result,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else if(result.length ==0)
      {
         con.query("Insert into zone SET ? ;",zone,function(err,result)
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
        res.json({success:false,msg:'zone name is not allowed'}) ;    
      }      
    });
  }		   
});


module.exports = router;