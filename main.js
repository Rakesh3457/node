const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add-product',(req, res, next)=>{
    console.log('its first middleware');
   res.sendFile(path.join(__dirname,'views','addproduct.html'));
    
 });
 
 router.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname,'views','product.html'));
    res.redirect('/');
   });
   module.exports = router;