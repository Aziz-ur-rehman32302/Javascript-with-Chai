//javascript use prototypel behaviour by default,all intenses(new , this , classes) are comes from prototype
// Prototype ek hidden property hai jo inheritance allow karti hai.
// Prototype chaining allow karti hai ke agar ek object ke andar koi method/property na mile, to wo uske prototype me dhoonda jaye.
// Functions ke saath prototype object attach hota hai, jo hum extend kar sakte hain.

//===============            call . js 
function setusername (username){
         this.username=username
         console.log(
            'called'
         );
         
     }



function createusername(username,email,password){
    //call pass the current execution context to another function
    setusername.call(username)//call keyword is use to call another function inside a function
    setusername.call(this,username)//this parameter in call is use to store the values of setusername 
    this.email = email
    this.password=password
}
 
const output = new createusername('aziz','abc@gmail.com',123)
console.log(output);


