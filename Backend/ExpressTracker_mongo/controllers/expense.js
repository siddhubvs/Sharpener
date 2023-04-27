const expense=require('../model/expense');

const User=require('../model/user');

function isStringInvalid(str){
    if(str==undefined||str.length===0)
    return true;
    else
    return false;
}
exports.addExpense = async(req,res,next)=>{
    const {amount,description,category} = req.body;
    try{
        if(isStringInvalid(amount) || isStringInvalid(description) || isStringInvalid(category)){
            return res.status(400).json({err:"Bad paramters : Something is missing"})
        }
        const Expense=new expense({amount:amount,description:description,category:category,userId:req.user})
        const data=await Expense.save();
        const totalExpense=Number(req.user.totalExpense)+Number(amount);
        await User.findOneAndUpdate({_id:req.user._id},{totalExpense:totalExpense})
        res.status(201).json({NewExpenseDetail:data});
    }catch(err){
    res.status(500).json(err);
    }
}

exports.getExpense = async(req,res,next)=>{
    try{
        const data = await expense.find({userId:req.user._id})
        res.status(200).json({AllExpenseDetail:data})
    }catch(err){
        res.status(500).json(err);
    }
}

exports.deleteExpense = async(req,res,next)=>{
    try{
    const expenseid=req.params.id;
    const totalExpense=Number(req.user.totalExpense)-Number(Expense.amount);
    await User.findOneAndUpdate({_id:req.user._id},{totalExpense:totalExpense})
    const response=await expense.findByIdAndRemove({_id:expenseid})
    res.status(200).json({message:response})
    }catch(err){
    res.status(500).json(err);
    }
}