
Welcome to Stypi!

Stypi is a realtime editor that allows multiple users to make changes to a single document at the same time. All you need to do is share the URL with others to begin collaborating!

This editor also supports programming languages that you can access by clicking on the "</>" button on the top left. For more information on how to use Stypi please click the FAQ link on the bottom left.

Hi Allison!


// I worked [with Allison Reilly and Morgan O"Leary] on this challenge

// Your mission description:
Rock, Paper, Scissors
Ask user to put in rock paper or scissors. Plays against computer. Computer randomizes choice.
Paper > Rock
Rock > Scissors
Scissors > Paper
Rock === Rock
Paper === Paper
Scissors === Scissors

// Pseudocode

1. (ask user) Rock, Paper or Scissors?
2. Computer randomizes choice
    -Math.random
3. If computer math.random is less than .34 === rock
    -if between .34 and .67 == paper
    -else it is scissors
4. compare choices
    - if choice one is equal to choice two its a tie
    -if choice one beats choice two returns choice one won
    -if choice one loses to choice two return choice two won

// Initial Code

var userChoice = prompt("Rock, Paper, or Scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if (computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
	if (choice1 === choice2) {
		return "Its a tie!";
	} else if (choice1 === "rock") {
		if (choice2 === "paper") {
			return "Paper wins!";
		} else if (choice2 === "scissors") {
			return "Rock wins!";
		}
	} else if (choice1 === "paper") {
		if (choice2 === "rock") {
			return "Paper wins!";
		} else if (choice2 === "scissors") {
			return "Scissors wins!";
		}
	} else if (choice1 === "scissors") {
		if (choice2 === "rock") {
			return "Rock wins!";
		} else if (choice2 === "paper") {
			return "scissors wins!";
		}
	}
};

compare(userChoice, computerChoice);


// Refactored Code
In this code we use a broad If, Else If, Else If statement and inside the statement we break it down into if and else if choices. If we eliminated any of those statements then we would lose the function. We researched forms of this game and it seems ours is the most basic and straightforward approach. 





// Reflection
// What parts of your strategy worked? What problems did you face?
// We had trouble coming up with a game at first. Once we did though it flowed. My node hasn't been working so we couldn't test it out, but realized later we could use the console.
// What questions did you have while coding? What resources did you find to help you answer them?
// We weren't sure if we could use else when it was the last one since it would take care of anything other than, but we decided just to stick with else if.
// What concepts are you having trouble with, or did you just figure something out? If so, what?
//  My node wasn't working. I downloaded it correctly, I'm not sure what is wrong.
// Did you learn any new skills or tricks?
// Just got a better understanding how to write javascript
// How confident are you with each of the Learning Competencies?
// confident
// Which parts of the challenge did you enjoy?
// having out game work
// Which parts of the challenge did you find tedious?
// my node not working
