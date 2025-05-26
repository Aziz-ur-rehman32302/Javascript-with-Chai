//====================================First Lecture==========================================
//==============================Variable decleration Methods=================================
const accountId = 1233
let accountName = "Pakistan"
var accountEmail = "svhk21@gmail.com"
let accountState ;//udefined
let accountStatus="0" ;
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



// Data types in javascript are divided into two categories
// (1): Primitive Data Type
// (2): Non-Primitive Data Type
// Primitive Data Type: String, Number, Boolean, Null, Undefined, Symbol,BigInt(bohot bade integers ke liye (2^53 se bade numbers))
// Non-Primitive Data Type: Object, Array, Function
// Primitive Data Type: These are the basic data types that are immutable and stored in stack memory.
// Non-Primitive Data Type: These are complex data types that can hold multiple values and are stored in heap memory.
// |  Type     |  Example         |  Category      |
// | --------- | ----------------- | ------------- |
// | String    | `"hello"`         | Primitive     |
// | Number    | `123`             | Primitive     |
// | Boolean   | `true` / `false`  | Primitive     |
// | Null      | `null`            | Primitive     |
// | Undefined | `undefined`       | Primitive     |
// | Symbol    | `Symbol("id")`    | Primitive     |
// | BigInt    | `123456789n`      | Primitive     |
// | Object    | `{ name: "Ali" }` | Non-Primitive |
// | Array     | `[1, 2, 3]`       | Non-Primitive |
// | Function  | `function() {}`   | Non-Primitive |

/*to save the old code of javascript we use "USE STRICT" SO that all js code treat as a newer js */
//Read Data Type in Details from Notes
//"use strict";//leatest version of code in js
// console.log(typeof "aziz");
// console.log(typeof 123);
// console.log(typeof true);
// console.log(typeof null);//null is a object in js(interview question)
// console.log(typeof Symbol("aziz"));//symbol is a new data type in js
// console.log(typeof undefined);
// console.log(typeof age);
// console.log("aziz");
// =========================================================================================
//====================================Third Lecture==========================================
//==============================   Datatype conversion confusion   ========================
let myFName= "Aziz";
let myAge = 20;
let num1 = String(myAge);//convert number into string
let num2 = Number(myFName);//convert string into number
let myIsStudent = 1;
let myIsStudent2 = Boolean(myIsStudent);//convert number into boolean
// console.log(typeof num1);
// console.log(num1);
// console.log(typeof num2); 
// console.log(num2);//NaN (Not a Number) because "Aziz" cannot be converted to a number
// console.log(typeof myIsStudent); 
// console.log(myIsStudent2);
// console.log(num1 + myFName); // "20Aziz" (string concatenation)
// console.log(num2 + myFName); // NaN (Not a Number) because num2 is NaN
// ===============================================================================
//====================================Fourth Lecture=========================================
//=====================  Why string to number conversion is confusing   ====================
// console.log("20" + 10 + 2); // "20102" (string concatenation)string is first therefor all conversion is based on string concatenation
// console.log(5 + 10 + "2"); // "152" (string concatenation)number is first therefor all conversion is based on number concatenation

// prefix and postfix increment and decrement operators
let a = 10;

// console.log("a=", a++); // Output: 10 (pehle print, phir increase)
// console.log("a=",a);   // Output: 11

let b = 10;

// console.log("b=",  ++b); // Output: 11 (pehle increase, phir print)
// console.log("b=", b);   // Output: 11
// ===============================================================================

//====================================Fifth Lecture=========================================
// | Value / Example         | Expression                     | `typeof` Result          |
// | ----------------------- | ------------------------------ | ------------------------ |
// | `"Hello"`               | `typeof "Hello"`               | `"string"`               |
// | `123`                   | `typeof 123`                   | `"number"`               |
// | `true`                  | `typeof true`                  | `"boolean"`              |
// | `undefined`             | `typeof undefined`             | `"undefined"`            |
// | `null`                  | `typeof null`                  | `"object"` ✅ (bug in JS) |
// | `{ name: "Ali" }`       | `typeof { name: "Ali" }`       | `"object"`               |
// | `[1, 2, 3]`             | `typeof [1, 2, 3]`             | `"object"`               |
// | `function() {}`         | `typeof function() {}`         | `"function"`             |
// | `Symbol("id")`          | `typeof Symbol("id")`          | `"symbol"`               |
// | `12345678901234567890n` | `typeof 12345678901234567890n` | `"bigint"`               |



