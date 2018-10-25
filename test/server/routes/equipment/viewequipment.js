var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{         
    con.query("select * from equipment where status=1",req.decoded.aid,function(err,equipmentresult,fields)
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
        res.json({"success":true,'msg':'all equipment list ','equipmentdata':equipmentresult});    
      }      
    });          
});


module.exports = router;