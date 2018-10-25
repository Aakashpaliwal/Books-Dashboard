//complaint assign+change state(pending/done..) and log for memo
//ids are valid or not baki he
var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add complaint page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  req.check('state','invalid state').isNumeric();
  req.check('assignto','invalid supervisor').isNumeric();
  req.check('id','invalid complaint').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var complaint = 
    {
      state:req.body.state,
      assignto:req.body.assignto,
      log:req.body.log
    };
    con.query("update complaint SET ? where complaint_id=? and status=1 ;",[complaint,req.body.id],function(err,complaintresult,fields)
    {
      if(err)
      {
        console.log(sql,err);
        res.json({success:false,msg: 'something went wrong',});
      }
      else
      {
        if(complaintresult["affectedRows"]==1)
        res.json({"success":true,'msg':'complaint updated'});
        else
        res.json({"success":false,'msg':'invalid operation'});    
      }
    });
  }		   
});


module.exports = router;