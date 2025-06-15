const questions = [
    {
        'que':'which of the following is a markup language?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JS',
        'd' : 'PHP',
        'correct' : 'a'
    },
    {
        'que' : 'what year was the JavaScript Launched?',
        'a' : '1996',
        'b' : '1995',
        'c' : '1994',
        'd' : 'none of the above',
        'correct' : 'b'
    }
];

let index = 0;
const totle = questions.length;
let Right = 0,
    Wrong = 0;
const boxque = document.getElementById("questions");
const optioninputs = document.querySelectorAll(".option");
const button=document.getElementById("btn");
const loadquestion = ()=>{
    if (index === totle) {
       return endQuiz();
    }
    reset();
    
    let data = questions[index];
    // console.log(data);
    boxque.innerText = `${index+1}) ${data.que}`
    optioninputs[0].nextElementSibling.innerText = data.a
    optioninputs[1].nextElementSibling.innerText = data.b
    optioninputs[2].nextElementSibling.innerText = data.c
    optioninputs[3].nextElementSibling.innerText = data.d

    
    
    button.addEventListener('click',submitquiz )

    function submitquiz(){
        // console.log("Index:", index);
        // console.log("Questions Length:", questions.length);
        // console.log("Question at index:", questions[index]);
        let data = questions[index];

       if (index >= questions.length) {
           alert("Quiz Completed");
        }
        const ans = getAnswer();
        // console.log(ans, data.correct);
        // console.log(data.correct);
        
            if (!ans) {
            alert("Please select an option!");
            return;
        }


        if (ans == data.correct){
            Right++;
        }else
        {
            Wrong++;
        }
        index++;
        loadquestion();
        return;
    }
    // submitquiz()


    function getAnswer(){
        let answer;
          optioninputs.forEach((input) => {
         if (input.checked) {
            answer= input.value;
            // console.log(input.value);  // selected answer show karega
        }
    });
    return answer;

    }
    
    
   function reset(){
    optioninputs.forEach((input) => {
        input.checked = false;
    });
   }
   

   function endQuiz(){
    document.querySelector(".main").innerHTML=`
    
    <h1>
     Thanks For Quiz<hr>
     ${Right} / ${totle} Are Correct
    </h1>

    
    `
   }

}
// inital call
loadquestion();
