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
  req.check('name','invalid zone name').isLength({min: 2 , max: 100}).withMessage('Name should not be empty, should be more than 2 and less than 100 character').trim();
  req.check('pin','invalid pin').isLength({min:6,max:6}).isNumeric();
  req.check('id', 'id must be a number').isNumeric().trim();

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
      createdby:req.decoded.aid
    };
    con.query("select zone_id from zone where zone_name=? and zone_id != ? and status=1",[zone.zone_name,req.body.id],function(err,result,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else if(result.length ==0)
      {
        con.query("update zone SET ? where zone_id=? and status=1 ;",[zone,req.body.id],function(err,zoneresult,fields)
        {
          if(err)
          {
            console.log(sql,err);
            res.json({success:false,msg: 'something went wrong',});
          }
          else
          {
            if(zoneresult["affectedRows"]==1)
            res.json({"success":true,'msg':'zone updated'});
            else
            res.json({"success":false,'msg':'invalid operation'});         
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