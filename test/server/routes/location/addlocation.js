// is zone_id is valid or not baki he



var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add location page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  req.check('location','invalid location name').exists().isLength({min: 2 , max: 100}).withMessage('Name should not be empty, should be more than 2 and less than 100 character').trim();
  req.check('zone_id', 'invalid zone').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var loc=req.body.location;
    var location = 
    {
      location_name:loc.toUpperCase(),
      zone_id:req.body.zone_id,
      createdby:req.decoded.aid
    };  //1 zone me multiple same location exist nhi kr skti
     con.query("select location_id from location where location_name=? and zone_id = ? and status=1 ",[location.location_name,location.zone_id],function(err,result,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else if(result.length ==0)
      {
         con.query("Insert into location SET ? ;",location,function(err,result)
        {
          if(err)
          {
            console.log(err);
            res.json({success:false,msg: 'something went wrong'});
          }
          else
          {
            res.json({ success:true,msg: 'succesful entry'});
          }
        });
      }
      else
      { 
        res.json({success:false,msg:'location name is not allowed'}) ;    
      }      
    });
  }		   
});


module.exports = router;