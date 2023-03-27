const path=require('path')

const rootDir=require('../helper/path');

exports.getForm=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
}

exports.postForm=(req,res,next)=>{
    res.redirect('/success');
};