const express=require('express')

const app=express();

const bodyparser=require('body-parser')

const fs=require('fs');

app.use(bodyparser.urlencoded({extended:false}))

app.get('/login',(req,res)=>{
     res.send("<form onsubmit='localStorage.setItem(`name`, document.getElementById(`name`).value)' action='/login' method='POST'><input type='text' id='name' name='name'><br><br><button type='submit'>Login</button></form>")
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})

app.get('/',(req,res)=>{
    fs.readFile('message.txt',(err,data)=>{
        if(err){
            console.log(err);
            data='No chat exists'
        }
        res.send(`${data} <form onsubmit="document.getElementById('name').value=localStorage.getItem('name')" action='/' method='POST'><input type='text' name='message'><input type='hidden' name='name' id='name'><br><br><button type='submit'>Send</button></form>`)
    })
    
})


app.post('/',(req,res)=>{
     console.log(req.body);
     fs.writeFileSync("message.txt", ` ${req.body.name} ${req.body.message}`,{flag:'a'})
     res.redirect('/')
})


app.listen(4000);
