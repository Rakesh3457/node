//const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next)=>{
   console.log('its first middleware');
  res.send('<h1>lets dive into express.js</h1>');
   next();
});

app.use((req, res, next)=>{
   console.log('its second middleware');
  
});
app.listen(5500);
