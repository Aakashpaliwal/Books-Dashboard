var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{ 
  console.log(req.query);
  req.check('location_id', 'invalid location').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({success:false,msg: verrs[0].msg,});
  }
  else
  {
  // con.query("select e.name as supervisor,me.* from supervisor e inner join mysupervisor me on e.mysupervisor_id=me.mysupervisor_id where e.status=1 and e.location=?",req.query.location,function(err,result,fields)
   con.query("select e.name as supervisor,alias from location l inner join loc_sup ls on l.location_id=ls.location_id inner join employe e on e.employe_id=ls.supervisor_id where e.status=1 and l.location_id=?",req.query.location_id,function(err,result,fields)
  {
    if(err)
    {
      console.log(err);
      res.json({'success':false});
    }
    // else if(result.length==0)
    // {
    //   res.json({"success":true,'msg':'Data Not Available'});
    // }
    else
    {
      res.json({"success":true,'msg':'supervisor list ','data':result});    
    }      
  }); 
}             
});


module.exports = router;