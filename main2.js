const express = require('express');
const path = require('path');
const router = express.Router();


router.use('/product',(req, res, next)=>{
    console.log('task done');
    res.sendFile(path.join(__dirname,'views','product.html'));
    
   });





module.exports = router;