$(document).ready(function() {

// flag for game event of playing
var playing = false;

$("#player .choice").mouseenter(function(){
	if (playing == false) {
		$(this).addClass("hoverHighlight")
	}
});
$("#player .choice").mouseleave(function() {
	$(this).removeClass("hoverHighlight");
});

var userChoice = "not yet";
$("#player .choice").click(function() {
	// Do nothing if game event is running
	if (playing == false){
		
	// Set up 
	playing = true;
	$(this).addClass("selectHighlight");

	// Player choice
	if ($(this).hasClass("rock")) {
		userChoice = "rock";
	} else if($(this).hasClass("scissors")) {
		userChoice = "scissors";
	} else if($(this).hasClass("paper")) {
		userChoice = "paper";
	};
				
	// Computer Choice
	var computerChoice = Math.random();
		if (computerChoice < 0.34) {
		computerChoice = "rock";
		$("#computer .rock").addClass("selectHighlight");
	} else if (computerChoice <= 0.67) {
		computerChoice = "paper";
		$("#computer .paper").addClass("selectHighlight");
	} else {
		computerChoice = "scissors";
		$("#computer .scissors").addClass("selectHighlight");
	};

	// Win or Lose or tie functions
	var win = "You win!";
	function winner() {
		console.log(win);
		$("#player .selectHighlight").addClass("winHighlight");
		$("#computer .selectHighlight").addClass("loseHighlight");
		$("#gameResult div").text(win);
		$("#gameResult").css("background", "#6F6").effect("bounce", "slow");
	}
	var lose = "You lose!";
	function loser() {
		console.log(lose);
		$("#player .selectHighlight").addClass("loseHighlight");
		$("#computer .selectHighlight").addClass("winHighlight");
		$("#gameResult div").text(lose);
		$("#gameResult").css("background", "#F66").effect("bounce", {direction:"down"}, "slow");
	}
	var tie = "Tie!";
	function tied() {
		console.log("The result is a tie!");
		$("#gameResult div").text(tie);
		$("#gameResult").css("background", "#FF6");
	}

	// Case of tie
	if (userChoice === computerChoice) {
		tied();
	}
	// Case of rock
	else if (userChoice === "rock") {
		if (computerChoice === "scissors") {
			winner();
		} else {
			loser();		
	}}
	// Case of paper
	else if (userChoice === "paper") {
		if (computerChoice === "scissors") {
			loser();
		} else {
			winner();
	}}
	// Case of scissors
	else if (userChoice === "scissors") {
		if (computerChoice === "rock") {
			loser();
		} else {
			winner();
	}}

	// Clean up and end event, ready for next game (after 1.5sec)
	setTimeout(function() {
		$(".choice").removeClass("selectHighlight winHighlight loseHighlight");
		$("#gameResult div").text("...Choose Above...");
		$("#gameResult").css("background", "#66F");
		playing = false;
	}, 1500);		
//end of .click function
}});
	
	
//end of document ready function
});