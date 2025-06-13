const button =document.querySelector("#btn");

// const getColor =() => {
//  const hex = "0123456789abcdef";
//    let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color +=hex[Math.floor(Math.random()*16)]
        
//     }
//     document.body.style.backgroundColor = color;
//     button.style.backgroundColor = color;
//     document.getElementById("color_code").innerText= color;
   
// }
// button=addEventListener("click",  getColor);
//getColor();
//---------------  second method to generate rendom color code   --------

const getColor2 = ()=>{
    const randomNumber = Math.floor(Math.random()*16777215);
    // console.log(randomNumber);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomCode , randomNumber);
    document.body.style.backgroundColor = randomCode;
    button.style.backgroundColor = randomCode;
    document.getElementById("color_code").innerText= randomCode;
    navigator.clipboard.writeText(randomCode);//this line help to copy the random code on the clipboard
      
}
button.addEventListener("click",getColor2)
getColor2();// initial call

