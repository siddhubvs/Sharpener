const Order=require('../model/order');

const Razorpay=require('razorpay');

const userController=require('./user');

const User=require('../model/user');

exports.purchasepremium=async(req,res)=>{
    try{
    var rzp=new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
    })
    const amount=5000
    rzp.orders.create({amount,currency:"INR"},(err,order)=>{
        if(err){
            throw new Error(JSON.stringify(err));
        }
        const orders=new Order({orderid:order.id,status:'PENDING',userId:req.user._id})
        orders.save()
        .then(()=>{
            return res.status(201).json({order,key_id:rzp.key_id})
        })
        .catch(err=>{throw new Error(err)})
    })
    }catch(err){
        res.status(500).json({message:'Something went wrong'});
    }
}
exports.updateTransactionStatus=async(req,res)=>{
    try{
    userId=req.user._id;
    const{order_id,payment_id}=req.body;
    const order=await Order.findOne({orderid:order_id})
    const promise1=Order.findOneAndUpdate({orderid:order_id},{status:'successful',paymentid:payment_id})
    const promise2=User.findOneAndUpdate({_id:userId},{isPremiumUser:true})
    Promise.all([promise1,promise2]).then(()=>{
        return res.status(201).json({success:true,message:'Transaction successful',token:userController.tokengenerator(userId,undefined,true)})
    })           
    .catch((err)=>{
    throw new Error(err);
    })
    }
    catch(err){
    console.log(err);
    res.status(500).json(err);
   }    
}
exports.failTransaction=async(req,res)=>{
    try{
    const{order_id}=req.body;
    const order=await Order.findOne({orderid:order_id})
    const promise1=Order.findOneAndUpdate({orderid:order_id},{status:'failed',paymentid:payment_id})
    const promise2=User.findOneAndUpdate({_id:userId},{isPremiumUser:false})
    Promise.all([promise1,promise2]).then(()=>{
        return res.status(201).json({success:true,message:'Transaction failed'})
    })           
    .catch((err)=>{
    throw new Error(err);
    })
    }catch(err){
    res.status(500).json(err);
   }    
}