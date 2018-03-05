// Create a variable humanScore. Give it a value of the number 0.
// Create a variable computerScore. Give it a value of the number 0.


// var humanPlay = prompt("Do you choose rock, paper or scissors?");
// var computerPlay = Math.random();
// if (computerPlay <0.34){
// computerPlay = "rock";
// }else if(computerPlay <=0.67){
// computerPlay = "paper";
// }else{
// computerPlay = "scissors";
// }

var humanScore = 0;
var computerScore = 0;

var play = function(humanPlay, computerPlay) {
  console.log("You played " + humanPlay + ". The bot played " + computerPlay);
  if (humanPlay === computerPlay){
    console.log ("You Tied :/ ");
  } else if (humanPlay === "paper" && computerPlay === "rock" || humanPlay === "rock" && computerPlay === "scissors" || humanPlay === "scissors" && computerPlay === "paper" ) {
    humanScore += 1;
    console.log ("You Win! :)");
  } else {
    computerScore += 1;
    console.log ("You Lose! :(");
  }
  console.log("You have " + humanScore + " points" );
  console.log("The bot has " + computerScore + " points");
  if (humanScore === 2 && computerScore <2){
    console.log("You have won the war!")

  } else if (computerScore === 2 && humanScore <2){
    console.log("You have lost the war. Engaging world Bot-Takeover.")
    computerScore= 0;
    humanScore= 0;
  }
};

var playAgain = "Y";
var playagain = "N";

while (playAgain === "Y") {
    var humanPlay = prompt("Choose rock, paper, or scissors");
    var computerPlay = Math.random();

    if (computerPlay < 0.34) {
        computerPlay = "rock";
    } else if (computerPlay <= 0.67) {
        computerPlay = "paper";
    } else {
        computerPlay = "scissors";
    }

    document.write(play(humanPlay, computerPlay));
    document.write("<br>");
    playagain = prompt("Do you want to play again, Y or N");
};

// while (playAgain === "N"){
//     console.log("BORING!")
// };


play(humanPlay, computerPlay);


// play();
// play("scissors", "paper");
// play("rock" , "paper");
// play("paper" , "scissors");
// play("scissors" , "rock");

//best of 3 humanScore, best of 3 computerScore
//if either equals two, that player wins.


// Create a function play. It should accept two parameters: humanPlay and computerPlay.
// Write all the code below INSIDE the function curly braces!!

  // Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
  // For example: "You played rock. The bot played scissors."

  // If the human play is equal to the computer play
    // Log "You tied. :|" to the console.
  // Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
  // humanPlay is 'rock' and the computerPlay is 'scissors' OR
  // humanPlay is 'scissors' and the computerPlay is 'paper'
    // Log "You win! :)" to the console
    // Add one to the humanScore variable (be sure to use += )
  // Otherwise log "You lose! :(" to the console
    // Add one to the computerScore variable (be sure to use += )

  // Log "You have {humanScore} points" to the console
  // For example: "You have 0 points"
  // Log "The bot has {computerScore} points" to the console.
  // For example: "The bot has 3 points"

// END OF FUNCTION (Place the closing curly brace here!)

// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.


// BONUS:
// Create a "best of 3" version

// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.
