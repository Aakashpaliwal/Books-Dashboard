var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{
  var sql="SELECT * FROM (SELECT FROM_UNIXTIME( UNIX_TIMESTAMP( s.assignDate ),'%d %M %Y') assignDate, c.name company, z.name zone, e.name serial, e.myequipment_id FROM schedule s JOIN customer c ON s.customer_id = c.customer_id INNER JOIN zone z ON z.zone_id = s.zone_id INNER JOIN equipment e ON e.equipment_id = s.equipment_id WHERE s.state =0 AND s.assignDate > CAST( NOW() AS DATE ))temp INNER JOIN myequipment me ON me.myequipment_id = temp.myequipment_id";
    con.query(sql,req.decoded.aid,function(err,scheduleresult,fields)
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
        res.json({"success":true,'msg':'all post due schedule list ','scheduledata':scheduleresult});    
      }      
    });           
});


module.exports = router;