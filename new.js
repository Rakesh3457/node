//const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const path =require('path');
const rootDir = path.dirname(require.main.filename);
console.log(rootDir)


const app = express();

const mainAdmin = require('./main');
const mainSecond = require('./main2');

app.use(bodyParser.urlencoded({extended:false}));

app.use(mainAdmin);
app.use(mainSecond);
 

app.use((req,res,next)=>{
res.status(404).send('<h1>Page not found</h1>')
});
app.listen(5500);
