var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{    
  con.query("select zone_id,zone_name,pin from zone where status=1 order by zone_id desc ",req.decoded.aid,function(err,zoneresult,fields)
  {
    if(err)
    {
      console.log(err);
      res.json({success:false,msg: 'something went wrong',});
    }
    // else if(result.length==0)
    // {
    //   res.json({"success":true,'msg':'Data Not Available'});
    // }
    else
    {
      res.json({"success":true,'msg':'all zone list ','zonedata':zoneresult});    
    }      
  });           
});


module.exports = router;