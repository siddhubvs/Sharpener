const form=require('../models/form');
exports.getUsers=async(req,res,next)=>{
    try{
    const data=await form.findAll();
    console.log(data);
    res.status(200).json({AllUsers:data})
    }
    catch(err){
        res.status(500).json({
            error:err
        })
    }
};

exports.postuser=async(req,res,next)=>{
    try{
    const name=req.body.name;
    const email=req.body.email;
    const phone=req.body.phone;
    const data=await form.create({name:name,email:email,phone:phone})
    res.status(201).json({newUserDetail:data})
    }catch(err){
        res.status(500).json({
            error:err
        })
    }
}

exports.deleteuser=async(req,res,next)=>{
    const id=req.params.id;
    form.findByPk(id).then(user=>{
        return user.destroy();
    })
    .then(result=>{
        console.log(result)
    })
    .catch(err=>{
        console.log(err);
    })
};