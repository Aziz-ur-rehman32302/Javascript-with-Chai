//====================================First Lecture==========================================
//==============================Variable decleration Methods=================================
// const accountId = 1233
// let accountName = "Pakistan"
// var accountEmail = "svhk21@gmail.com"
// let accountState ;//udefined
// let accountStatus="0" ;
/* var cannot use
because of issue in a block scope and functional scop */

// accountId="123"
// console.log(accountId);
// console.log("accountId")
// const accountId = 1233
// let accountName = "Pak"
// accountName="pak";
// var accountEmail="dhsdbh88@gmail.com"
// console.table([accountId, accountName ,accountEmail,accountState,accountStatus])
// accountEmail="dhsdbh88@gmail.com"

//======================================Second Lecture======================================
//=====================================Data Types In Js=====================================
/*to save the old code of javascript we use "USE STRICT" SO that all js code treat as a newer js */
//Read Data Type in Details from Notes
//"use strict";//leatest version of code in js
// console.log(typeof "aziz");
// console.log(typeof 123);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof age);
// console.log("aziz");


//                          TYPES OF MEMORY

//++++++++++++++  Stack and Heap memory in javascript  +++++++++++

// (1):STACK MEMORY:-In primitive datatype stack memory is used. when we use stack memory then copy of variable is recieved that can be declear

// (2):HEAP MEMORY:-In Non-primitive datatype heap memory is usedand when an object or variable declear in heap then we can access referance of orginal value and in heap memory orginal value is change

// EXAMPLE OF STACK
let myFirstName = "aziz"; 
let myName = myFirstName;
 myName = "Aziz Ur Rehman" //take copy then change not change in orignal value
console.log(myFirstName);
console.log(myName);


// Example of Heap Memory
 let muobj ={
    name :"aziz",
    rollnumber:123,
    class:"1st-year"
 }
 let obj = muobj;
 //  console.log(obj);
 
 obj.rollnumber=786;
 obj.name="Aziz-Ur-Rehman";//in heap orignal value is changed when change occur in referance 

  //  console.log(muobj.rollnumber);
 console.log(muobj);
 console.log(obj);
 

 //++++++++++++++++++++++++++++  Strings in Javascript  ++++++++++++++++++++++++++++++
  
 let f_Name = "Aziz";
 let mid_Name = "Ur";
 let l_Name = "Rehman";
 //  =======================================
//  how to use concantination in JS
//  =======================================
console.log(f_Name +  "-" + mid_Name + "-"+ l_Name);

// =====================================
// Template Literals
// =====================================
 console.log(`MY First Name is ${f_Name} and mid name ${mid_Name} and last name is ${l_Name} and final Result is "Aziz-Ur-Rehman"`);
                                       // ANOTHER EXAMPLE
// let pen ={
//    name1 : "inkpen",
//    color: "red",
//    Price:20,
//  };
//  console.log(`${pen.name1} is contain a ${pen.color} color with price of ${pen.Price} Rupees` )
 
// NOW TAKE A STRING
                  // define the properties Method or function of string
                  let str = "  Aziz-Ur-Rehman"

                  
    // (1):- length Method or function            
console.log(str.length);
// (2):- indexof Method or function
console.log(str.indexOf('R'));
// (3):- CharAt  Method or function
console.log(str.charAt(10));
// (4):- toUpperCase  Method or function
console.log(str.toUpperCase());
// (5):- toLowerCase  Method or function
console.log(str.toLowerCase());
// (6):- Trim Method or function
console.log(str.trim());// remove space from start and end of string
// (7):- slice Method or function
console.log(str.substring(10,16));// print or return stsrt index to end index
console.log(str.slice(10,16));// same work as a substring but it takes negative values
console.log(str.slice(2,-4));
// (7):- Replace Method or function
console.log(str.replace("r","l"));//replace r with l
// (8:- include Method or function
console.log(str.includes("Az"));
console.log(str.includes("Ali"));
// (9):- Split Method or function
console.log(str.split("-"));// this method split my array on the base of "-" or "" spaces
// (10):- concat Method or function
let name = "Aziz";
let marks = '103'
let concat = name.concat(marks);
console.log(concat);
console.log(name.concat(":marks:").concat(marks));



//  How to declear string With new Method with the help new keyword
let str_1 = new String('Rehman') //('Rehman') is a know as constructor
console.log(str_1);
console.log(str.__proto__);


//========================                                  ===============================
//=======================   Number and Maths in Javascript   ===============================
//========================           Number                       ================================
let score = 123.426;
let num = new Number(200);
console.log(score);
console.log(num);
//          Number properties and Method
//(01):- toString method
console.log(num.toString());
console.log(num.toString().length);// .length is a property of string
//(02):- toFixed method
console.log(num.toFixed(1));
//(03):- toPrecision method 
console.log(score.toPrecision(4)); // it gives only 4 values
//(04):- toLocaleString method 
let lNum = 1234456;
console.log(lNum.toLocaleString('en-IN')); //it help in readabiliy of large value 

//  important propertice in number  for furthor details read from MDN
const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_VALUE;
const z = Number.MIN_VALUE;
console.log(x);
console.log(y);
console.log(z);

