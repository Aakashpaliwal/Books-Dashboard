var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{          
  con.query("SELECT l.location, e.name as employe, alias, email, mobile, z.name as zone FROM loc_sup ls INNER JOIN location l ON l.location_id = ls.location_id INNER JOIN employe e ON e.employe_id = ls.supervisor_id INNER JOIN zone z ON z.zone_id = l.zone_id WHERE ls.status =1 AND e.status =1 AND l.status =1 AND z.status =1",req.decoded.aid,function(err,result,fields)
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
      res.json({"success":true,'msg':'all location-supervisor list ','locsupdata':result});    
    }      
  });          
});

module.exports = router;