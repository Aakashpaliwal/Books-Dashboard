var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{          
    con.query("select customer_id,customer_name,spoc,email,mobile,address from customer where status=1 order by customer_id desc  ",req.decoded.aid,function(err,customerresult,fields)
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
        res.json({"success":true,'msg':'all customer list ','customerdata':customerresult});    
      }      
    });          
});


module.exports = router;