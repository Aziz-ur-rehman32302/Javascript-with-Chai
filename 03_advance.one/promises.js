// 📌 JavaScript Promises – Simple Explanation
// JavaScript me Promise ek object hai jo future me kisi value ko represent karta hai.
//  Ye kisi asynchronous operation ka result store karta hai – ya to success ya failure.

// 🛑 Asynchronous ka kya matlab hai?
// Asynchronous ka matlab hai aisa kaam jo foran complete nahi hota, jaise:
// ✔ API request
// ✔ Database se data lana
// ✔ File read/write
// ✔ Timer (setTimeout)

// Agar JavaScript synchronous hoti, to ye operations poora program block kar dete.
// Is problem ko solve karne ke liye Promises ka use hota hai. 🚀

// ✅ Promises Ke 3 States (Aham Cheezein)
// Promise ke 3 possible states hote hain:

// 1️⃣ Pending (In Progress) – Jab promise start hota hai.
// 2️⃣ Fulfilled (Resolved / Success) – Jab kaam successfully complete ho jaye.
// 3️⃣ Rejected (Failed / Error) – Jab kaam fail ho jaye.

//============     🔹 Diagram:
// Pending ---> Fulfilled  ✅ (resolve)
//        \--> Rejected ❌ (reject)
// ==========      ✅ Example: Basic Promise

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let success = true; // Try changing this to false to test rejection
//         if (success) {
//             resolve("✅ Data Successfully Fetched!");
//         } else {
//             reject("❌ Error: Something Went Wrong!");
//         }
//     }, 2000);
// });

// console.log("Start...");

// myPromise
//     .then((message) => {
//         console.log(message); // If resolved
//     })
//     .catch((error) => {
//         console.log(error); // If rejected
//     });

// console.log("End...");


//======      ✅✅✅ First promise ✅✅✅

// 📌 JavaScript me new Promise() ka use kyun hota hai?
// JavaScript me jab hum Promise create karte hain, to hume new keyword use karna padta hai.
// Iska reason ye hai ki Promise ek JavaScript object hai, aur JavaScript me naya object banane ke liye new keyword use hota hai. 🚀

// ✅ new Promise() Ka Structure
// Jab hum ek naya Promise banate hain, to hum new Promise() likhte hain aur isme ek callback function dete hain, jisme resolve aur reject do parameters hote hain.

// const firstpromise = new Promise(function(resolve,reject) {
//  setTimeout(() => {
//     console.log('Task is completed');
//     resolve();
//  }, 1000);
// } )
// firstpromise.then( ()=>{
//     console.log('Problem is resolved');
    
// } )

//======      ✅✅✅ Second promise ✅✅✅
//  new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("2nd task is complete");
//         resolve()
        

//     },1000)
//  }).then( function(){
//     console.log("2nd problem is resolved");
    
//  } )


//======      ✅✅✅ Third 3rd promise ✅✅✅
//this type of promise tells uss how we can get values and its show the memory consupation

// const promicethree  = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         console.log('promice number three');
//         resolve({username:'Aziz',Email:'aziz1232j@gmail.com'})
        
        
//     }, 1000);
// })

// promicethree.then( function(user){
//   console.log(user);
  
// })

///======      ✅✅✅ Four 4th promise ✅✅✅
//  const promisefour = new Promise( function(resolve, reject){
//     let error = false;
//     if (!error) {
//         resolve({username:'Aziz ur Rehman',password:'123'}) 
//     }else{
//         reject('Error, something went wrong')
//     }
//  },1000)

//  promisefour.then( (user)=>{
//     console.log(user);
//     return user.username
    
//  } ).then( (returneduser)=>{//this line contain the return of uper line 
//       console.log(returneduser);
      
//  } ).catch((error)=>{
//     console.log(error);
    
//  }).finally(()=>console.log('the promise is either resolved or not')//this line of code is run by default
//  )


///======      ✅✅✅  5th promise ✅✅✅
//  const promisefive = new Promise( function(resolve, reject){
//     let error = true;
//     if (!error) {
//         resolve({username:' Rehman',password:'123'}) 
//     }else{
//         reject('Error, something went wrong')
//     }
//  },1000)
//  async function  consumrpromiseresponce (){
    // const responce = await promisefive  // this line work with zero Error but we can use best method to resolve it
    // console.log(responce);

    //this is an other ;method to catch the error with efficient way 
//     try {
//         const responce = await promisefive
//         console.log(responce);
        
//     } catch (error) {
//         console.log(error);
        
//     }
//  }
//  consumrpromiseresponce()


//=======     fetch and try catch example 

//  async function getdata (){
//   const responce= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   try {
//     const data=await responce.json()
//     console.log(data);
//   } catch (error) {
//     console.log('E :', error);
    
    
//   }
  
//  }
//  getdata()

//====     same fetch data but with then catch method

 fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((responce)=>{
       return responce.json()
 } ).then( (data)=>{
    console.log(data);
    
 } )
 .catch( (error)=>console.log(error) )


