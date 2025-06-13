const endDate = "15 August 2025 2:30 PM";
// const endDate = "13 jun 2025 6:46 PM";
document.getElementById("lastDate").textContent=endDate;
const inputs = document.querySelectorAll("input");
const heading= document.getElementById("heading");
function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = end - now //calculate the difference in millisecond 
    console.log(diff);

    // if (diff < 0) {
    //     return;
    // }
    if (diff <= 0) {
        alert("Time is over!");
        return; 
        //    clearInterval(clock()); // agar aap setInterval use kar rahe hain to yeh zaroori hai
   }

    //----------  calculate days
    const millisecondsPerDay = 1000 * 60 * 60 * 24;//calculate the millisecond in a day
    const days = Math.floor(diff/millisecondsPerDay)
    // console.log(days);
    inputs[0].value = days

   //---------     1 hour = 1000ms * 60s * 60min
   const millisecondperhours = 1000 * 60 *60;
   const hours = Math.floor( diff / millisecondperhours )%24;
   //--------------                 second method
// const remainingAfterDays =  diff % millisecondsPerDay ;
// const hours = Math.floor( remainingAfterDays / millisecondperhours );
   console.log(hours);
   inputs[1].value = hours
   //--------------------     Now Calculate Remaining Minutes      -------------------------

   const millisecondperminutes = 1000 * 60; 
   const Minutes = Math.floor(diff/millisecondperminutes)%60;
   console.log(Minutes);
    inputs[2].value = Minutes
   
   //--------------------     Now Calculate Remaining Minutes      -------------------------

   const millisecondper = 1000 ; 
   const second = Math.floor(diff/millisecondper)%60;
   console.log(second);
   inputs[3].value = second

}   

clock();

setInterval( ()=>{//update clock function after one second
    clock();
}, 1000 )


