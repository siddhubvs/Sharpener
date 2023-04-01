const todo=require('../models/todo');

exports.getTodo= async (req,res,next)=>{
    try{
        const data = await todo.findAll();
        res.status(200).json({AllTodoDetail:data});
    }
    catch(err){
        console.log(err);
        document.body.innerHTML=document.body.innerHTML+'<h4>Something went wrong</h4';
    }
}

exports.postTodo= async (req,res,next)=>{
    try{
    const name=req.body.name;
    const description=req.body.description;
    const data=await todo.create({name:name,description:description});
    res.status(201).json({newTodo:data})
    }
    catch(err){
        console.log(err);
    }
}

exports.deleteTodo= async(req,res,next)=>{
    const id=req.params.id;
    try{
       const response= await todo.findByPk(id).then(todo=>{todo.destroy();})
       console.log(response);
    }
    catch(err){
        console.log(err);
    }
}