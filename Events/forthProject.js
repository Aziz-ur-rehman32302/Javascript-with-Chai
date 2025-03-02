const  randomColor = function(){
    const hex = '0123456789abcdef';
   let color = '#'
    for (let i = 0; i < 6; i++) {
        color +=hex[Math.floor(Math.random()*16)]
        
    }
    return color
}
// console.log(Math.floor(Math.random()*16));
// console.log(randomColor());
let stop;
const startchangingColor = function(){

    if (!stop) {
        stop = setInterval( ()=>{
               document.body.style.backgroundColor=randomColor()
        
         },1000 )
    }

    //===2nd method
    const changeBG= function(){
        document.body.style.backgroundColor=randomColor()
    }
   
    //  stop = setInterval( ()=>{
    //     document.body.style.backgroundColor=randomColor()

    // },1000 )
    
     
}


const stopchangingColor = function(){
     clearInterval(stop)
     stop=null
}

document.querySelector('#start').addEventListener('click',startchangingColor)
document.querySelector('#stop').addEventListener('click',stopchangingColor)
