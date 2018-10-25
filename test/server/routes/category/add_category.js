var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add category page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  req.check('category','invalid category').isLength({min:2,max:100});

  var verrs=req.validationErrors();
  if(verrs)
  {
  	res.json({ success:false,msg: verrs[0].msg,});
  }
	else
	{
    var cat=req.body.category;
		var category = 
  {
    category_name:cat.toUpperCase(),         
  };
  con.query("select category_id  from category where category_name=? and status=1",category.category_name,function(err,result,fields)
  {
      if(err)
      {
        console.log(err);
        res.json({'success':false,msg: 'something went wrong'});
      }
      else if(result.length ==0)
      {
    		var sql="Insert into category SET ? ;";
        con.query(sql,category,function(err,result)
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
          res.json({success:true,msg:'category is already registered'}) ;    
      }      
  }); 
	}	
});


module.exports = router;