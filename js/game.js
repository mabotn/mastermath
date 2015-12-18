var score;
var progress;

$("document").ready(function() {
	score = 0;
	progress = 0;

	$("#tryAgain").click(Again);
	$("#playAgain").click(Again);
	$("#startPlaying").click(startPlaying);
	$("#answer").keyup(function(key) {
		if (key.which == 13) {
			verify();
		}
	});
});

function startPlaying() {
	$("#intro").hide();
	$("#level").show();
	level();
}

function level() {
	progress++;
	$("#leftVal").html(Math.floor(Math.random()*11));
	$("#rightVal").html(Math.floor(Math.random()*11));
	$("#answer").val("");
	$("#levelProgress").html("Level Progress : " + progress + " / 10");
	$("#answer").focus();
}

function verify() {
	var Left = Number($("#leftVal").html());
	var Right = Number($("#rightVal").html());

	if (Number($("#answer").val()) == Left + Right) {
		score++;
	}

	if (progress == 10) {
		$("#level").hide();
		if (score >= 5) {
			$("#win").show();
		} else {
			$("#gameover").show();
		}
	} else {
		level();
	}
}

function Again() {
	score = 0;
	progress = 0;

	$("#gameOver").hide();
	$("#win").hide();
	$("#intro").show();
}
