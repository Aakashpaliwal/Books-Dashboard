var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{         
  con.query("select s.site_id,c.customer_name,z.zone_name,l.location_name,s.address from site s inner join location l on l.location_id=s.location_id inner join zone z on z.zone_id=l.zone_id inner join customer c on c.customer_id=s.customer_id where s.status=1 order by site_id desc",req.decoded.aid,function(err,siteresult,fields)
  {
    if(err)
    {
      console.log(err);
      res.json({'success':false,msg: 'something went wrong'});
    }
    // else if(result.length==0)
    // {
    //   res.json({"success":true,'msg':'Data Not Available'});
    // }
    else
    {
      res.json({"success":true,'msg':'all site list ','sitedata':siteresult});    
    }      
  });           
});


module.exports = router;