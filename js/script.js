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
});