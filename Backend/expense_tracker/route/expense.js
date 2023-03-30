const express=require('express');

const router=express.Router();

const expenseController=require('../controllers/expense')

router.get('/',expenseController.getExpenses);

router.post('/post',expenseController.postExpense);

router.delete('/delete/:id',expenseController.deleteExpense);

module.exports=router;