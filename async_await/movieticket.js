console.log('Person 1 : shows ticket')
console.log('Person 2 : shows ticket');

const person3= async()=>{
    const promiseWifeBringTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Ticket');
        },4000);
    })
    let ticket=await promiseWifeBringTicket;
    
    const BringPopcorn=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Popcorn');
        },4000);
    })
    let popcorn=await BringPopcorn;
    console.log(`Person3  Brings ${popcorn}`);
    
    const Bringbutter=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('butter');
        },2000);
    })
    let butter=await Bringbutter;
    console.log(`Person3  Brings ${butter}`);
    
    const Bringcooldrink=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Cooldrink');
        },2000);
    })
    let cooldrink=await Bringcooldrink;
    console.log(`Person3  Brings ${cooldrink}`);
 
   return ticket;   
}
person3().then((m)=>console.log(`Person3 : shows ${m}`));
console.log('Person 4 : shows ticket')
console.log('Person 5 : shows ticket');
