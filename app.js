const express = require('express');

const app = express();
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });

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
   if((hours<21)&&(hours>7)) {
       app.use(express.static(__dirname+'/public')) 
   }else res.send('Msaker')
 
   next()
})

module.exports = app;