// $(document).ready(function() {

//     // Here we are provided an initial array of letters.
//     // Use this array to dynamically create buttons on the screen.
//     var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];

  

//     document.onkeyup = function(event) {

//         var userGuess = event.key;

//         var compLetter = compChoices [Math.floor(Math.random() * computerChoices.length)];
//     }

//     var numGuesses = 5

//     for (numGuesses=0; numGuesses<5; numGuesses++) {

  
//         // var correctGuesses = 0;
//         // var wrongGuess = 0;
//         var guessesLeft = 5;
//         var thusFar ="";
//         var wins = 0
//         var loses = 0

//         var correctGuessesText = document.getElementById("correctGuesses-text");
//         // var wrongGuessText = document.getElementById("wrongGuess-text");
//         var guessesLeftText = document.getElementById("guessesLeft-text");
//         var thusFarText = document.getElementById("thusFar-text");
//         var winsText = document.getElementById("wins-text");
//         var tiesText = document.getElementById("ties-text");


//         if (userGuess === compLetter) {
//             correctGuesses +=1;
//             // lettersUsed+= userGuess;
//             wins += 1
//             alert ("You Win!");
//         }

//         else if (userGuess !== compLetter) {
//             wrongGuesses += 1;
//             lettersUsed += userGuess
//             alert ("Try again");
//             guessesLeft -= 1;

//         }

//         if (guessesLeft <= 0) {
//             loses = 1;
//         }

//         // correctGuessesText.textContent = "You chose: " + userGuess;
//         // wrongGuessText.textContent = "The computer chose: " + computerGuess;
//         winsText.textContent = "Wins: " + wins;
//         lossesText.textContent = "Losses: " + loses;
//         tiesText.textContent = "Ties: " + ties;
//         guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
//         lettersUsed.textContent = "Guess So Far: " + lettersUsed;
//     }   

//   });


 