//==============================   TYPES OF MEMORY   =========================

// In JavaScript, memory is divided into two main types: Stack Memory and Heap Memory.
// 1. Stack Memory: This is used for storing primitive data types (like numbers, strings, booleans, etc.).
//    - It follows a Last In First Out (LIFO) structure.
//    - When a variable is declared, a copy of its value is stored in stack memory.
//    - Stack memory is faster and has a fixed size.
// 2. Heap Memory: This is used for storing non-primitive data types (like objects, arrays, functions, etc.).
//    - It allows for dynamic memory allocation.
//    - When an object or variable is declared in heap memory, a reference to the original value is stored.
//    - Heap memory is slower and has a variable size.
// Example of Stack Memory
let myFirstName = "aziz"; 
let myName = myFirstName;
myName = "Aziz Ur Rehman" //take copy then can not change in orignal value
// console.log(myName);
// console.log(myFirstName);


// Example of Heap Memory
 let muobj ={
    name :"aziz",
    rollnumber:123,
    class:"1st-year"
 }
 let obj = muobj;
//   console.log(obj);
 
 obj.rollnumber=786;
 obj.name="Aziz-Ur-Rehman";//in heap orignal value is changed when change occur in referance 

//    console.log(muobj.rollnumber);
//  console.log("changes in orignal object:",muobj);
//  console.log("referance of orignal object",obj);
 

 //++++++++++++++++++++++++++++  Strings in Javascript  ++++++++++++++++++++++++++++++
  
 let f_Name = "Aziz";
 let mid_Name = "Ur";
 let l_Name = "Rehman";
 //  =======================================
//  how to use concantination in JS
//  =======================================
// console.log(f_Name +  "-" + mid_Name + "-"+ l_Name);

// =====================================
// Template Literals
// =====================================
//  console.log(`MY First Name is ${f_Name} and mid name ${mid_Name} and last name is ${l_Name} and final Result is "Aziz-Ur-Rehman"`);
                                       // ANOTHER EXAMPLE
// let pen ={
//    name1 : "inkpen",
//    color: "red",
//    Price:20,
//  };
//  console.log(`${pen.name1} is contain a ${pen.color} color with price of ${pen.Price} Rupees` )
 
// NOW TAKE A STRING
                  // define the properties Method or function of string
                  

     let str = "Aziz-Ur-Rehman"                  
   //   let str = "Aziz-Ur--Rehman"                  
// (1):- length Method or function            
// console.log(str.length);
// (2):- indexof Method or function
// console.log(str.indexOf('R'));
// (3):- CharAt  Method or function
// console.log(str.charAt(8));
// (4):- toUpperCase  Method or function
// console.log(str.toUpperCase());
// (5):- toLowerCase  Method or function
// console.log(str.toLowerCase());
// (6):- Trim Method or function
// console.log(str.trim());// remove space from start and end of string
// (7):- slice Method or function

// console.log(str.substring(10,13));// print or return start index to end index
// console.log(str.slice(10,13));// same work as a substring but it takes negative values
// console.log(str.slice(6,-2));
// (7):- Replace Method or function
// console.log(str.replace("r","l"));//replace r with l
// (8:- include Method or function check the specific character or word in string
// console.log(str.includes("Az"));//check in string is available or not
// console.log(str.includes("Ali"));
// (9):- Split Method or function
 let std = "Aziz-Ur-Rehman"
//  console.log(std.split("-"));
 
