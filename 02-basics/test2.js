//============================                                  ============================
//===========================        Objects In Javascript          =========================
//============================                                  ============================
//There Are two way to declear an odject
//(1):- literals> when we create an object with literals then it can not create singleten object
//(2):- constructor <object.create constructor method> when we create an object with constructor it can be a singleton object

// Explane odject literals
// interview question use of symbol use as a key in object  
let mysym = Symbol("Khan2")//use of symbol datatype
let mysec_symbol = Symbol("Aziz")
let student ={
    name:"Aziz",
    [mysym]:"khan2",//symbol key in object 
    [mysec_symbol] :"Symbol In Object" ,//output=>  [Symbol(Aziz)]: 'Symbol In Object' 
    "lname":"Rehman",//we can not access lname With the help of . therfore we can use square notation to access lname in object 
    
    class : "1st year",
    "Email": "abc213@gmail.com",
    num:1233,
}
// console.log(student);
// console.log(student[mysec_symbol]);
// console.log(student[mysym]);
// console.log(typeof [mysym]);//object
// console.log(student["lname"]);//in this method we can  use  string in key value pair
// console.log(student.Email);
// console.log( student.Email);
// console.log( student["num"]);//another method to access value in object
// console.log(typeof student.Email);
//change value in object
// console.log(student.Email="rehman229@gmail.com");
// Object.freeze(student);
// console.log(student.Email="aziz229@gmail.com");
// console.log(student);


//====================Function add in an object
 student.greeting =function(){
    // console.log("Hellow js user ");
}
 student.greetingtwo =function(){
    // console.log(`Hellow js user,${this.class}`);// use of backit (``) is called string interpulation
}//this keyword is used to access the same referance point or from same object 
// console.log(student.greeting());
// console.log(student.greetingtwo());

