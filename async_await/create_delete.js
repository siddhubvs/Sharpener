const posts=[{title:"POST1",body:"This is post1"}];

let showstatus=async()=>{
    const create2ndpost= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({title:"POST2",body:"This is post2"})
            resolve('Created post2');
        },1000);
    })
    
    let create2=await create2ndpost;
    console.log(create2);
    
    
    const create3rdpost= new Promise((resolve,reject)=>{
        var count=0;
        setTimeout(()=>{
            posts.push({title:"POST3",body:"This is post3"})
            count++;
            resolve(count);
        },1000);
    })
    
    
    let create3 = await  create3rdpost;
    console.log(create3);
    
    
    var deletepost=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0)
            resolve(posts.pop())
            else
            reject('Array empty');
        },1000);
    })
    
    var delete1= await deletepost;
    console.log(delete1);
    
    var delete2= await deletepost;
    console.log(delete2);
}
showstatus();   