//========================                                  ===============================
//=======================         Maths in Javascript        ===============================
//========================                                  ================================

console.log(Math);
console.log(Math.abs(-4)); // this convert - sign into + sign
console.log(Math.round(4.467));//perform only round of operation
console.log(Math.ceil(4.5));// it takes upper/higher value
console.log(Math.floor(4.5));//it takes lower value
console.log(Math.sqrt(36));//provide value that give squar-root
console.log(Math.min(2,3,4,5,6,-322,1,-4,2));//provide minimum value
console.log(Math.max(2,3,4,5,6,-322,1,-4,2));//provide maximum value

// imp concept  >>>>  this method is use when we take some rendom values according to requirement
 console.log(Math.random());
 console.log(Math.random()*10);
 console.log((Math.random()*10)+1);
 console.log((Math.floor(Math.random()*10)+1));

 let min = 10;
 let max = 20;
 console.log(Math.floor((Math.random()*(max-min)+1)+min));

//========================                                  ===============================
//=======================         Datas in Javascript        ===============================
//========================                                  ================================
// let yourData = Date()
//  console.log(typeof yourData);// string
//  const myData = new Date()//declear an object with new keyword
//  console.log(myData);
//  console.log(typeof myData);//object
//  console.log(myData.toString());//Fri Oct 25 2024 16:44:53 GMT+0500 (Pakistan Standard Time)
//   console.log(myData.toDateString());//Fri Oct 25 2024
//   console.log(myData.toLocaleDateString());//10/25/2024
//   console.log(myData.toLocaleString());//10/25/2024, 4:44:53 PM
//   console.log(myData.toTimeString());//16:44:53 GMT+0500 (Pakistan Standard Time)
//   console.log(myData.toISOString());//2024-10-25T11:44:53.492Z
//   console.log(myData.toJSON());//2024-10-25T11:44:53.492Z

  // How to declear specific data
  //  let takeData = new  Date(2023 ,0,23)
//   let takeData = new  Date(2023 ,0,23 , 5,6)
  let takeData = new  Date("12-01-2023")
 console.log(takeData.toLocaleString());
//  console.log(takeData.toString());
//  console.log(takeData.toDateString());
//  console.log(takeData.toLocaleDateString());

// Use of Time Stamps when we use the pool to define winner
let myTimestamps = Date.now()//ya line exit abhi ki data return keray gi
console.log(myTimestamps);// time in milsec>>1729860026594
console.log(takeData.getTime());// convert time into milesecond >> 1701370800000
console.log(Math.floor(Date.now()/1000));// this line print presand time into sec(1729860894)
///////////////////////////////////////////////
// to check special part of data
let checkDate = new Date();
console.log(checkDate);
console.log(checkDate.getDate());
console.log(checkDate.getMonth());
console.log(checkDate.getMinutes());
console.log(checkDate.getMilliseconds());
console.log(checkDate.getSeconds());

///////////////////////// Most imp Concept
let final =checkDate.toLocaleString('default' , {
   // weekday:"long",
   // timeStyle:"full",
   // calendar:"calendar"
   dayPeriod:"narrow"
})
console.log(final);//Friday

//========================                                  ===============================
//=======================         Array in Javascript        ===============================
//========================                                  ================================
  
let array = [1,2,3,4,5]
console.log(array);
//            METHODS  IN ARRAY
// array.unshift(6 , 7);
// array.shift();
// array.push(6 , 7);
// array.pop();
//   for question purpose methods
console.log(array.includes(5));
console.log(array.indexOf(2));
// point
let newarray = array.join()//this method change array into string
console.log(newarray);
console.log(typeof newarray);//string

// Slice and splice method
console.log("A",array);
console.log("slice Method",array.slice(1,3));
console.log("A",array);// slice not change the orignal array last index range is include 

console.log("splice Method",array.splice(1,3));
console.log("B",array);//in splice end index is exclusive and orignal array is changed and range is not include
// another function of splice it is use 
let arrayn1 = [1,2,3,4,5]
arrayn1.splice(1,3,101,102);
console.log(arrayn1);
console.log(typeof array);
//   Concat and Spread Operator
let firstArray = ["Aziz","Ali","Ahmad"]
let secondArray = ["Aziz","Ali","Ahmad"]
//Now combaine Both Array
console.log(firstArray.concat(secondArray));
console.log(...firstArray,...secondArray);
console.log(typeof firstArray);

let all_names=[...firstArray,...secondArray]
console.log(all_names);
console.log(typeof all_names);

//Flat Method In Array
let anotherArray = [1,2,3,[4,5,],6,[7,8,[9,8,7]]];
console.log(anotherArray.flat(1));// it change array intosingle array
//who to convert object ,string etc in array
//we can use from keyword to convert into array
let iArray = "Aziz"
console.log(Array.isArray(iArray));
console.log(Array.isArray("Aziz"));
console.log(Array.from(iArray));
let score1 =100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
console.log(Array.from({name : "Aziz"}));//intersting because we cannot tell the value that can be convert into array like upper case














 
  
 
 
 





















 



