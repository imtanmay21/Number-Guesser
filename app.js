// UI Vars
const input = document.getElementById('number-input');
const guessBtn = document.getElementById('guess-btn');
const playBtn = document.getElementById('play-btn');
const message = document.getElementById('message');

// JS vars
let counter = 0
let randomNumber = generateNumber();
// Load event Listeners
loadAllEventListeners()

// Declaring load event listners
function loadAllEventListeners() {

    // Clicking guess button
    guessBtn.addEventListener('click', guessNumber);

    // Clicking Play again
    playBtn.addEventListener('click', playAgain);

}



// Guess Number
function guessNumber() {
    console.log(randomNumber);
    let inputVal = input.value;
    if (counter > 0) {
        if (inputVal == randomNumber) {
            console.log('correct Value')
            message.innerHTML = 'Correct Guess!'
            message.className = 'correct';
            playBtn.classList.remove('not-active');
            guessBtn.classList.add('not-active');
            counter--;
        } else {
            console.log('Incorrect Value');
            input.value = '';
            message.innerHTML = 'Wrong Guess!'
            message.className = 'wrong';
            counter--;
            if (counter == 0) {
                message.innerHTML += ` The number was ${randomNumber}`;
                playBtn.classList.remove('not-active');
                guessBtn.classList.add('not-active');
            }

        }
    }
}

// Play Again
function playAgain() {
    randomNumber = generateNumber();
    input.value = '';
    message.innerHTML = '';
    playBtn.classList.add('not-active');
    guessBtn.classList.remove('not-active');
}

// Generate random number
function generateNumber() {
    counter = 3;
    let number = Math.floor(Math.random() * 10 + 1);
    return number;
}