const person1 = {
    name: "Jane Doe",
    age: 28,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
//  console.log(person1.greet());
const person = {
    name: "Jane Doe",
    age: 28,
    
};
person.greet= function() {
    // console.log("Hello, my name is " + this.name);
}
// console.log(person);

// console.log(person.greet());

// const obj = new object();
// const person_1 = new person("Alice", 24);
// const person2 = new person("Bob", 22);
// console.log(person_1 , person2);

// person_1.greet();
// person2.greet();
//===============   Create a constructor function that specifies an object's properties and methods.
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello, my name is " + this.name);
//         console.log("Hello, my age is " + this.age);
//     };
// }
// Use the new keyword to create instances of the object.
// const person2 = new Person("Bob", 22);
// person2.greet();
// const person1 = new Person("Alice", 24);
// person1.greet();

//========================== object creation with singleton or constructor   =======================
 
// let tinderuser = new Object()>>singleton object
// console.log(tinderuser);//> {}
let tinderuser = {}//?>> non-singleton object
// console.log(tinderuser);// same output like uppercase
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
// console.log(regularuser);

// console.log(regularuser.notexit?.fullName);//>hint study in next lecture 
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
const obj4 =Object.assign({},obj1,obj2)
// const obj4 = object.assign(Target , Sources)
// console.log(obj4);
// console.log(obj1);
// console.log(obj2);
//separate operator
let obj5 = {...obj1,...obj2}// same conept like array
// console.log(obj5);
// console.log(obj1);
// console.log(obj2);
//++++++++++++++++++++++++++++++++++++++++++
// console.log("01:",tinderuser);
// console.log(Object.keys(tinderuser));//datatype of keys is Array
// console.log(Object.values(tinderuser));//datatype of values is Array
// console.log(Object.entries(tinderuser));//datatype of entries is Array in array
// console.log(tinderuser.hasOwnProperty("id"));// ask value from object


//-----------------------     Object de-structure and JSON API intro     ----------------------
//De-Structure mean git value from object
// console.log(tinderuser);
// console.log(tinderuser.name);
let {name} = tinderuser;//we can directly access the name from tinderuser using this method
let {Email:msg} = tinderuser;//we can directly change Email with msg noww access with msg
let msg1 = tinderuser.Email;//we can directly change Email with msg1 noww access with msg

// console.log(name);
// console.log(msg);
// console.log(msg1);
//----------------------     JSON API intro        -------------------------------
// JSON stand for JavaScript Object Notation
//API is somthing that perform some task for us 
// in past values return from backend in XML structure that is very complex but now a day values return in JSON,JSON Looks like a Object{json}

//JSON look like as > {} object with out any name but Difference is that keys and values both are in string
// {
//     "name" = "aziz",
//     "course" = "Js",
//     "Teacher" = "hitesh"
// } 
// //some time return in the form of JSON Is in the Form Of Array
// [
//     {},
//     {}
// ]
// Json END
//==========================                                         ========================
//========================    Functions and parameter in javascript   ================
//==========================                                         ========================
// function addMyNumber(num1,num2){
//     console.log(num1+num2);
    

// }
// addMyNumber(2,3)
// addMyNumber(2,"3")
// addMyNumber("2",3)
// addMyNumber("2",null)
//let pass=addMyNumber(2,null);//pass variable is undefine due to return keyword
//console.log("Can't Do It:-",pass);//this statement can not work because return keyword is not used 

//console.log("result",addMyNumber(2,null));//this statement can not work because return keyword is not used 

// const userlogedin = function(Username){
//     // console.log(Username,' is logedIn');
//     let result11= `${Username} is logedIn`;
//     return result11;
// }
// const result11= userlogedin("Aziz")
// console.log(result11);

// console.log(userlogedin("Aziz-Ur-Rehman"));
// -----------------------
// const userlogin = function(Username){
//     return`${Username} is logedIn`
// }
// console.log(userlogin("Aziz-Ur-Rehman"));

//    An Other Concept
function myfun(numbera,numberb){
    //  let result = numbera+numberb;//1st method
    //  return result;
    return numbera+numberb;//second method
    //when we can use return statement then we can store it in new variable like result
}
    let result = myfun(10,10);
    // console.log("Result:",result)

//  next method
// function userloggin(Username){
//     if(!Username){
//         console.log("Plz Enter Username");
//         return;
//     }
//     // if(Username===undefined){
//     //     console.log("Plz Enter Username");
//     //     return
//     // }
    
//     return `${Username} just loggin`
//     // return 
// }    
// console.log(userloggin("Imran Khan"));


// function userloggin(Username="Rehman"){ //this value is print when user cannot pass value
//     if(!Username){//this block is not execute
//         console.log("Plz Enter Username");
//         return
//     }
//     return `${Username} just loggin`
//  }    
// console.log(userloggin());
// console.log(userloggin(null));
// console.log(userloggin(""));

//=====================   Pratice logic
 function catsulator(val1,val2,val3,...num){//in this case first 3 value assign to val1,val2,val3 
    return(num)
 }
//  function catsulator(...num){//rest operator is very important at that point
//     return(num)
//  }
//  console.log(catsulator(200,300,400,600));
const resultArray = catsulator(1,2,3,4,5,6,7,8,9);
// resultArray
// console.log(resultArray.length);// now we can access all index of an array and calculate all the prices of card

 

//=======================                                            ====================
//====================== Functions with objects and array in javascript   =============
//=======================                                            ====================
//when we calculate cards price in E-commerace website then build this type of logic
function calculateprice(...num1){
    return(num1)
}
// console.log(calculateprice(1,2,3,4,5));//this is rest operator ... collect all values into an arraythen we can add
//we can pass an object in a function
let student4 = {
    name:"Aziz",
    rollnumber:123
}
function obj(anyobj){
    // console.log(`The Name ${anyobj.name} and Rollnumber is ${anyobj.rollnumber}`);
    
}
// obj(student4)
obj({//direct pass an object
    name:"Aziz",
    rollnumber:123
})

//Array pass in an function
let myarray1=[100,200,300,400];

function array(getarray){
return(getarray[3]);// return values of 3rd index
}
// console.log(array([100,200,300,400]));
// console.log(array(myarray1));

//Array Related interview Questions
//---------- 01 -----------
// console.log(Array(1,2));//output:>[ 1, 2 ]
// console.log(Array(2));// output:>[ <2 empty items> ] becaues we can pass only one integer their for show 2 empty items according to integer value that is passed
// console.log(Array(1));//[ <1 empty item> ]
//--------- 02  -----------------
// const obj12 = {name:"Aziz"}
// const array12 = ['name']
// let resutl =obj12[array12]
// obj[array12] = "Aziz_Mushtaq";
// console.log(obj12);

// const object = {name:'JS'}
// const object1 ={}

// object[object1] ='react js';
// console.log(object);
// console.log(object.name)



//====================                                      ================
//===================  Global and local scope in javascript =================
//====================                                      =================
var d = 4;
if(true){
 let a =1;
 var b = 2;
 const c =3; 
//  console.log("inner value",d);// globel scope
 
}
// console.log(a); // a is not defined
// console.log(b);  // c is define  due to globel scope
// console.log(c); // c is not defined

// Next Level of scope in js
// function one(){
//     const Username = "Aziz";
//     function two (){
//         const website = "youtube";
//         console.log(Username);
        
//     }
//     // console.log(website);
//     two();
// }
// one();
//++++++++++++++++++++++++++++ next level Interesting +++++++++++++++++++++++
// console.log(addone(5));//function call
function addone (num){
    return num +1
}
// NOW >>>>>>>
//  console.log(addtwo(5));//ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function(num){//because function is store in variable
    return num + 2
}
//=====================                                     ====================
//==================   THIS and arrow function in javascript   =================
//=====================                                     ===================


