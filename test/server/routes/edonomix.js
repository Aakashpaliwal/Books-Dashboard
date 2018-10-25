const crypto = require('crypto');
crypto.DEFAULT_ENCODING = 'hex';

// var password='temppass';
// var config = {

//   salt:'edonomixsaltforhashpassword',
//   iterations: 20000,
//   hashBytes: 32, 
//   digest: 'sha256'
// };




module.exports ={

hashPassword:function(password)
{
    if(!password){password='1*==parag==*1';} 
    const key = crypto.pbkdf2Sync(password,'edonomixsaltforhashpassword', 20000,32,'sha256');
    console.log(key);  
    return(key);
},
isEmpty:function(obj) 
{
    return Object.keys(obj).length === 0;
},
nextDate:function(sd,freq) 
{
    var arr = sd.split("-");
    var m=parseInt(arr[1]);
    var y=parseInt(arr[0]);
    var d=parseInt(arr[2]);
    var f=parseInt(freq);
    var x=m+f;
    var def_y=parseInt(x/12);
    y=y+def_y;
    var def_m=x%12;
    m=def_m;
    if(x==12)
    {y=y-1;
    m=m+12;}
    if(m<10)
    m='0'+m;
    return(y+'-'+m+'-'+d);    
},
uploadFile:function(file,filepath){      
        //file = req.files.filenameinform;
        file.name= Date.now() + "_" + file.name; 
        file.mv(filepath+"/"+file.name, function(err){
         if(err) throw err;
         else{
         	return 1;
         }
     });
},

}