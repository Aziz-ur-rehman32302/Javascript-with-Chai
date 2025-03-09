class User {
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`);
        
    }
} 

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addcourse(){
        console.log(`new course is add by ${this .username}`);
        
    }

}
const chai  = new Teacher('ali','ali@gmail.com',123)
// chai.addcourse()
const masalachai = new User('masalaChai')

//masalachai.addcourse()//as ka pass as ka access nei hai
masalachai.logme()
chai.logme()
console.log(chai === masalachai);//false

console.log(chai === Teacher);//false
console.log(chai instanceof Teacher);//true
console.log(chai instanceof User);//true




