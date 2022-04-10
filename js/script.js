//Global variables

const guessedLettersList = document.querySelector(".guessed-letters"); // ul
const guessButton = document.querySelector(".guess"); // guess button
const letterInput = document.querySelector(".letter"); // input by player
const wordInProgress = document.querySelector(".word-in-progress"); // paragraph
const remainingGuessesElement = document.querySelector(".remaining"); // paragraph with remaining guesses
const remainingGuessesSpan = document.querySelector(".remaining span"); // span with #
const message = document.querySelector(".message"); // message paragraph
const playAgainButton = document.querySelector(".play-again"); //hiden button that appear to play again

let word = "magnolia";
let guessedLetters = [];
let remainingGuesses = 8;

//Fetch words from file
const getWord = async function(){
    const response = await fetch (
        "https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text();
    //console.log(words);
    const wordArray = words.split("\n");
    //console.log(wordArray);
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    placeHolder(word);
};

getWord()


//function for placeholders

const placeHolder = function (word){
    const placeHolderLetters = [];
    for (const letter of word){
        console.log(letter);
        placeHolderLetters.push("●");
        };
        wordInProgress.innerText = placeHolderLetters.join("");
};

//Event Listener

guessButton.addEventListener("click", function(e){
    e.preventDefault();
    const guess = letterInput.value;
    //console.log(guess);
    letterInput.value = "";
    //empty message
    message.innerText = "";

    const goodGuess = playerInput (guess);
    
    if (goodGuess) {
        makeGuess(guess);
    };
    
});

//validate the input is a letter
const playerInput = function(input){
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0){
        //input is empty
        message.innerText = "Please enter a letter.";
    }
    else if (input.length > 1){
        //more than one letter
        message.innerText = "Please enter only 1 letter at a time!";
    }
    else if (!input.match(acceptedLetter)){
       message.innerText = "Please enter a letter from a to z!";
    } else {return input};
};

//capture the input

const makeGuess = function (letter){
    letter = letter.toUpperCase();
    if (guessedLetters.includes(letter)){
        message.innerText = "You already guessed this letter!";
    } else {
        guessedLetters.push(letter);
        console.log(guessedLetters);
        showGuessedLetters();
        remainingGuessesCount(letter);
        updateWordInProgress(guessedLetters);
    }
};

//function to show guessed letters
const showGuessedLetters = function () {
    guessedLettersList.innerHTML = ""; //empty the ul
    for (const letter of guessedLetters) {
        const listItem = document.createElement("li");
        listItem.innerText = letter;
        guessedLettersList.append(listItem); 
    }
};

//function to update word in progress

const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray){ 
    if (guessedLetters.includes(letter)){
        revealWord.push(letter.toUpperCase());
    } else {
        revealWord.push("●")}
    };
    wordInProgress.innerText=revealWord.join("");
    checkWin();
};

//function to check if player won
const checkWin = function(){
    if (word.toUpperCase () === wordInProgress.innerText){
        message.classList.add("win");
        message.innerHTML = '<p class="highlight">You guessed correct the word! Congrats!</p>';
        startOver();
    };
};

//function to count remainig guesses
const remainingGuessesCount = function(guess){
    const wordUpper = word.toUpperCase();
    if (!wordUpper.includes(guess)){
        message.innerText = `Sorry, the word has no letter ${guess}`;
        remainingGuesses -= 1;
        ;
    } else {
        message.innerText = `Good Guess! The word has the letter ${guess}.`;
    };

    if (remainingGuesses === 0) {
        message.innerText = `Game Over! The word was ${wordUpper}`;
        startOver();
    } 
    else if (remainingGuesses === 1){
        remainingGuessesSpan.innerText = `only ${remainingGuesses} guess`;
    } 
    else {
        remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
    };
};

//start over
const startOver = function () {
    guessButton.classList.add ("hide");
    remainingGuessesElement.classList.add("hide");
    guessedLettersList.classList.add ("hide");
    playAgainButton.classList.remove ("hide");
};

//click event for play button

playAgainButton.addEventListener("click", function (){
    //reset values
    message.classList.remove("win");
    message.innerText = "";
    guessedLettersList.innerHTML = "";
    remainingGuesses = 8;
    guessedLetters = [];
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;

    
    //reset the UI elements
    guessButton.classList.remove ("hide");
    remainingGuessesElement.classList.remove("hide");
    guessedLettersList.classList.remove ("hide");
    playAgainButton.classList.add ("hide");
    
    // pull new word
    getWord();
    
});