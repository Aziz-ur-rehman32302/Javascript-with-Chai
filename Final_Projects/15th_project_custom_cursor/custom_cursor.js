const main = document.querySelector(".main");
const cursor = document.querySelector(".cursor");
console.log(cursor);

// cursor.style.backgroundColor="red";

main.addEventListener("mousemove",
    function(e){
        console.log(e.x);
        cursor.style.left = e.x+"px"
        cursor.style.top = e.y+"px"
        
    }
)


