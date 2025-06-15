const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "1234567890";
const symbolset = "~!@#$%^&*()_+/";

// selectors
const passBox = document.getElementById("pass_box");
const totalLetter = document.getElementById("total_char");
const upperCase = document.getElementById("upper_case");
const lowerCase = document.getElementById("lower_case");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const button = document.getElementById("btn");


const getrandonDate = (dataset)=>{
    return dataset[Math.floor( ( Math.random()) * dataset.length ) ]
   
}
// setInterval( ()=>{ //run getrandomData every second
//     console.log(getrandonDate(lowerset));
// },1000 )

const generatepassword  = (password= "")=>{

    if (upperCase.checked) {
     password += getrandonDate(upperset);

    }

    if (lowerCase.checked) {
     password += getrandonDate(lowerset);
     
    }

    if (numbers.checked) {
     password += getrandonDate(numberset);
     
    }

    if (symbols.checked) {
     password += getrandonDate(symbolset);
     
    }

    // generatepassword();

    if (password.length < totalLetter.value) {
        return generatepassword(password)// this is a call of recursive funtion
        
    }



        passBox.innerText= turncatestring(password,totalLetter.value);
        // console.log( turncatestring(password,totalLetter.value));
};

button.addEventListener( 'click',
    function(){
        generatepassword();
        //  console.log("btn clicked")
    });

    // function use to trim the large string 

     function turncatestring (str,num){
        if (str.length > num) {
           let substr = str.substring(0, num);
            return substr
            
        }
        else{
            return str;
        }
     }


