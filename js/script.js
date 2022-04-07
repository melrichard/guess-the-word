// global variables
const guessedLettersList = document.querySelector(".guessed-letters"); //list of guessed letters
const button = document.querySelector(".guess"); //guess button
const typedLetter = document.querySelector(".letter"); //letter typed in box
const wordInProgress = document.querySelector(".word-in-progress"); // empty paragraphe where letter will appear
const remainingGuesses = document.querySelector(".remaining p"); //paragraph
const numGuesses = document.querySelector(".remaining span"); //span
const message = document.querySelector(".message"); //empty p with message when letter is guessed
const playAgainButton = document.querySelector(".play-again"); //appear to prompt player

const word = "magnolia"; //test word
const guessedLetters = [];



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

    message.innerText = "";

    const guess = typedLetter.value; // the value is the typed letter value 
    //console.log(guess); 
    
    const goodGuess = playerInput(guess);
    
    if(goodGuess){
        makeGuess(guess);
    };

    typedLetter.value = ""; // empty the input after
  
     
});

// function to check player's input
const playerInput = function(input){
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length === 0){ //is the input empty?
        message.innerText = "Please enter a letter!";
    } 
    else if (input.length >1) { //More than one letter
        message.innerText = "Please type one letter at a time!"
    } 
    else if (!input.match(acceptedLetter)){ //enter a character that doesn't match the reg expression
        message.innerText = "Please enter a letter from A to Z."
    }
     else {
        return input
    };    
};

//function to capture input
const makeGuess = function(guess){
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)){
        message.innerHTML = "You already guessed this letter, please try again!";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters)
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
}

//function to show the guesses letters for guessedLettersList

const showGuessedLetters = function () {
    //empty the ul list
    guessedLettersList.innerHTML = "";

    //create a new list
    for (const letter of guessedLetters){
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersList.append(li);
    }
};

//function to update word in progress
const updateWordInProgress = function (guessedLetters){
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    //console.log(wordArray);
    const revealWord = [];
    for (const letter of wordArray){
       if (guessedLetters.includes(letter)){
          revealWord.push(letter.toUpperCase());
       } else {revealWord.push("●");}
    }
    
    wordInProgress.innerText = revealWord.join(""); //creates a string out of each element of the array

    checkWin();
};

//check if win

const checkWin = function (){
    if (word.toUpperCase() === wordInProgress.innerText){
        message.classList.add(".win");
        message.innerHTML = `<p class = "highlight"> You guessed the correct word! Congrats!</p>`;
    }
}