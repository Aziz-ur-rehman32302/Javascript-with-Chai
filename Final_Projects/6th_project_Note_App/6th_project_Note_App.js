const addbtn = document.querySelector(".addbtn");
const main = document.querySelector(".main");
// Task number one get button referance and apply click event to perform task on button 
addbtn.addEventListener("click",
    function(){
        addNote(); // on button click appear a note box on page
        // alert()
    });

    //=========================    addNote Function  start       =========================

    const addNote =( text="")=>{
        const note = document.createElement("div");
        // note.classList.add("note");//Ek ya zyada classes add karni ho (overwrite na ho)
        note.className="note";//Sirf ek hi class set karni ho (overwrite acceptable ho)
        note.innerHTML=`
           <div class="tool">
                <i id="Save" title="Save Now" class=" icon fa-solid fa-floppy-disk"></i>
                <i id="Delete" title="Delete" class=" icon fa-solid fa-trash"></i>
            </div>
            <textarea  id="textBox">${text}</textarea>
        `;

        main.appendChild(note);
         saveNotes();


        //=========  Apply method to Delete the  Note when user click on Delete Button  =====

        note.querySelector('#Delete').addEventListener("click",
            function () {
                note.remove();
                 saveNotes();
            }
        );

        //=========  Apply method to Save the  Note when user click on Save Button  =====
 
        note.querySelector('#Save').addEventListener("click",
            function () {
                saveNotes();
            }
        );

        //=========  Apply method is used for Auto Save the  Note when user write text  =====

            note.querySelector("textarea").addEventListener("focusout",
            function () {
                saveNotes();
            });

    } //=============          addNote Function End            =========================


    //==============           SaveNotes  Function  Start     ==========================

    const saveNotes = ()=>{
        // const notes = document.querySelectorAll('.note textarea');
        const nodelist = document.querySelectorAll('.note textarea');

        // console.log(nodelist);
        // console.log(typeof nodelist);
        // console.log(Array.isArray(nodelist));
        
        const data = [];

        // console.log( data);
        // console.log(typeof data);
        // console.log(Array.isArray(data) );
        
        Array.from(nodelist).forEach( (note)=>{
            data.push(note.value)
            
            
        } )
        if (data.length === 0) {
            localStorage.removeItem("notes")
            
        }
        // localStorage.setItem("notes",JSON.stringify(data));
        else{
            localStorage.setItem("notes",JSON.stringify(data));
        }
    }//==============           SaveNotes  Function  End     ==========================




    (
        function(){
            const locdata = JSON.parse(localStorage.getItem("notes"));
            // console.log(locdata);
            // locdata.forEach( (locdata)=>{
            //     addNote(locdata)
            // } )

            if (locdata === null) {
                addNote()
            }
            else{
                locdata.forEach(
                    (locdata)=>{
                       addNote(locdata);
                    } 
                )
            }

            //  if (locdata.length === 0){
            //     localStorage.removeItem("notes");
            // }else{
            //     addNote();
            // }


            


           
            
            
    //         // console.log(isnotes);
           
        }

    )()
