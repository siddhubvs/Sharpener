const User=require('../model/user');

const bcrypt = require('bcrypt');


const ForgotPasswordRequests=require('../model/ForgotPasswordRequests');

const {v4 : uuidv4} = require('uuid')

const Sib=require('sib-api-v3-sdk');


require('dotenv').config();


exports.forgotPassword=async(req,res)=>{
try{
const {email}=req.body;

User.findOne({email:email}).then(async (user)=>{

console.log(user);

const UserId = uuidv4();

const forgotPasswordRequests=new ForgotPasswordRequests({_id:UserId,isactive:'true',userId:user._id})
const response=await forgotPasswordRequests.save();

console.log(response);

const client=Sib.ApiClient.instance;

const apiKey=client.authentications['api-key']

apiKey.apiKey=process.env.API_KEY;

const tranEmailApi=new Sib.TransactionalEmailsApi();

const sender={
    email:'siddhuxyz9@gmail.com'
}
const receivers=[
    {
        email:email
    }
]

console.log(UserId);
tranEmailApi.sendTransacEmail({
        sender,
        to:receivers,
        subject:'Reset your password',
        textContent:`http://localhost:4000/password/resetpassword/${UserId}`,
})
.then(()=>res.status(201).json({message:'Mail sent successfully'})) 
})
}catch(err){
    res.status(500).json(err)
}
}

exports.resetPassword=async(req,res)=>{
const id=req.params.id;
ForgotPasswordRequests.findOne({_id:id})
.then(forgotpasswordrequest=>{
forgotpasswordrequest.update({isactive:'false'});
res.status(200).send(`<html>
                    <form action="/password/updatepassword/${id}" method="get">
                    <label for="newpassword">Enter New password</label>
                    <input type="password" name="newpassword" required><br></input>
                    <button>Reset password</button>
                    </form>
                    </html>`
                    )
})
}

exports.updatePassword=async(req,res)=>{
try{
const {newpassword}=req.query;
const {resetpasswordid}=req.params;
ForgotPasswordRequests.findOne({_id:resetpasswordid}).then(resetpasswordrequest=>{
User.findOne({_id:resetpasswordrequest.userId})
.then(user=>{
if(user){
bcrypt.hash(newpassword,10,function(err, hash){
if(err){
throw new Error(err);
}
user.update({password:hash}).then(()=>{
res.status(201).json({message:'Successfuly update the new password'})
})
});
} 
else{
return res.status(404).json({error:'No user Exists'})
}
})
})
} 
catch(error){
return res.status(403).json({ error, success: false } )
}
}
