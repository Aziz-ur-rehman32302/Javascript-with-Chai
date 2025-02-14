//###############  Let, const and var ki kahani  #################
const stdId = '123';
let Name = 'Aziz'
var Class = '5th'// var is not use because problem occure dur to scope and functional scope
rollnumber = 'abc123';// it is not a best way to write a code
// stdId = '1234' //nor allowed
console.log(stdId);
let accountState // variable decliration and its output is undefined
accountState = 'jazz cash'
console.table([Name,Class,stdId,rollnumber,accountState])
 //   Second lecture of basics
'use strict'// all code use as a newer version;
//#####################  Data type in JS  ###############################################
// Their are two type of data types in js 
// (1):premative Data Type or Call By Values
// (2):non-premative Data Type  or Reference Type DataType
//(1)=>[number,bigint,string,boolean,null=>standalone value,undefine,symbol]
//(2)=>[object, function]
console.log(typeof 'aziz');
console.log(typeof null);
console.log(typeof undefined);
//*********************     Datatype conversion confusion     ************************ */
// as topic ko study kernayka ya mean ha ka hum kisi bhi data type ko change ker saktay hai apeni marzi ka mutabik jub zarorat ho gi
///////////////////mmm   Numbers in js   ///////////////
let score = 1
let score_2 = '33abc'
// let score_2 = null => this show 0 in result (agar hum n ko temperature sa compare keray ga to ya issue keray gi as leya ya mind ma rakhena lazim ha k backend sa kya value return ho rei ha)
// let score_2 = true
// let score_2 = undefined
let scoreRes = Number(score_2)// this line convert string into number 
console.log(typeof score_2);
console.log(typeof scoreRes);
console.log(scoreRes);// but converted line show the NaN in result

let booleanres = Boolean(score)
let stringres = String(score)
console.log(stringres);
console.log(booleanres);// its mean 1 in boolean is equal to true
//1=>true,0=>false,
// ""=> false,
// "aziz"=> true
console.log(typeof stringres);
console.log(typeof booleanres);

//###############   Conversion in Javascript
console.log("2" > 2);
console.log("2" == 2);
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);//this line contain conversion issue
console.log(undefined ==0);
//      Strick checking
console.log("null" === 0);// conversion is not perform due to strick checking
//      Symbol in JS
const Id =  Symbol(123);
const otherId = Symbol(123);
console.table([Id,otherId]);
console.log(Id==otherId);



