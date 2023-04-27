const User=require('../model/user');

const bcrypt=require('bcrypt');

const jwt=require('jsonwebtoken');

function isStringInvalid(str){
    if(str==undefined||str.length===0)
    return true;
    else
    return false;
}
   async function signup(req,res,next){
    const {name,email,password}=req.body;

    if(isStringInvalid(name) || isStringInvalid(email) || isStringInvalid(password)){
        return res.status(400).json({err:"Bad paramters : Something is missing"})
    }
    try{
    bcrypt.hash(password,10,async(err,hash)=>{
    const user=new User({name:name,email:email,password:hash})
    await user.save();
    res.status(201).json({message:'Successfully created new user'});
    })
    }
    catch(err){
    res.status(500).json(err)
    }
}

const tokengenerator=function(id,name,isPremiumUser){
    return jwt.sign({userId:id,name:name,isPremiumUser},process.env.TOKEN_SECRET);
}
async function login(req,res,next){
    const {email,password}=req.body;
    if(isStringInvalid(email) || isStringInvalid(password)){
        return res.status(400).json({err:"Email or password is missing"})
    }
    try{
    const user=await User.findOne({email:email})
    console.log(user);
    if(Object.keys(user).length>0){
    bcrypt.compare(password,user.password,async(err,result)=>{
    if(err){
            throw new Error('Something went wrong');
    }
    if(result===true)
    res.status(200).json({success:true,message:'User login successful',token:tokengenerator(user._id,user.name,user.isPremiumUser)});
    else
    return res.status(401).json({success:false,message:'User not authorized'});
    })
    }       
    else{
        return res.status(404).json({success:false, message:'User not found'})
    }
    }
    catch(error){
        return res.status(500).json(error);
    }
}

module.exports={
    signup,
    tokengenerator,
    login
}    
