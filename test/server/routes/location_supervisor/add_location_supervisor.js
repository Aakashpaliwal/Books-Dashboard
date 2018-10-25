//location_id and supervisor_id is valid or not 
//single mapping 

var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add equipment page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);

  req.check('location_id','invalid location_id').isNumeric();
  req.check('supervisor_id','invalid supervisor_id').isNumeric();

  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var loc_sup = 
    {
      location_id:req.body.location_id,
      supervisor_id:req.body.supervisor_id
    };

     con.query("select supervisor_id from loc_sup where location_id=? and status=1 ",[loc_sup.location_id],function(err,result,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false});
      }
      else if(result.length ==0)
      {
        con.query("Insert into loc_sup SET ? ;",loc_sup,function(err,result)
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
        res.json({success:true,msg:'supervisor already exist'}) ;    
      }      
    });
  }		   
});


module.exports = router;