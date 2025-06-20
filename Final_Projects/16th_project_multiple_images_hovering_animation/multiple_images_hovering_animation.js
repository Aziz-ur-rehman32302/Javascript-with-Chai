// const elem_1 = document.querySelector("#elem_1");
const elem = document.querySelectorAll(".elem");
const elem_img = document.querySelector(".elem img");


// const elem1_img = document.querySelector("#elem_1 img");

elem.forEach((item) => {
    console.log(item.childNodes[3]);
    
    // item.addEventListener("mousemove",
    //     function(e){
    //         console.log("leave");
    //         //  e.style.left = e.x + "px";
    //         //  e.style.top = e.y + "px";
    //     }
    // )
    
    item.addEventListener("mouseenter",
        function(){
            item.childNodes[3].style.opacity = 1;
        }
    )

    item.addEventListener("mouseleave",
        function(){
            console.log("leave");
            item.childNodes[3].style.opacity = 0;
            
        }
    )
    
    item.addEventListener("mousemove",
        function(dits){
            console.log(dits);
             item.childNodes[3].style.left=dits.x+"px";
            //  item.childNodes[3].style.top=dits.y+"px";
            
        }
    )
    
    
});

// elem_1.addEventListener("mousemove",
//     function(e){
        
//         elem1_img.style.left = e.x + "px";
//         elem1_img.style.top = e.y + "px";
        
//     }
// )

// elem_1.addEventListener("mouseenter",
//     function(e){
        
//         elem1_img.style.opacity = 1;
        
//     }
// )

// elem_1.addEventListener("mouseleave",
//     function(){
        
//         elem1_img.style.opacity = 0;
        
//     }
// )

