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

	// Win or Lose function
	var win = "You win!";
	function winner() {
		console.log(win);
		$("#player .selectHighlight").addClass("winHighlight");
		$("#computer .selectHighlight").addClass("loseHighlight");
		$("#gameResult").text(win).css("background", "#6F6")
		// $("#gameResult").effect("bounce", "slow");
	}
	var lose = "You lose!";
	function loser() {
		console.log(lose);
		$("#player .selectHighlight").addClass("loseHighlight");
		$("#computer .selectHighlight").addClass("winHighlight");
		$("#gameResult").text(lose).css("background", "#F66");
	}

		//tie
	if (userChoice === computerChoice) {
		console.log("The result is a tie!");
		$("#gameResult").text("TIE").css("background", "#FF6");
	}
		//Rock
	else if (userChoice === "rock") {
		if (computerChoice === "scissors") {
			winner();
		} else {
			loser();
			
	}}
		//paper
	else if (userChoice === "paper") {
		if (computerChoice === "scissors") {
			loser();
		} else {
			winner();
	}}

		//scissors
	else if (userChoice === "scissors") {
		if (computerChoice === "rock") {
			loser();
		} else {
			winner();
		}
	}

	// Clean up and end event, ready for next game (after 1.5sec)
	setTimeout(function() {
		$(".choice").removeClass("selectHighlight winHighlight loseHighlight");
		$("#gameResult").text("...Choose Above").css("background", "#66F");
		playing = false;
	}, 1500);		
//end of .click function
}});
	
	
//end of document ready function
});