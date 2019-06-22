// Game function
/* 
- Player must guess a numberr between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
-Notify th player of the correct answer if loose
- Let player choose to play again
*/

// Game values

let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Element
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessbtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

    // Assign UI min and max
    minNum.textContent = min;
    maxNum.textContent = max;

    // Play Again event
    game.addEventListener('mousedown', function(e){
        if(e.target.className === 'btn play-again'){
            window.location.reload();
        }
    });

    // Listen for guess 
    guessbtn.addEventListener('click', function(){
        let guess = parseInt(guessInput.value);

        // Validate
        if(isNaN(guess) || guess < min || guess > max ){
            setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        }


        // Check if won
        if(guess === winningNum){
            // Dissable input
            // guessInput.disabled = true;
            // Change border color
            // guessInput.style.borderColor = 'pink';
            // setMessage(`${winningNum} is Correct, You Win!`, 'pink');
            gameOver(true, `${winningNum} is Correct, You Win`);

        } else {
            // Wrong
            guessesLeft -= 1;

            if(guessesLeft === 0 || guessesLeft <= 0){
                // game over - lost
                gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
            } else {
                // Game continues - answer wrong

                // Change the border color
                guessInput.style.borderColor = 'red';
                // Clear Input
                guessInput.value = '';
                // tell user its the wrong number
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
            }

            
        }

    });

    function gameOver(won, msg) {
        let color;

        won === true ? color = 'green' : color = 'red'; //Ternary operator (two condition)
        // Disable Input
        guessInput.disabled = true;
        // Change border color
        guessInput.style.borderColor = 'green';
        // Set text color
        message.style.color = color;
        // Set Message
        setMessage(msg);
        // Play again
        guessbtn.value ='Play Again';
        guessbtn.className += ' play-again';
    }
    // Get winning number
function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);

}

    // Set message 
    function setMessage(msg, color){
        message.style.color = color;
        message.textContent = msg;
    }
