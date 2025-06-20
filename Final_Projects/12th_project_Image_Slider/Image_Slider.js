const slides = document.querySelectorAll(".slide");


 let counter = 0;
 slides.forEach( (slide,index)=>{
    slide.style.left = `${index*100}%`
}  )

document.querySelector("#Prev").addEventListener("click",
    function(){
        console.log("pre");
        console.log(slides.length);
        console.log(counter);
        if (counter <= 0) {
            counter = slides.length - 1; // last slide pe le jao
        } 
        else {
           counter--; // ek step peeche
        }
            imageSlide()
    }
)
document.querySelector("#Next").addEventListener("click",
    function(){
        console.log("next");
        console.log(slides.length);
        console.log(counter);
        
        if (counter >= slides.length-1){
         counter = 0
        }else{
         counter++;
        }
        imageSlide()
    }
)




const imageSlide = ()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform =`translateX(-${counter * 100}%)`;
        }
    )
}

