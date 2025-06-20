const arr = [
  {
    dp: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
    story: "https://picsum.photos/300/500?random=11"
  },
  {
    dp: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
    story: "https://picsum.photos/300/500?random=12"
  },
  {
    dp: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
    story: "https://picsum.photos/300/500?random=13"
  },
  {
    dp: "https://xsgames.co/randomusers/assets/avatars/female/4.jpg",
    story: "https://picsum.photos/300/500?random=14"
  },
  {
    dp: "https://xsgames.co/randomusers/assets/avatars/male/5.jpg",
    story: "https://picsum.photos/300/500?random=15"
  }
];

const storiesDiv = document.querySelector(".stories");
const fullscreen = document.querySelector(".fullscreen")

var storyBox = "";
 arr.forEach((element ,indx) => {
    // console.log(element);
    storyBox += `
            <div class="story">
                <img id="${indx}" src="${element.dp}" alt="">
            </div>`
    
    
});
// console.log(storyBox);
storiesDiv.innerHTML = storyBox;

storiesDiv.addEventListener("click",function(details){
    console.log(arr[details.target.id].story);
    fullscreen.style.display = "block";
    fullscreen.innerHTML=`
         <img  src="${arr[details.target.id].story}" alt="">
    `;
    

        setTimeout( function(){
        fullscreen.style.display = "none";
        },3000 )




})


