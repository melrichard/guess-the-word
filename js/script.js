//Global variables

const guessedLettersList = document.querySelector(".guessed-letters"); // ul
const guessButton = document.querySelector(".guess"); // guess button
const letterInput = document.querySelector(".letter"); // input by player
const wordInProgress = document.querySelector(".word-in-progress"); // paragraph
const remainingGuesses = document.querySelector(".remaining"); // paragraph with remaining guesses
const remainingGuessesSpan = document.querySelector(".remaining span"); // span with #
const message = document.querySelector(".message"); // message paragraph
const playAgainButton = document.querySelector(".play-again"); //hiden button that appear to play again

const word = "magnolia";
const guessedLetters = [];

//function for placeholders

const placeHolder = function (word){
    const placeHolderLetters = [];
    for (const letter of word){
        console.log(letter);
        placeHolderLetters.push("●");
        };
        wordInProgress.innerText = placeHolderLetters.join("");
};

placeHolder(word);

//Event Listener

guessButton.addEventListener("click", function(e){
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
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
    letter.toUpperCase();
    if (guessedLetters.includes(letter)){
        message.innerText = "You already guessed this letter!";
    } else {
        guessedLetters.push(letter);
        console.log(guessedLetters);
    };
};