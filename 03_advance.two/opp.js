
//=====          Object literal
// const user = {
//     username : 'aziz',
//     islogedin: true,
//     logincount: 3,

//     getuserdetails :function(){
//        console.log(this.username); 
//             console.log(  this   )//this is a object use to enter a values
       
//     }
// }
// console.log(user.getuserdetails());


//     Constructure function 
//new keyword is a constructure function that is use to create a multiple instances from one object
// const promice = new promice()
// const date = new Date()//new keyword is use to create a new context therefore we call it a constructor function 


function User(username,islogedin){
    this.username=username;
    this.islogedin=islogedin;
     this.greetings = function(){
        console.log(`Wellcome ${username}`);
        
    }
    return this
}
let output =new User('ali',true);// at this point if we can not use new keyword then second variable output2 override the values 

let output2 =new User('Ahmad',false);
console.log(output);
console.log(output2);
// Object Oriented Programming is used to avoid spaghetti code and create modular components
// =====================    points for new keyword 
// when  we use new first of all new object is created that is know as instance 
// in second step constructure function is call due to new keyword in which all arguments are store
// third values of all arguments store in this keyword 
//forth step return all values in a function call





//==========      Great! Object-Oriented Programming (OOP) ke 4 pillars yeh hain:

// Encapsulation 🏠

// Yeh concept data aur methods ko ek object ke andar bundle karne ka hota hai.
// Private aur public properties/methods define karne se hum data ko unauthorized access se protect kar sakte hain.
// Example:
// javascript

// class Person {
//   constructor(name, age) {
//     this.name = name; // Public
//     let _age = age; // Private (by convention)
  
//     this.getAge = function () {
//       return _age;
//     };
//   }
// }
// const person1 = new Person("Ali", 25);
// console.log(person1.name); // Ali
// console.log(person1.getAge()); // 25
// Abstraction 🎭

// Yeh concept unnecessary details ko hide karta hai aur sirf essential features dikhata hai.
// Example:
// javascript

// class Car {
//   constructor(model) {
//     this.model = model;
//   }
//   start() {
//     console.log("Car started");
//   }
// }
// const myCar = new Car("Toyota");
// myCar.start(); // Car started
// Humne andar ki complexity ko hide karke sirf start() function expose kiya.
// Inheritance 👪

// Iska matlab ek class doosri class ke features inherit kar sakti hai.
// Example:
// javascript

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// }

// const dog = new Dog("Buddy");
// dog.speak(); // Buddy barks.
// Dog class ne Animal class se properties inherit kar li.
// Polymorphism 🎭🔄

// Ek hi function ya method alag-alag classes me different tarikon se behave kar sakta hai.
// Example:
// javascript

// class Shape {
//   draw() {
//     console.log("Drawing a shape");
//   }
// }

// class Circle extends Shape {
//   draw() {
//     console.log("Drawing a circle");
//   }
// }

// class Square extends Shape {
//   draw() {
//     console.log("Drawing a square");
//   }
// }

// const shapes = [new Circle(), new Square()];
// shapes.forEach(shape => shape.draw());
// Yeh method overriding ka example hai jisme draw() method har class me different behave kar raha hai.