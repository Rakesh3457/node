const http = require('http');

const server = http.createServer((req,res)=>{
console.log(req.url,req.headers)
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>my node</title></head>');
res.write('<body><h1>welcome to my page</h1></body>');
res.write('</html>');
res.end();
});


server.listen(5500);