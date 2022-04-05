// global variables
const guessedLetters = document.querySelector(".guessed-letters"); //list of letters
const button = document.querySelector(".guess"); //guess button
const typedLetter = document.querySelector(".letter"); //letter typed in box
const wordInProgress = document.querySelector(".word-in-progress"); // empty paragraphe where letter will appear
const remainingGuesses = document.querySelector(".remaining p"); //paragraph
const numGuesses = document.querySelector(".remaining span"); //span
const messages = document.querySelector(".message"); //empty p with message when letter is guessed
const playAgainButton = document.querySelector(".play-again"); //appear to prompt player

const word = "magnolia"; //test word



//adding placeholders
//when I call placeholder, I want to create an array, for each letter of the word I want to log out that letter,
//and push a circle element in my array. Once I have looped over all the letters, I want to change the text in the paragraph
//with the placeHolder array elements joined and then call my 
const placeholder = function(word){
    const placeHolderLetter = [];
    for (const letter of word){
        console.log(letter);
        placeHolderLetter.push("●")}; 
    wordInProgress.innerText = placeHolderLetter.join("");
};

placeholder(word);

// Event Listener Button 

button.addEventListener("click", function(e){
    e.preventDefault(); //To prevent from reloading page 

    const guess = typedLetter.value; // the value is the typed letter value 
    console.log(guess); 
    typedLetter.value = ""; // empty the input after
});