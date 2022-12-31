const console = require('console');
const http = require('http');
const port=process.env.PORT || 3000;
const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode=200;
   res.setHeader('Content-Type','text/html');
   res.end('<h1>Hello I am Ushmita</h1>');
});
server.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});