let company = {
    emp :"Azhar",
    empID:123,
    empPay:30000,
   empWork:function(){
    // console.log(`${this.emp} ,1st Employee in Company`);
    // console.log(this);
    
    }
    
}
// console.log(company.empWork());
// company.emp="Ali";
// console.log(company.empWork());
// Object.freeze(company);// lock changes in object
// company.emp="Ali Raza";
// console.log(company.empWork());
// console.log(this);

//point globel object in browser is window
//==============================    ARROW FUNCTION   ============================
//arrow function is like a simple function in both condition log(this) return undefine
//syntex
// let arrowfun=(num1,num2)=>{  // this is explicit return when we use return keyword in function know as explicit
// return num1+num2                 //basics 
// }

// let arrowfun=(num1,num2)=>num1+num2      //implicit return function  writen in same line

// let arrowfun=(num1,num2)=> (num1+num2)      //implicit return function  writen in same line if we can use()paranthesis we can not use return keyword


let arrowfun=()=> ({name:"Ali",rollnumber:123})  //in implicit return function  the use of ()paranthes help to declear the object 
// console.log(arrowfun());
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
//(// named IIFE and written in parathencies ( (parameter)=>{function Defination} )(arguments);
//   function chai(num1,num2) {
//   console.log(num1+num2)
//   }

// )
// (1,2);

//==========================                                             =================
//========================= How does javascript execute code + call stack ================
//==========================                                             =================
//Javasript Execution Context mean How javascript run the code file
// There are Three types of execution context 
// (1)=> Global Execution context 
// (2)=> Functional Execution context 
// (3)=> Eval Execution context 
//=> Javasript execute theprogrm into two Phase
// (1)=> Memory Creation Phase
// (2)=> Execution Phase
//==================  Code Execution Example   =========
const val_1 = 13;
const val_2 = 2;
const addnum=(num1,num2)=>{
return num1+num2
}
console.log(addnum(val_1,val_2));

// when program run first time it creates Global Execution context that is inside the THIS keyword or variable
//(IMPORTANT POINR)=>Javasript is a single Thread Language, in javascript every thing is a process
//
//==========================                          ===================================
//========================= Control flow in javascript  =================================
//==========================                          ====================================
//   Purpose of study this topic to cotrol the execution of code
//conditional statements

// const day = "friday"
// switch (day) {
//     case "monday":
//         console.log("monday");
//         break;
//     case "tuesday":
//         console.log("tuesday");
//         break;jch
//     case "wednesday":
//         console.log("wednesday");
//         break;
//     case "friday":
//         console.log("friday");
//         break;
//     case "saturaday":
//         console.log("saturday");
//         break;
//     default:
//         console.log("sunday");
        
//         break;
// }



// falsy values
//  falsa, 0 , -0, bigInt 0n, "" , null, undefine, NAN  these valuse act as a false value
// const userEmail = "a@aziz123.ai";//true
const userEmail = "";//false
// if (userEmail) {
//     console.log("got values");
    
// }else{
//     console.log("nothing get");
    
// }


// how to check Array is empty or not
 const emptyArray = [];
 if (emptyArray.length===0) {
    // console.log("arrsy is empty");
    
    
 }


// how to check object is empty or not
 const emptyobj = {};
 if (Object.keys(emptyobj).length===0) {// this line change object into Array
    // console.log("Object is empty");
    
    
 }
    // Nullish Coalescing Operator (??):- work on special>> null and undefined
    let val1 ;
//  val1=5 ?? 10;
//  val1=  null ?? 10;
//  val1=  undefined ?? 10;
//  val1=  undefined ?? null ?? 20;
 val1=  undefined ?? 10 ?? 20;
//  console.log(val1);


 //     Ternary operator is a second way of writing if else
//  condition ? true : false 
 let age  = 20;
//  age>=0  ? console.log("adult") : console.log("not adult");


 let result1= age>=30  ? "adult" : "not adult"
//  console.log(result1);


 
 //================                                              =======================
//================  For loop with break and continue in javascript  =======================
//=================                                              ========================
//  for(let i=0 ; i<=10; i++ ){
//     let pakistan = "pakistan"
//     console.log(pakistan)

//  }
//  for (let i = 0; i <= 10; i++) {
//     console.log(`Outer Loop is Equal= ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(i + '*' + j +'='+ i*j);
//         console.log(`${i} * ${j} = ${i*j} `);
        
        
//     }
    
    
//  }
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

let myArray =["aziz" , "ahmad" , "Ali" , 12 ,true ,"pass"]
// for (let ind = 0; ind < myarray.length; ind++) {
//     // console.log(ind[0]);
    
