const http=require('http');

const server=http.createServer((req,res)=>{
    console.log('siddhu')
    res.write('siddhu');
    res.end();
})

server.listen(4000);
