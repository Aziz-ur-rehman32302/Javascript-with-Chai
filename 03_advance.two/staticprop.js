class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username: ${this.username}`);
        
    }
    //static keyword is used when we stop the accecc of any method for another object
    static createid(){
        return`123`
    }
}
const chai = new user('Aziz')
console.log(chai.createid());


class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const ip = new teacher('ipone','az@gmail.com')
console.log(ip);
ip.logme()
console.log(ip.createid());


