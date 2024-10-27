//============================                                  ============================
//===========================        Objects In Javascript          =========================
//============================                                  ============================
//There Are two way to declear an odject
//(1):- literals> when we create an object with literals then it can not a single multiple instances are created
//(2):- constructor <object.create constructor method> when we create an object with constructor it can be a singleton object

// Explane odject literals
// interview question use of symbol use as a key in object  
let mysym = Symbol("Khan2")//use of symbol datatype

let student ={
    name:"Aziz",
    [mysym]:"khan2",//symbol key in object 
    "lname":"Rehman",
    class : "1st year",
    Email: "abc213@gmail.com",
    num:1233,
}
// console.log(student);
// console.log(student[mysym]);
// console.log(typeof student[mysym]);//object
// console.log(student["lname"]);
// console.log( student.Email);
// console.log( student["Email"]);//another method to access value in object
// console.log(typeof student.Email);
//change value in object
// console.log(student.Email="rehman229@gmail.com");
// Object.freeze(student);
// console.log(student.Email="aziz229@gmail.com");
// console.log(student);
//Function add in an object
 student.greeting =function(){
    console.log("Hellow js user ");
}
 student.greetingtwo =function(){
    console.log(`Hellow js user,${this.lname}`);// use of backit (``) is called string interpulation
}
console.log(student.greeting());
console.log(student.greetingtwo());



