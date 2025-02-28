
    let randumNum=(parseInt(Math.random()*100+1));
    const submitButton = document.querySelector('#submit');
    const userInput = document.querySelector('#guessfield');
    const guessSlot = document.querySelector('.guesses');
    const Remaining = document.querySelector('.lastresult');
    const low_Hi = document.querySelector('.lowOrHi');
    const start_Over = document.querySelector('.result_portation');

    const p = document.createElement('p');

    let preValue = [];
    let numGuess = 2;
    let playGame =true;

    if (playGame) {
        submitButton.addEventListener( 'click', (e)=>{
            e.preventDefault();//use to stop vales to access
            //parseInt Provide Value Into Integer
           const guess = parseInt(userInput.value) 
           console.log(guess);
           validateGuess(guess);
                 
        } )
        
    }

    function validateGuess(guess){
        //this is use to check value is between 1 to 100 or not 
        if (isNaN(guess)) {
            alert("Please Enter a Valid Number")
        }else if(guess < 1){
            alert("Please Enter a Number Greater Then 1")
        }
        else if(guess > 100){
            alert("Please Enter a Number less Then 101")
        }else {
            preValue.push(guess)
            // Now Check The Number Of Guess That User Gess 
            if (numGuess === 11) {
                //if condition is false the Display Guess That User Is Guessed
                displayguess(guess);
                displayMessage(`Game Over,Random Number Was ${randumNum}`);
                endGame();
            }else{
                displayguess(guess);
                checkGuess(guess);
                
            }
        }

        }

    function checkGuess(guess){
        // this check the value if it equal to guess value then display winner message with the help  
        if (guess===randumNum) {
            displayMessage(`Congratulation,You Win This Game`);
            endGame();
        }else if(guess<randumNum){
            displayMessage(`Number Is Too Low`);
        } else if(guess>randumNum){
            displayMessage(`Number Is Too Heigh`);
        }
    } 

    function displayguess(guess){
        userInput.value=" ";
        guessSlot.innerHTML += `${guess}    `
        numGuess++;
        Remaining.innerHTML=`${12-numGuess}`
    } 

    function displayMessage(guess){
        low_Hi.innerHTML=`<h2>${guess}</h2>`
    } 
    
    function endGame(){
        userInput.value=" ";
        userInput.setAttribute('disabled', ' ');
        p.classList.add('button');
        p.style.backgroundColor="orange"
        p.style.textAlign="center";
        p.style.width="200px";
        p.style.borderRadius="15px"
        p.style.marginLeft="40px"
        p.style.marginTop="20px"
        p.style.marginBottom="20px"
        p.style.cursor="pointer"
    
        p.innerHTML=`<h2 id='newGame'>New Game</h2>`
        start_Over.appendChild(p);
        playGame= false;
        newGame();
    }
    function newGame(){
        const newGameBtn=document.querySelector('#newGame');
        newGameBtn.addEventListener('click' ,function(){
            randumNum = parseInt(Math.random()*100+1);
            preValue = [];
            numGuess = 1;
            guessSlot.innerHTML = ' ';
            Remaining.innerHTML = `${11-numGuess}`;
            userInput.removeAttribute('disabled');
            start_Over.removeChild(p);
            playGame=true;
        })
    }


