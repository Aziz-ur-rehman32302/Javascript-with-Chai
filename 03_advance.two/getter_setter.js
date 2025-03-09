//Basically getter and setter are uer to enctypt the data when you are not want to share it with anyone


class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    // _password use to avoid the race condition between the constructor and getter and setter
    get password(){
        return `${this._password}aziz`
    }
    set password(value){
        this._password=value
    }
}
const chai = new user('aziz@gmail.com','abc')
console.log(chai.password);


