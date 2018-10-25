var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{ 
  console.log(req.query);
  req.check('site_id', 'invalid site_id').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({success:false,msg: verrs[0].msg,});
  }
  else
  {
   con.query("select e.name as equipment,equipment_id,me.* from equipment e inner join myequipment me on e.myequipment_id=me.myequipment_id where e.status=1 and e.site_id=?",req.query.site_id,function(err,result,fields)
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
      res.json({"success":true,'msg':'equipment list ','data':result});    
    }      
  }); 
}             
});


module.exports = router;