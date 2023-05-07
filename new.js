//const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req, res, next)=>{
   console.log('its first middleware');
  res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">submit</button></form>');
   
   
});

app.use('/product',(req, res, next)=>{
   console.log(req.body);
   res.redirect('/');
  });
  app.use('/',(req, res, next)=>{
   console.log('task done');
   
  });
app.listen(5500);