//console.log(str.split("-"));// this method split make  array on the base of "-" or "" spaces
// (10):- concat Method or function
let name = "Aziz";
let marks = '103'
// let concat = name.concat(marks);//th
// console.log(concat);//th
// console.log(name.concat(":marks:").concat(marks));//th



//  How to declear string With new Method with the help new keyword
let str_1 = new String('Rehman') //('Rehman') is a know as constructor 
// console.log(str_1);
// console.log(str.__proto__);


//========================                                  ===============================
//=======================   Number and Maths in Javascript   ===============================
//========================           Number                       ================================
let score = 123.426;
let num = new Number(200);// object with new keyword
let num12 = 300; // primitive data type
// console.log(score);
// console.log(typeof score);
// console.log(num);
// console.log(typeof num);
// console.log(num12);
// console.log(typeof num12);
//          Number properties and Method
//(01):- toString method
// console.log(typeof num.toUpperCase);//undefined because toUpperCase is not a method of number
// console.log(num.toString().toUpperCase());// this method convert number into string and then we can use string method

// console.log(typeof num);
// console.log(num12.toString().length);
// console.log(typeof num12);
// console.log(score.toString().length);
// console.log(typeof score);

//  console.log(num.toString().length);// .length is a property of string
// (02):- toFixed method

// console.log(num.toFixed(3));//this method show that number after floating point that is passed in constructor 
// console.log(score.toFixed(1));
//(03):- toPrecision method 
// console.log(score.toPrecision(3)); // it return only that values passed in constructor 
//(04):- toLocaleString method 
let lNum = 1234456;
// console.log(lNum.toLocaleString('en-IN')); //it help in readabiliy of large value 

//  important propertice in number  for furthor details read from MDN
const x = Number.MAX_SAFE_INTEGER ;
const y = Number.MAX_VALUE;
const z = Number.MIN_VALUE;
// console.log(x);
// console.log(y);
// console.log(y.toString().length);
// console.log(z);

//========================                                  ===============================
//=======================         Maths in Javascript        =============================
//========================                                  ===============================

// console.log(Math);
// console.log(typeof Math);//object
// console.log(Math.abs(-4)); // this convert - sign into + sign
// console.log(Math.round(4.567));//perform only round of operation
// console.log(Math.ceil(8.38576465));// it takes upper/higher value
// console.log(Math.ceil(5.38576465));
// console.log(Math.floor(8.38576465));//it takes lower value
// console.log(Math.floor(5.38576465));
// console.log(Math.sqrt(36));//provide value that give squar-root
// console.log(Math.min(2,3,4,5,6,-322,1,-4,2));//provide minimum value
// console.log(Math.max(2,3,4,5,6,-322,1,-4,2));//provide maximum value

// imp concept  >>>>  this method is use when we take some rendom values according to requirement
//  console.log(Math.random());
//  console.log(Math.random()*10);
//  console.log((Math.random()*10)+1);
//  console.log((Math.floor(Math.random()*10)+1));
//  console.log((Math.ceil(Math.random()*10)+1));
//  console.log((Math.floor(Math.random()*10)+1) + 10);
//  console.log(Math.round((Math.random()*10)+1));

 let min = 10;
 let max = 20;
//  console.log(Math.ceil((Math.random()*(max-min +1))+min));//takes max values
//  console.log(Math.floor((Math.random()*(max-min +1))+min));//takes min values


//  console.log(Math.floor((Math.random()*(max-min)+1)+min));
//  console.log(Math.ceil((Math.random()*(max-min)+1)+min));

//========================                                  ===============================
//=======================         Datas in Javascript        ===============================
//========================                                  ================================
let myDate = new Date();//this is a constructor of date
// console.log(myDate);//2024-10-30T06:23:57.059Z
// console.log(typeof myDate);//object
// console.log(myDate.toString());//Mon May 26 2025 10:01:03 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toJSON());//2025-05-26T05:01:03.000Z
// console.log(myDate.toDateString());//Mon May 26 2025
// console.log(myDate.toISOString())//same output like toJSON  
// console.log(myDate.toLocaleString());//5/26/2025, 10:01:03 AM





