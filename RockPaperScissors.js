$(document).ready(function() {

//user choice prompt
//var userChoice = prompt("Do you choose rock, paper or scissors?");

var userChoice = "not yet";
$(".choice").click(function() {
	
		//Choice selector
	if ($(this).hasClass("rock")) {
		userChoice = "rock";
	} else if($(this).hasClass("scissors")) {
		userChoice = "scissors";
	} else if($(this).hasClass("paper")) {
		userChoice = "paper";
	};

				
	var computerChoice = Math.random();
	console.log(computerChoice);
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} else if(computerChoice <= 0.67) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	};

		//Choice logging stuff
	console.log("Computer: " + computerChoice);
	console.log("User: " + userChoice);
	var displayChoice = $("<p>You choose "+userChoice+"</p>");
	$(".choice").parent().append(displayChoice);

	var win = "You win!";
	var lose = "Computer wins!";

		//tie
	if (userChoice === computerChoice) {
		console.log("The result is a tie!");
	}
		//Rock
	else if (userChoice === "rock") {
		if (computerChoice === "scissors") {
			console.log(win);
		} else {
			console.log(lose);
	}}
		//paper
	else if (userChoice === "paper") {
		if (computerChoice === "scissors") {
			console.log(lose);
		} else {
			console.log(win);
	}}

		//scissors
	else if (userChoice === "scissors") {
		if (computerChoice === "rock") {
			console.log(lose);
		} else {
			console.log(win);
		}
	}

//end of .click function
});
	
	
//end of document ready function
});