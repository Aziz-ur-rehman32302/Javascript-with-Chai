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
//==========================                                             =================
//========================= How does javascript execute code + call stack ================
//==========================                                             =================
//read of register notes

//==========================                          ===================================
//========================= Control flow in javascript  =================================
//==========================                          ====================================
//   Purpose of study this topic to cotrol the execution of code
//conditional statements

const day = "friday"
switch (day) {
    case "monday":
        console.log("monday");
        break;
    case "tuesday":
        console.log("tuesday");
        break;
    case "wednesday":
        console.log("wednesday");
        break;
    case "friday":
        console.log("friday");
        break;
    case "saturaday":
        console.log("saturday");
        break;
    default:
        console.log("sunday");
        
        break;
}



// falsy values
//  falsa, 0 , -0, bigInt 0n, "" , null, undefine, NAN  these valuse act as a false value
// const userEmail = "a@aziz123.ai";//true
const userEmail = "";//false
if (userEmail) {
    console.log("got values");
    
}else{
    console.log("nothing get");
    
}


// how to check Array is empty or not
 const emptyArray = [];
 if (emptyArray.length===0) {
    console.log("arrsy is empty");
    
    
 }


// how to check object is empty or not
 const emptyobj = {};
 if (Object.keys(emptyobj).length===0) {
    console.log("Object is empty");
    
    
 }
    // Nullish Coalescing Operator (??):- work on special>> null and undefined
    let val1 ;
//  val1=5 ?? 10;
//  val1=  null ?? 10;
//  val1=  undefined ?? 10;
//  val1=  undefined ?? null ?? 20;
 val1=  undefined ?? 10 ?? 20;
 console.log(val1);


 //     Ternary operator is a second way of writing if else
//  condition ? true : false 
 let age  = 20;
//  age>=0  ? console.log("adult") : console.log("not adult");


 let result1= age>=30  ? "adult" : "not adult"
 console.log(result1);


 
 //================                                              =======================
//================  For loop with break and continue in javascript  =======================
//=================                                              ========================
 
//  for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(`This is a value:-${element}`);  
//  }

//  for (let i = 0; i < 10; i++) {
//     console.log(`Table Of :${i}`);
    
//     for (let j = 0; j < 10; j++) {
        
//         console.log( i + `*` +  j +`=` + i*j ); 
//     }  
//  }
 
//  //        Continue   and   Breake

// for (let index = 0; index <=20; index++) {
//     if (index==10) {
//         console.log(`10 is Detected`);
//         break// use ti stop loop
//     }
//     console.log(index);
    
// }
// for (let index = 0; index <=20; index++) {
//     if (index==10) {
//         console.log(`10 is Detected`);
//         continue  // this keyword run loop after detection
//     }
//     console.log(index);
    
// }

let myarray =["aziz" , "ahmad" , "Ali" , 12 ,true ,"pass"]
// for (let ind = 0; ind < myarray.length; ind++) {
//     // console.log(ind[0]);
    
//     const element = myarray[ind];
//     console.log(element);  
// } 
let pointer=0;
// while (pointer<=myarray.length) {
//  console.log(myarray[pointer]);
//     pointer = pointer + 1
// }

do {
    console.log(myarray[pointer]);
    pointer = pointer + 1
} while (pointer<=myarray.length);

//============================                               =======================
//===========================       High Order Array loops    =======================
//============================                               ========================
 //   For Of Loop
 let greeting = "Aziz Ur Rehman "
 for (const greet of greeting) {
    if (greet===" ") {
       console.log("space in string");
       continue
        
        
    }
    console.log(`Letter of Greeting is : ${greet}`);
    
 }

//=============================       MAPS IN JS      =======================
// maps is a key value pair like an object but difference is that it takes only unique values and all values print in same order in which that can be written same valuse are not print again and again 
let map_1 = new Map();
map_1.set('pak', "Pakistan")
map_1.set('in', "India")
map_1.set('fr', "France")
//console.log(map_1);
//  use of loop on map object  perform same function on object is not work because object is not iteratable in this way like map
for (const [point , value] of map_1) {//[point , value] use to destructure an Array
    //console.log(point, ":-",value);
    
}

let obj11 = {   /// Error :>  obj11 is not iterable
    game1 : 'sanck',
    game2: 'nyc'
}

// for (const [key , value] of obj11) {//for of loop to access values  of object
//  console.log(key,value);  
//}
// for in loop
for (const key in obj11) { /// for object  we use for in loop
    console.log(`${key} is a shortcut of ${obj11[key]}`);
    
}

let arr = ['a','b','c']
for (const key in arr) {//for in loop
    console.log(arr[key]);// this code access keys of arrays 
    
}
// for each loop
// arr.forEach(function(val){
//     console.log(val); // access value of array  
// })

arr.forEach((val,index,arr)=>{  // use of arrow function
 console.log(val,index,arr);
 
})
// another way of doing same process 
function print (item , index , arr){ // for each takes three parameters
    console.log(`This is a value:${item} This is a index of Array:${ index} List of complete Array: ${arr}`);   
}
arr.forEach(print)
 
// //for of loop on array 
// for (const key of arr) {
//     console.log(key);//direct access keys from array
    
// }


let arrObject = [//array with multiple objects and we can access with for each loop basically use in database at backend
    {
        username:"Aziz",
        Email:"Aziz@gmail.com"
    },
    {
        class:"5th",
        rollNumber:123
    },
    {
        unique_colour:"red"
    }
]
arrObject.forEach( (item)=>{
 console.log(item.unique_colour);
 
} )
//==============================                                  =========================
//===========================   Filter map and reduce in javascript  ======================
//==============================                                   ========================

// for Each loop does not return values when store in variable

// let arrstore=arr.forEach( (item)=>{
//   console.log(item);
  
// } )
// console.log(arrstore);// for Each loop does not return values when store in variable
 const  arra= [1,2,3,4,5,6,7,8,9,10]
//implicit return
// let arrstore=arra.filter( (num)=> num>4 ) //auto return because scop is not used
// console.log(arrstore);//filter return values when store in variable


// let arrstore=arra.filter( (num)=> {//explicit return >> return keyword must be used because scope {} is used
//     return num>4
// } )
// console.log(arrstore);//filter return values when store in variable


//map function
let arrstore=arra.map( (num)=> {//explicit return >> return keyword must be used because scope {} is used
    return num+10
} )
console.log(arrstore);//map return values when store in variable


// let amptyArray = [];
// arrstore.forEach( (num)=>{
//     // num >5;
//     // console.log(num);
//     if (num<4) {
//         console.log(amptyArray.push(num));
//     }
    
// } )

let numbers = [1,2,3,4,5,6,7,8,9,10]

                                //chaining  Method

// the process in which we can use 2 or 3 methods at a same time

let res=numbers
            .map( (num)=>num*5 )
            .map( (num)=>num/2 )
            .filter((num)=> num>=20)

console.log(res);

const array1 = [1, 2, 3, 4];

//         Reduce keyword

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
const sumWithInitial = array1.reduce(
    
    
  (accumulator, currentValue) => accumulator + currentValue,
  0//accumutator value

);
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

console.log(sumWithInitial);
// Expected output: 10\



//    ADD Price Of All Courses In Cards
 let courses =[
    {
        courseTytle:"JS",
        price:2999
    },
    {
        courseTytle:"Data science",
        price:3999
    },
    {
        courseTytle:"HTML",
        price:999
    },
    {
        courseTytle:"C++",
        price:1999
    }
 ]

 let mytotal=courses.reduce( (accumulator,item)=>(accumulator+item.price),0 )
console.log("Totale value of our Courses:-",mytotal);






