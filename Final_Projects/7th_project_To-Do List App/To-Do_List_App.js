const item = document.querySelector(".item")
const to_do_box = document.querySelector(".to_do_box");
const to_do_ul = document.querySelector("#to_do_ul");
 
item.addEventListener('keyup',
    function(event){
    if (event.key == 'Enter') {
        addtodo(this.value);
       
      
        
        // localStorage.setItem("data_of_ToDo",this.value);
        saveToLocalStorage(this.value)
        this.value =""
         
        
        
        
    }
    
})

//===========  special function use to save the user string data into Array of String  =====
//=======================         Function Start        =====================================
function saveToLocalStorage(newItem) {
  // 1. Pehle se jo data hoga usay uthao, agar nahi hai to khali array lo
  const existingData = JSON.parse(localStorage.getItem("myDataArray")) || [];

  // 2. Naya data push karo
  existingData.push(newItem);

  // 3. LocalStorage mein wapis save karo
  localStorage.setItem("myDataArray", JSON.stringify(existingData));
}
//====================        Function  saveToLocalStorage End       =====================================

//==================            Add To Do function Start           ==========================
const addtodo = (item)=>{
    const listitem = document.createElement("li");
    listitem.innerHTML=`
    ${item}<i id="close" class=" fa-solid fa-xmark"></i>
    `;
    

    to_do_ul.appendChild(listitem)

    listitem.addEventListener("click",
        function(){
            this.classList.toggle("done")
           
        }
    )
    let i=0;
    console.log("index=",i);
    
    listitem.querySelector("#close").addEventListener('click',

        function(inde){
            listitem.remove();
            deleteItemAtIndex(inde)
            // // addtodo();
            function deleteItemAtIndex  (index) {
                // 1. Get array from localStorage
                const data = JSON.parse(localStorage.getItem("myDataArray")) || [];

                // 2. Remove item at specific index
                data.splice(index, 1); // this removes that one item

                // 3. Save updated array back
                localStorage.setItem("myDataArray", JSON.stringify(data));
            }

            
        }
    )
}



//==================            Add To Do function End           ==========================

//=================           self calling function Start          ======================

( 
    function(){
      const locdata = JSON.parse(localStorage.getItem("myDataArray"));
      console.log(locdata);
      locdata.forEach(  (note) => {
        addtodo(note)
      });
      
    }
)()



//=================           self calling function End            ======================