let yourData = Date()
let yourData2 = new Date(2023 ,0,23 , 5,6)
//  console.log( yourData);
//  console.log( yourData2.toLocaleString());
//  console.log(typeof yourData);// string
//  const myData = new Date()//declear an object with new keyword
//  console.log("TODay DATE",myData);// 2024-10-30T06:23:57.059Z
//  console.log(typeof myData);//object
//  console.log(myData.toString());//Fri Oct 25 2024 16:44:53 GMT+0500 (Pakistan Standard Time)
//   console.log(myData.toDateString());//Fri Oct 25 2024
//   console.log(myData.toLocaleDateString());//10/25/2024
//   console.log(myData.toLocaleString());//10/25/2024, 4:44:53 PM
//   console.log(myData.toTimeString());//16:44:53 GMT+0500 (Pakistan Standard Time)
//   console.log(myData.toISOString());//2024-10-25T11:44:53.492Z
//   console.log(myData.toJSON());//2024-10-25T11:44:53.492Z

//   How to declear specific data
   let takeData = new  Date(2023 ,0,23)
//   let takeData = new  Date(2023 ,0,23 , 5,6)//1/23/2023, 5:06:00 AM
//   let takeData = new  Date("12-01-2023")
//  console.log("own date",takeData);
//  console.log(takeData.toLocaleString());//
//  console.log(takeData.toString());
//  console.log(takeData.toDateString());
//  console.log(takeData.toLocaleDateString());

// Use of Time Stamps when we use the pool to define winner

// let myTimestamps = Date.now()//ya line exit abhi ki data return keray gi
// console.log("myTimestamps",myTimestamps);// time in milsec>>1729860026594
// console.log(takeData.getTime());// convert time into milesecond >> 1701370800000
// console.log(Math.floor(Date.now()/1000));// this line print presand time into sec(1729860894)
// console.log((Date.now()/1000));// this line print presand time into sec(1729860894)
///////////////////////////////////////////////
// to check special part of data
// let checkDate = new Date();
let checkDate = Date.now();
// console.log("checkDate",checkDate);
// console.log(checkDate.getDate());
// console.log(checkDate.getMonth());
// console.log(checkDate.getMinutes());
// console.log(checkDate.getMilliseconds());
// console.log(checkDate.getSeconds());

///////////////////////// Most imp Concept

// console.log(checkDate.toLocaleString('default',{
//     weekday:"narrow",//narrow,short,long,full
//     year:"numeric",//numeric,2-digit
//     month:"narrow",//narrow,short,long,full
//       day:"numeric",//numeric,2-digit
//    // hour:"numeric",//numeric,2-digit
//    // minute:"numeric",//numeric,2-digit
//    //  timeStyle:"full",
//    // calendar:"calendar",
//    // dayPeriod:"narrow"
// }));//Friday

//========================                                  ===============================
//=======================         Array in Javascript        ===============================
//========================                                  ================================
  
let array = [1,2,3,4,5]
console.log(array);
//            METHODS  IN ARRAY
// array.unshift(6 , 7);
// console.log(array);
// array.shift();
// console.log(array);
// array.shift();
// console.log(array);
// array.push(6 , 7);
// console.log(array);
// // array.pop();
// array.pop();
// console.log(array);
//   for question purpose methods
// console.log(array.includes(5));//check 5 value in array and return boolean value
// console.log(array.indexOf(3));
// // point
// console.log(typeof array);
// console.log(array.join().length);

// let newarray = array.join()//this method change array into string
// console.log(newarray);
// console.log(typeof newarray);//string
// console.log(newarray.length);//string

// Slice and splice method
// console.log("A",array);
// console.log("slice Method",array.slice(1,3));
// console.log("A",array);// slice not change the orignal array last index range is  not include 

