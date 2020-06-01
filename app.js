const express = require('express');

const app = express();

app.get('/',function(req,res, ){
   res.sendFile('public/home.html' , { root : __dirname});
   
});
app.get('/contact',function(req,res, ){
   res.sendFile('public/contact.html' , { root : __dirname});
 
});
app.get('/ourservices',function(req,res, ){
    res.sendFile('public/ourservices.html' , { root : __dirname});
    
});
app.use(date= (req,res,next)=> {
   const start = new Date()
   const hours = start.getHours()
   if((hours<22)&&(hours>7)) {
       app.use(express.static(__dirname+'/public')) 
   }else res.send('Serrver0not available')
 
   next()
})

module.exports = app;