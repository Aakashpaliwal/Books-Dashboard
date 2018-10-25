var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{    
  con.query("select name as zone,location,location_id from location l inner join zone z on z.zone_id=l.zone_id  where z.status=1 and l.status=1 ",req.decoded.aid,function(err,result,fields)
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
      res.json({"success":true,'msg':'all zone-location list ','zonelocationdata':result});    
    }      
  });           
});


module.exports = router;