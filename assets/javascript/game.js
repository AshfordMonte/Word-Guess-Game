 // Initializes variable for tallying wins
var wins = 0;

// Array that contains possible word choices
var wordChoices = ["LEDZEPPELIN", "ROLLINGSTONES", "PINKFLOYD", "BLACKSABBATH", "DEEPPURPLE", "THEWHO", "YES", "GENESIS"];

// Selects a random word out of the array
var currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
console.log(currentWord);

// Initializes right array with amount of underscores equivalent to number of letters in hidden word
var rightArray = new Array(currentWord.length);
for (let i = 0; i < currentWord.length; i++) {
  rightArray[i] = "_";
}
console.log(rightArray);

// Initializes array that stores incorrect letters
var wrongArray = new Array(26);
// Initalizes index counter to keep track of values in wrong array
var j = 0;

// Initializes the number of incorrect guesses allowed
var guessesAllowed = 12;

// Function that initially runs once the webpage has loaded
function gameSetup() {
  document.getElementById("currentWord").textContent = rightArray.join(" ");
  document.getElementById("guessRemain").textContent = guessesAllowed;
  document.getElementById("wins").textContent = wins;
  console.log("Function called");
}

// Main function that will reset the game once the correct word has been typed, or if the user loses
function gameReset() {
  // Checks to insure that the same word is not chosen consecutively
  var previousWord = currentWord;
  while (previousWord === currentWord) {
    currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
  }

  // Refills right array with underscores equivalent to letters in current word
  rightArray = new Array(currentWord.length);
  for (let i = 0; i < currentWord.length; i++) {
    rightArray[i] = "_";
  }
  console.log(rightArray);
  console.log(currentWord);
  // Clears text elements and replaces them with updated values resetting the game
  document.getElementById("currentWord").textContent = " ";
  document.getElementById("currentWord").textContent = rightArray.join(" ");
  document.getElementById("wins").textContent = wins;
  console.log("Reset function called");
  guessesAllowed = 12;
  wrongArray = new Array(26);
  document.getElementById("currentWord").textContent = " ";
  document.getElementById("lettersGuessed").textContent = wrongArray.join(" ");
  document.getElementById("guessRemain").textContent = guessesAllowed;

}

// Function that is called each time a key is pressed
document.onkeyup = function (event) {

  // Converts key input from user into a capital letter to compare with array
  var letterGuessedLower = event.key;
  var letterGuessed = letterGuessedLower.toUpperCase();
  // Initializes boolean that will determine if a correct letter was found
  var correctLetter = false;

  // Loop that checks to see if if correct letter is found and if so the letter is inserted into right array
  for (let i = 0; i < currentWord.length; i++) {
    if (letterGuessed === currentWord[i]) {
      rightArray[i] = currentWord[i];
      correctLetter = true;
    }
  }

  // If a correct letter is not typed then the letter will be stored in the wrong array and a guess allowed is deducted
  if (!correctLetter) {
    if(!wrongArray.includes(letterGuessed)){
      wrongArray[j] = letterGuessed;
      guessesAllowed--;
    }
  }
  j++;

  // Outputs updated arrays and guesses allowed
  document.getElementById("currentWord").textContent = rightArray.join(" ");
  document.getElementById("lettersGuessed").textContent = wrongArray.join(" ");
  document.getElementById("guessRemain").textContent = guessesAllowed;

  // If no more guesses then game resets
  if (guessesAllowed === 0) {
    gameReset();
  }
  
  // Checks to see if the word has been completed and if so game resets and win is tallied
  var incompleteWord = false;
  for (let i = 0; i < rightArray.length; i++) {

    if (rightArray[i] === "_") {
      incompleteWord = true;
    }
  }

  if (incompleteWord === false) {
    wins++;
    gameReset();
  }
};

// Function to play audio and show image

function bandShowcase(bandName){

}
