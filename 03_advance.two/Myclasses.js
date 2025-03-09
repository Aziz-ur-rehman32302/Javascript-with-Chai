// class user  {
//     constructor(username,email, password){
//         this.username=username
//         this.email=email
//         this.password=password

//     }

//     encryptpassword(){
//         return `Aziz${this.password}`
//     }

//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user('aziz','aziz@gmail.com',123)
// console.log(chai.encryptpassword());
// console.log(chai.changeusername());


//Behind the scene if uper class is not available in js soo we can use this type of code
const user= function(username,email, password){
    this.username=username
        this.email=email
        this.password=password

}
//because we know that function is act as a object in js therefore we can add some properity according to our needs
user.prototype.encryptpassword=function(){
    return`aziz@${this.password}`
}
user.prototype.changeusername=function(){
    return`Now our user is in upperCase:${this.username.toUpperCase()}`
}
const chai = new user('aziz','aziz@gmail.com',123)
console.log(chai.encryptpassword());
console.log(chai.changeusername());


