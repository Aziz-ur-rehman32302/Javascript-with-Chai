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
    lname:"Rehman",
    class : "1st year",
    Email: "abc213@gmail.com",
    num:1233,
}
console.log(student);
console.log(student[mysym]);
console.log(typeof student[mysym]);//object
console.log(student["lname"]);//un this method we can  use  string in key value pair
console.log(student.lname);
console.log( student.Email);
console.log( student["Email"]);//another method to access value in object
console.log(typeof student.Email);
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
// console.log("01:",tinderuser);
// console.log(Object.keys(tinderuser));//datatype of keys is Array
// console.log(Object.values(tinderuser));//datatype of values is Array
// console.log(Object.entries(tinderuser));//datatype of entries is Array in array
// console.log(tinderuser.hasOwnProperty("id"));// ask value from object


//-----------------------     Object de-structure and JSON API intro     ----------------------
//De-Structure mean git value from object
console.log(tinderuser);
let {name} = tinderuser;//we can directly access the name from tinderuser using this method
let {Email:msg} = tinderuser;//we can directly change Email with msg noww access with msg
let msg1 = tinderuser.Email;//we can directly change Email with msg1 noww access with msg

console.log(name);
console.log(msg);
console.log(msg1);
//----------------------     JSON API intro        -------------------------------
//API is somthing that perform some task for us 
// values return from backend in XML structure that is very complex but values in JSON

//JSON look like as > {} object with out any name but Difference is that keys and values both are in string
// {
//     "name" = "aziz",
//     "course" = "Js",
//     "Teacher" = "hitesh"
// } 
// // JSON Is in the Form Of Array
// [
//     {},
//     {}
// ]
// Json END
//==========================                                         ========================
//========================    Functions and parameter in javascript   ================
//==========================                                         ========================
function addMyNumber(num1,num2){
    console.log(num1+num2);
    

}
// addMyNumber(2,3)
// addMyNumber(2,"3")
// addMyNumber("2",3)
// addMyNumber("2",null)
//let pass=addMyNumber(2,null);//pass variable is undefine due to return keyword
//console.log("Can't Do It:-",pass);//this statement can not work because return keyword is not used 

//console.log("result",addMyNumber(2,null));//this statement can not work because return keyword is not used 


//    An Other Concept
function myfun(numbera,numberb){
    //  let result = numbera+numberb;//1st method
    //  return result;
    return numbera+numberb;//second method
    //when we can use return statement then we can store it in new variable like result
}
    let result = myfun(10,10);
    console.log("Result:",result)

//  next method
function userloggin(Username){
    if(!Username){
        console.log("Plz Enter Username");
        return;
    }
    // if(Username===undefined){
    //     console.log("Plz Enter Username");
    //     return
    // }
    
    return `${Username} just loggin`
    // return 
}    
console.log(userloggin("usman"));


// function userloggin(Username="Rehman"){ //this value is print when user cannot pass value
//     if(!Username){//this block is not execute
//         console.log("Plz Enter Username");
//         return
//     }
//     return `${Username} just loggin`
// }    
// console.log(userloggin());
// console.log(userloggin(null));
// console.log(userloggin(""));
// console.log(output);

//=======================                                            ====================
//====================== Functions with objects and array in javascript   =============
//=======================                                            ====================
//when we calculate cards price in E-commerace website then build this type of logic
function calculateprice(...num1){
    return(num1)
}
console.log(calculateprice(1,2,3,4,5));//this is rest operator ... collect all values into an arraythen we can add
//we can pass an object in a function
// let student4 = {
//     name:"Aziz",
//     rollnumber:123
// }
function obj(anyobj){
    console.log(`The Name ${anyobj.name} and Rollnumber is ${anyobj.rollnumber}`);
    
}
// obj(student4)
obj({//direct pass an object
    name:"Aziz",
    rollnumber:123
})

//Array pass in an function
// let myarray=[100,200,300,400];

function array(getarray){
return(getarray[0]);
}
console.log(array([100,200,300,400]));
// console.log(array(myarray));


//====================                                      ================
//===================  Global and local scope in javascript =================
//====================                                      =================
var d = 4;
if(true){
 let a =1;
 var b = 2;
 const c =3; 
 console.log("inner value",d);// globel scope
 
}
// console.log(a); // a is not defined
console.log(b);  // c is define  due to globel scope
// console.log(c); // c is not defined

// Next Level of scope in js
function one(){
    const Username = "Aziz";
    function two (){
        const website = "youtube";
        console.log(Username);
        
    }
    // console.log(website);
    two();
}
one();
//++++++++++++++++++++++++++++ next level Interesting +++++++++++++++++++++++
console.log(addone(5));//function call
function addone (num){
    return num +1
}
// NOW >>>>>>>
// console.log(addtwo(5));//ReferenceError: Cannot access 'addtwo' before initialization
// const addtwo = function(num){//because function is store in variable
//     return num + 2
// }
//=====================                                     ====================
//==================   THIS and arrow function in javascript   =================
//=====================                                     ===================


let company = {
    emp :"Azhar",
    empID:123,
    empPay:30000,
   empWork:function(){
    console.log(`${this.emp} ,1st Employee in Company`);
    console.log(this);
    
    }
    
}
console.log(company.empWork());
company.emp="Ali";
console.log(company.empWork());
Object.freeze(company);// lock changes in object
company.emp="Ali Raza";
console.log(company.empWork());
console.log(this);

//point globel object in browser is window
//==============================    ARROW FUNCTION   ============================
//arrow function is like a simple function in both condition log(this) return undefine
//syntex
// let arrowfun=(num1,num2)=>{  // this is explicit return when we use return keyword in function know as explicit
// return num1+num2                 //basics 
// }

// let arrowfun=(num1,num2)=>num1+num2      //implicit return function  writen in same line

// let arrowfun=(num1,num2)=> (num1+num2)      //implicit return function  writen in same line if we can use()paranthesis we can not use return keyword


let arrowfun=(num1,num2)=> ({name:"Ali",rollnumber:123})  //in implicit return function  the use of ()paranthes help to declear the object 
console.log(arrowfun());
//==========================                                             =================
//========================= Immediately Invoked Function Expressions IIFE ================
//==========================           why we use it  IIFE                   =================
//  We have used the IIFE to remove the pollution of the global scope
//  A function that is executed Immediately is called IIFE
//syntex

//  interview question
((name)=>{//un-named IIFE
    console.log(`This is a arrow Fuction in IIFE ${name}`);
    
})("Aziz");// In This case We Can Use ; at the end 

// Two IIFE are write with The help of semicolun at the end of code like uper case
(// named IIFE
  function chai(num1,num2) {
  console.log(num1+num2)
  }

)(1,2);




