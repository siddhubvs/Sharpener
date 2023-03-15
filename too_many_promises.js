const user={username:"siddhu",lastactivitytime:"15th of march"};
const posts=[{title:"post1",body:"this is post1"}];
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        posts.push(post);
        resolve(posts);
    },1000);
    })
}

function updatelastactivitytime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastactivitytime=new Date().getTime();
            resolve(user.lastactivitytime);
        },1000);
    })
}
function userupdates(){
    Promise.all([createPost({title:"post2",body:"this is post2"}),updatelastactivitytime()]).then(([createpostresolves,update]) => {
        console.log(update);
        console.log(createpostresolves)
    }).catch(err=>console.log(err));
}
userupdates();
