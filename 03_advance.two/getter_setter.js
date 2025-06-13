//Basically getter and setter are uer to enctypt the data when you are not want to share it with anyone


class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    // _password use to avoid the race condition between the constructor and getter and setter
    //we can not use this.password because it will create a infinite loop
    _password=''; // this is a private variable that is not accessable outside the class
    // getter is use to get the value of a variable
    // setter is use to set the value of a variable 
    // getter and setter are use to encrypt the data when you are not want to share it with anyone
    
    get password(){
        return `${this._password}aziz`//_password is a new variable that is use to store the password
    }
    set password(value){
        this._password=value
    }
}
const chai = new user('aziz@gmail.com','abc')
console.log(chai.password);