// console.log("splice Method",array.splice(1,3));
// console.log("B",array);//in splice end index is exclusive and orignal array is changed and range is  include
// another function of splice it is use 
// let arrayn1 = [1,2,3,4,5]
// arrayn1.splice(1,3,101,102);//other method of splice
// console.log(arrayn1);
// console.log(typeof array);
//   Concat and Spread Operator
let firstArray = ["Aziz","Ali","Ahmad"]
let secondArray = ["Aliza","Ali","Azam"]
//Now combaine Both Array
// firstArray.push(secondArray);//it push elements on exiting array
// console.log(firstArray);
// console.log(firstArray[3]);
// console.log(firstArray[3][0]);
// -------------------------------------------------------------------------
const allStudent = firstArray.concat(secondArray)//concat  return a new array
// console.log(allStudent);
// console.log(allStudent[3]);


// console.log(firstArray.concat(secondArray));
// console.log(...firstArray,...secondArray);//it is spreed operator{spreed method} mostly using this method
// console.log(typeof firstArray);

// let all_names=[...firstArray,...secondArray]//spreed operator 
// console.log(all_names);
// console.log(typeof all_names);

//Flat Method In Array
let anotherArray = [1,2,3,[4,5,],6,[7,8,[9,8,7]]];
let real_anotherArray=anotherArray.flat(2);//it change array into single array
// console.log(real_anotherArray);//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7 ]

//who to convert object ,string etc in array
//we can use from keyword to convert into array
// | Keyword / Method | Type          | Kya Karta Hai                                                      |
// | ---------------- | ------------- | ------------------------------------------------------------------ |
// | `join()`         | Method        | Array ko string mein convert karta hai, custom separator ke sath   |
// | `Array.from()`   | Static Method | Array-like ya iterable object ko real array mein convert karta hai |
// | `Array.of()`     | Static Method | Di hui values se ek naya array banata hai                          |
// | `in`             | Keyword       | Indexes (keys) ko loop karta hai (array ya object ke liye)         |
// | `for...of`       | Keyword       | Array (ya iterable) ke **values** ko loop karta hai                |



let iArray = "Aziz"
// console.log(Array.isArray(iArray));//checking of an variable is array or not
// console.log(Array.isArray("Aziz"));
// console.log(typeof iArray);
// console.log(Array.from(iArray));// 
// console.log(Array.of(iArray));// 
// console.log(typeof iArray);
//
// ----------------    in (looping over keys/indexes)     --------------------------//
// let arr = ["x", "y", "z"];
// for (let index in arr) {
//   console.log(index);  // Output: 0, 1, 2
// }
// ------------------------------------------//
// ----------------  for...of (looping over values)   --------------------------//

// let arr1 = ["x", "y", "z"];
// for (let value of arr) {
//   console.log(value);  // Output: x, y, z
// }



// ------------------------------------------//
// Object conversion into Array 
let std_class = {
   Name:"Aziz",
   Roll_Number:"BSF2206410",
   marks:50
} 

// let obj_Array1 = Object.values(std_class);
// console.log(obj_Array1); 
// Output: ["Aziz", "BSF2206410", 50]

// let obj_Array2 = Object.keys(std_class);
// console.log(obj_Array2); 
// Output: ["Name", "Roll_Number", "marks"]

// let obj_Array3 = Object.entries(std_class);
// console.log(obj_Array3);   

// console.log( std_class);
// console.log(typeof std_class);

// let obj_Array=Array.from(std_class);//interesting point study in further lecture
// console.log(obj_Array);

// console.log(Array.of(obj_Array1));//convert object into nested array
let score1 =100;
let score2 = 200;
let score3 = 300;

let score4 ="100";
let score5 = "200";
let score6 = "300";
// console.log(Array.of(score1,score2,score3));
// console.log(Array.of(score4,score5,score6));
// console.log(Array.of({name : "Aziz"}));
// console.log(Array.from({name : "Aziz"}));//intersting because we cannot tell the value that can be convert into array like upper case
// console.log(Array.from("Aziz"));//convert string into array












 
  
 
 
 





















 



 