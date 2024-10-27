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


// object creation with singleton
// let tinderuser = new Object()>>singleton object
// console.log(tinderuser);//> {}
let tinderuser = {}//?>> non-singleton object
console.log(tinderuser);// same output like uppercase
//1st way to declear values in object
tinderuser={
    Email:"abc123@gmail.com"
}

//2nd way to declear values in object
tinderuser.name="summy"
tinderuser.id = 123

// console.log(tinderuser);

// object within an object >nesting in object
let regularuser = {
    Email:"aziz123@gmail.com",
    fullName:{
        user:{
            firstname:"Ali",
            lastname:"Raza"
        }
    } 
}
console.log(regularuser);

console.log(regularuser.notexit?.fullName);//>hint study in next lecture 
// console.log(regularuser.fullName);
// console.log(regularuser.fullName.user);

// how to marje object
let obj1 ={
    1:"a",
    2:"b"
}
let obj2 ={
    3:"c",
    4:"d"
}
// let obj3 ={obj1,obj2};
// console.log(obj3);
//++++++++++++ {} is use as a traget all values add in empty object and obj1,obj2 are sources 
// const obj4 =Object.assign({},obj1,obj2)
// console.log(obj4);
// console.log(obj1);
//separate operator
// let obj5 = {...obj1,...obj2}
// console.log(obj5);
// console.log(obj1);
//++++++++++++++++++++++++++++++++++++++++++
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));//datatype of keys is Array
// console.log(Object.values(tinderuser));//datatype of values is Array
// console.log(Object.entries(tinderuser));//datatype of entries is Array in array
// console.log(tinderuser.hasOwnProperty("id"));// ask value from object


//-----------------------     Object de-structure and JSON API intro     ----------------------
//De-Structure mean git value from object
console.log(tinderuser);
let {name} = tinderuser;//we can directly access the name from tinderuser using this method
let {Email:msg} = tinderuser;//we can directly change Email with msg noww access with msg

console.log(name);
console.log(msg);
//----------------------     JSON API intro        -------------------------------
//API is somthing that perform some task for us 
// values return from backend in XML structure that is very complex but values in JSON

//JSON look like as > {} object with out any name but Difference is that keys and values both are in string
{
    "name" = "aziz",
    "course" = "Js",
    "Teacher" = "hitesh"
} 
// JSON Is in the Form Of Array
[
    {},
    {}
]
// Json END




