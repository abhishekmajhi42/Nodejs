const http = require('http');
const port = process.env.PORT || 8000;
const server= http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    if(req.url='/'){res.end('<h1>abhishek</h1>');
}
else if (req.url='/about'){
    res.statusCode=200;
    res.end('<h1>abhishek about page</h1>');}

else{
    res.statusCode=200;
    res.end('<h1>abhishek contact page</h1>');}


})

server.listen(port,()=>{
    console.log('Server listens on ${port}');
});