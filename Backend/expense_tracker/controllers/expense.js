const expense=require('../model/expense');

exports.postExpense=async (req,res,next)=>{
    try{
    const amount=req.body.amount;
    const description=req.body.description;
    const category=req.body.category;
    const data = await expense.create({amount:amount,description:description,category:category})
    res.status(201).json({newExpenseDetail:data})
    }
    catch(err){
        res.status(500).json({
            error:err
        })
    }
}

exports.getExpenses=async (req,res,next)=>{
    try{
        const data = await expense.findAll();
        res.status(200).json({AllExpenseDetail:data});
    }
    catch(err){
        console.log(err);
        document.body.innerHTML=document.body.innerHTML+'<h4>Something went wrong</h4';
    }
    
}

exports.deleteExpense=async(req,res,next)=>{
    const id=req.params.id;
    try{
       const response= await expense.findByPk(id).then(expense=>{expense.destroy();})
       console.log(response);
    }
    catch(err){
        console.log(err);
    }
}
