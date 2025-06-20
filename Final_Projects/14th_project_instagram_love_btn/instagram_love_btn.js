const img = document.querySelector("#image");
const like_icon = document.querySelector("#like_icon");
const love = document.querySelector("#icon");
// console.log(card);

like_icon.addEventListener("click",
    function(){
        console.log("clicked");
        like_icon.style.color = '#28056d';
        like_icon.style.backgroundColor = 'green';
        // like_icon.style.height = '40px';
        // like_icon.style.width = '40px';
        like_icon.style.borderRadius = '40px';
        like_icon.style.padding = '4px';
        // like_icon.style.transform =" scale(2)";
        
        love.style.transform ="translate(-50% ,-50% ) scale(1)";
        love.style.opacity =0.8;
        
        setTimeout(() => {
            if (love.getAttribute('love-clicked') === 'true') {
             
                // like_icon.style.transform =" scale(1)";


                love.style.opacity =0;
                love.style.transform ="translate(-50% ,-50% ) scale(0)";
           }
    
        }, 1000);

    }
)