//     const element = myarray[ind];
//     console.log(element);  
// } 
// let arrr = 0;
// while (arrr<myArray.length) {
//     console.log(`${myArray[arrr]}`);
//     arrr++;
// }
let pointer=0;
// while (pointer<=myarray.length) {
//  console.log(myarray[pointer]);
//     pointer = pointer + 1
// }
// console.log(typeof myArray );

// do {
//     console.log(myArray[pointer]);
//     pointer = pointer + 1
// } while (pointer<myArray.length);

//============================                               =======================
//===========================       High Order Array loops    =======================
//============================                               ========================
 //   For Of Loop provide the values in iterations but for in loop provide keys in iterations
 //we can use for in loop on Object andwe can use for of loop and for each loop on an array (for each loop is mostely use )
//  let greeting = "Aziz Ur Rehman "
//  for (const greet of greeting) {
//     if (greet===" ") {
//        console.log("space in string");
//        continue
        
        
//     }
//     console.log(`Letter of Greeting is : ${greet}`);
    
//  }
// const studentName= "Muhammad Ali";
// for (const element of studentName) {
//     if(element== " "){
//        continue
//     }
//     console.log(element);
    
// }

//=============================       MAPS IN JS      =======================
// maps is a key value pair like an object but difference is that it takes only unique values and all values print in same order in which that can be written same valuse are not print again and again 
let map_1 = new Map();
map_1.set('pak', "Pakistan")
map_1.set('in', "India")
map_1.set('fr', "France")
// console.log(map_1);
// console.log( typeof map_1);

//  use of loop on map object  perform same function on object is not work because object is not iteratable in this way like map
for ([keys , value] of map_1) {//[point , value] use to destructure an Array
    // console.log(keys);
    // console.log(value);
    
    
    // console.log(keys, ":-",value);
    
}

let obj11 = {   /// Error :>  obj11 is not iterable
    game1 : 'sanck',
    game2: 'nyc'
}
// const objArray=(Object.entries(obj11));
// const objArray=(Object.values(obj11));
// const objArray=(Object.keys(obj11));
const objArray=(Object.values(obj11));
// console.log(objArray)
// console.log(objArray.length)
// const str_Array = objArray.join();
// console.log(str_Array);


for (const element of objArray) {//for of loop to access values  of object
    // console.log(element);
    
//    const sprArray=element.join(element)
//    console.log(sprArray);
   
    
}

// for (const [key , value] of obj11) {//
// // TypeError: obj11 is not iterable
// //  console.log(key,value);  
// }
//---------------                 for in loop

for (const key  in obj11) { /// for object  we use for in loop
    // console.log(key);
    // console.log(obj11[key]);
    
    
    // console.log(`${key} is a shortcut of ${obj11[key]}`);
    
}
// for (const [key , value] in obj11) {
//  console.log(key,value);  
// }

let arr = ['a','b','c']
// for (const key in arr) {//for in loop
// console.log(key);

//     console.log(arr[key]);// this code access keys of arrays 
    
// }
// for each loop
// const std_Array= ["Aziz","Ali","Usman"]
// std_Array.forEach( (item)=>{//CallBack Function Is Function That Has NO Name (allback function hasno name) 
// console.log(item);

// } )
function printItem (item){
    // console.log(item);
}
// std_Array.forEach(printItem)

// arr.forEach(function(val){
//     console.log(val); // access value of array  
// })

// arr.forEach((val,index,arr)=>{  // use of arrow function
//  console.log(val,index,arr);
 
// })
// another way of doing same process 
function print (item , index , arr){ // for each takes three parameters
    // console.log(`This is a value:${item} This is a index of Array:${ index} List of complete Array: ${arr}`);   
}
// arr.forEach(print)
 
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
// arrObject.forEach( (item)=>{
//  console.log(item);
//  console.log(item["class"]);//access class from object
// //  console.log('In This Object At result is found',item.class);
// //  console.log(`At ${item , index , arr} index of array the value is ${item.class}`);
 
// } )
//==============================                                  =========================
//===========================   Filter map and reduce in javascript  ======================
//==============================                                   ========================
//Filter wors just like a loop But it is a better way to find the items from array
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
// let arra2 =[];
//  arra.forEach( (num) =>{
//     if(num>4){
//         arra2.push(num)
//         console.log(arra2);
        
//     }
// } )
// console.log(arra2);
 

//=====================        map function      ===================================
let arrstore=arra.map( (num)=> {//explicit return >> return keyword must be used because scope {} is used
    return num+10
} )
// console.log(arrstore);//map return values when store in variable


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

// console.log(res);

const array1 = [1, 2, 3, 4];

//         Reduce Method or keyword
 // reducemathod is use when we can add the price  of different  cards
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
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






