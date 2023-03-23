const http=require('http');

const server=http.createServer((req,res)=>{
    console.log('siddhu')
    if(req.url==='/home')
    res.write('<h1>Welcome Home</h1>')
    if(req.url==='/about')
    res.write('<h1>Welcome to About Us Page</h1>')
    if(req.url==='/node')
    res.write('<h1>Welcome to NodeJS Project</h1>')
    res.end();
})

server.listen(4000);
