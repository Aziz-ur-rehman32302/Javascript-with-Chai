// class user{
//     constructor(username){
//         this.username=username
//     }
//     logme(){
//         console.log(`username: ${this.username}`);
        
//     }
//     //static keyword is used when we stop the accecc of any method for another object
//     static createid(){
//         return`123`
//     }
// }
// const chai = new user('Aziz')
// console.log(chai.createid());


// class teacher extends user{
//     constructor(username,email){
//         super(username)
//         this.email=email
//     }
// }
// const ip = new teacher('ipone','az@gmail.com')
// console.log(ip);
// ip.logme()
// console.log(ip.createid());


//==========                  interview question most important
    //kya hum javascript ya ip ki value ko change ker saktay ha agar ker saktay ha to kis ther aur agar nei ker saktay to q nei ker saktay
    const math =Object.getOwnPropertyDescriptor(Math,'PI')
    console.log(math);
    const chai = {
        name : 'milktea',
        price:250,
        isavailable:true,
        type:function(){
            console.log('i am a function inside the chai');
            
        }
    }
    console.log(Object.getOwnPropertyDescriptor(chai,'name'));
    // Object.defineProperty(chai,'name',{
    //     writable: false,
    //     enumerable: false,
         
    // })
    // console.log(Object.getOwnPropertyDescriptor(chai,'name'));
    


for (const [keys,value] of Object.entries(chai)) {//Object.entries enable the object to iterate
   if(typeof  value !== 'function'){//this check return only values from object not a function

       console.log(`${keys}:${value}`);
   }
 
}
