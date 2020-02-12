var wins = 0;
var wordChoices = ["LEDZEPPELIN", "ROLLINGSTONES", "PINKFLOYD", "BLACKSABBATH", "DEEPPURPLE", "THEWHO", "YES", "GENESIS"];

var currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
console.log(currentWord);

var rightArray = new Array(currentWord.length);
for (let i = 0; i < currentWord.length; i++) {
  rightArray[i] = "_";
}
console.log(rightArray);

var wrongArray = new Array(26);
var j = 0;

var guessesAllowed = 12;


function gameSetup(){
  document.getElementById("currentWord").textContent = rightArray.join(" ");
  document.getElementById("guessRemain").textContent = guessesAllowed;
  document.getElementById("wins").textContent = wins;
  console.log("Function called");
}


function gameReset(){
  var previousWord = currentWord;
  while(previousWord === currentWord){
  currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
  }

  rightArray = new Array(currentWord.length);
  for (let i = 0; i < currentWord.length; i++) {
    rightArray[i] = "_";
  }
  console.log(rightArray);
  console.log(currentWord);
  document.getElementById("currentWord").textContent = "                                                ";
  document.getElementById("currentWord").textContent = rightArray.join(" ");
  document.getElementById("guessRemain").textContent = guessesAllowed;
  document.getElementById("wins").textContent = wins;
  console.log("Reset function called");
  guessesAllowed = 12;
}


document.onkeyup = function (event) {

  var letterGuessedLower = event.key;
  var letterGuessed = letterGuessedLower.toUpperCase();
  var correctLetter = false;
  
  for (let i = 0; i < currentWord.length; i++) {
    if (letterGuessed === currentWord[i]) {
      rightArray[i] = currentWord[i];
      correctLetter = true;
    }
  }
  if (!correctLetter) {
    wrongArray[j] = letterGuessed;
    guessesAllowed--;
  }
  j++;

  document.getElementById("currentWord").textContent = rightArray.join(" ");
  document.getElementById("lettersGuessed").textContent = wrongArray.join(" ");
  document.getElementById("guessRemain").textContent = guessesAllowed;

  // Add if statement that will call for game won and pick new word
  var incompleteWord = false;
  for (let i = 0; i < rightArray.length; i++) {
    
    if (rightArray[i] === "_"){
      incompleteWord = true;
    }
  }

  if (incompleteWord === false){
    wins++;
    gameReset();
  }
};
