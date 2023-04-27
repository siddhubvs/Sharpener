const User=require('../model/user');


exports.showLeaderBoard=async(req,res)=>{
    try{
    const leaderboardofUsers=await User.find().select({name:1,totalExpense:1}).sort({totalExpense:-1})
    console.log(leaderboardofUsers)
    res.status(200).json(leaderboardofUsers);
    }catch(err){
        res.status(500).json(err);
    }
}