const fs=require('fs');

const requestHandler=(req,res)=>{
    if(req.url==='/home')
    res.write('<h1>Welcome Home</h1>')
    if(req.url==='/about')
    res.write('<h1>Welcome to About Us Page</h1>')
    if(req.url==='/node')
    res.write('<h1>Welcome to NodeJS Project</h1>')
    
    if(req.url==='/'){
        res.write(`<body>${fs.readFileSync('message.txt')}</body>`);
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    }
    const body=[];
    if(req.url==='/message' && req.method==='POST'){
        req.on('data',(chunk)=>{
           body.push(chunk);
           console.log(chunk);
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            console.log(message);
        })
        res.statusCode=302
        res.setHeader('Location','/')
        
    }
    res.end()
}
module.exports=requestHandler;