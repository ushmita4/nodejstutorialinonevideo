const console = require('console');
const fs=require('fs');
const http = require('http');
const port=process.env.PORT || 3000;
const server=http.createServer((req,res)=>{
    
    res.statusCode=200;
   res.setHeader('Content-Type','text/html');
   console.log(req.url);
   if(req.url=='/')
   {
    res.statusCode=200;
       res.end('<h1>Hello I am Ushmita. This is the first page.</h1>');
   }
   else if(req.url=='/about')
   {
    res.statusCode=200;
       res.end('<h1>Hello I am Ushmita. This is the second page.</h1>');
   }
   else if(req.url=='/hello')
   {
    res.statusCode=200;
    const data=fs.readFileSync('index.html');
    res.end(data.toString());
       //res.end('<h1>Hello I am Ushmita. This is the second page.</h1>');
   }
   else{
    //res.ushmita();
    res.statusCode=404;
    res.end('<h1>404 Page not found</h1>');
   }
   
});
server.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});