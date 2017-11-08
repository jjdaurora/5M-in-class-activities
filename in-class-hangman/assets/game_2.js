//make an array of hangman word options 

var hangman = ["html", "css", "javascript", "jquery", "python", "ruby"];

//make an array of incorrect keystrokes 

var userWrongGuess = [];

//define game variables 

var wins = 0;
var losses = 0;
var guessCount = 10;
var gameWord = [];
var computerGuess = "";

// 1. game starts, computer randomly selects a word from the array 

function newGame (){

	computerGuess = hangman[Math.floor(Math.random() * hangman.length)];
	console.log('Computer Guess: ' + computerGuess)


// 2. print blank "_" to var gameWord and insert that variable into HTML 

	for (var i = 0; i < computerGuess.length; i++) {
	 	gameWord.push('_');
	 } 

	document.getElementById("game-word").innerHTML = gameWord.join(""); 
	guessCount = 10;
	playerGuess = []; 
	}

// 3. player input: on.key event
document.onkeyup = function(event) {

	userGuess = event.key; 
	var validate = event.keyCode; 

	if (validate >= 65 && validate <= 90) {

		console.log(userGuess)
		console.log(validate)

// 4. selected letter is compared against var computerGuess and var playerGuess

	 for (var j = 0; j < computerGuess.length; j++) {
	 	if (userGuess == computerGuess[j]) {
	 		gameWord[j] = userGuess;
// 5. IF there is a match with computerGuess, display letter in the correct position; replace the "_";
	 		document.getElementById("game-word").innerHTML = gameWord.join(""); 
		}
	

// 6. IF there is no match with computerGuess, push to guessedWords array and insert into HTMl, and reduce guessCount by 1 
// 7  IF a user selects a guess more than once, guesssCount does nothing. 
	
		else if (userWrongGuess.indexOf(userGuess) === -1 && computerGuess.indexOf(userGuess) ===  -1) {
			userWrongGuess.push(userGuess);
			guessCount--; 
			document.getElementById("guess-count").innerHTML = guessCount;	
		}

	}
		
// 8. IF guessCount = 0, then losses increases by 1
	if (guessCount === 0) {
		losses++;
		document.getElementById("loss-count").innerHTML = losses;	
		document.getElementById("game-finished").innerHTML = "Sorry, you lost! Wanna play again?";

}

// 9. IF computerGuess === gameWord, then increase wins by 1 

	if (gameWord.join("")===computerGuess){
		wins++;
		document.getElementById("win-count").innerHTML = wins;	
		document.getElementById("game-finished").innerHTML = "Winner, winner, chicken dinner! Keep it going?";
	}

// 10. IF 8 or 9 happens, insert <div> to give user option to play again

// 11. If the user runs new game, reset guessCount and reset playerGuesses 

	}

	
}

newGame();
document.getElementById("game-finished").onclick = function (){
	newGame;
}









