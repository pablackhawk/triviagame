$(document).ready(function(){

	//Initial variables
	var index = 0,
		correct = 0,
		incorrect = 0;
	//timer
	var timer = { 
		time: 30,
		reset: function() {
			this.time = 30;
			$(".clock").html("<h3>" + this.time + " seconds remaining</h3>");
		},

		start: function() {
			counter = setInterval(timer.count, 1000);
		},

		stop: function() {
			clearInterval(counter);
		},

		count: function() {
			timer.time--;
			console.log(timer.time);

			if(timer.time >= 0) {
				$(".clock").html("<h3>" + timer.time + " seconds remaining</h3>");

			}

			else {
				index++;
				wrongAnswer();
				timer.reset();
				if (index < questions.length) {
					loadQuestion(index);
				}

				else{
					$(".choice").hide();
					showScore();
				}
			}
		},
	};

	//Questions
	var	q1 = {
			question: "What year was Star Wars released?",
			multipleChoice: ["A. 1965", "B. 1973", "C. 1977", "D.1983", "E. 1992"],
			flags: [false, false, true, false, false],
			answer: "C. 1977"
		};

	var	q2 = {
			question: "What is the NCC Registry of the USS Voyager?",
			multipleChoice: [ "A. NCC-1701", "B. NCC-40394", "C. NCC-73344", "D. NCC-74656", "E. NCC-887785"],
			flags: [false, false, false, true, false],
			answer: "D. NCC-74656"
		};

	var	q3 = {
			question: "What Battlestar group is the Galactica a part of?",
			multipleChoice: ["A. BSG 75", "B. BSG 87", "C. BSG 99", "D. BSG 124", "E. BSG 231"],
			flags: [true, false, false, false, false],
			answer: "A. BSG 75"
		};

	var	q4 = {
			question: "What class of starship is the USS Enterprise-E?",
			multipleChoice: ["A. Akira class", "B. Constitution class", "C. Sovereign class", "D. Yellowstone class", "E. Zefram class"],
			flags: [false, false, true, false, false],
			answer: "C. Sovereign class"
		};

	var	q5 = {
			question: "Where did Luke Skywalker lose his hand?",
			multipleChoice: ["A. Alderaan", "B. Cloud City", "C. Hoth", "D. Sullust", "E. Yavin"],
			flags: [false, true, false, false, false],
			answer: "B. Cloud City"
		};

	var	q6 = {
			question: "What is the name of the fighters in Battlestar Galactica?",
			multipleChoice: ["A. Arrowhead", "B. Badger", "C. Raptor", "D. Tomcat", "E. Viper" ],
			flags: [false, false, false, false, true],
			answer: "E. Viper"
		};

	var	q7 = {
			question: "What are the enemy aliens called in Ender's Game?",
			multipleChoice: ["A. Arachnids", "B. Buggers", "C. Hortas", "D. Romulans", "E. Ursids"],
			flags: [false, true, false, false, false],
			answer: "B. Buggers"
		};

	var	q8 = {
			question: "What class of ship is the USS Voyager?",
			multipleChoice: ["A. Bozeman class", "B. Defiant class", "C. Intrepid class", "D. Starfox class", "E. Universe class"],
			flags: [false, false, true, false, false],
			answer: "C. Intrepid class"
		};

	var	q9 = {
			question: "Which model Cylon is played by Grace Park?",
			multipleChoice: ["A. Number Two", "B. Number Four", "C. Number Six", "D. Number Eight", "E. Number Ten"],
			flags: [false, false, false, true, false],
			answer: "D. Number Eight"
		};

	var	q10 = {
			question: "What color is Luke Skywalker's lightsaber?",
			multipleChoice: ["A. Blue", "B. Green", "C. Purple", "D. Red", "E. Yellow"],
			flags: [false, true, false, false, false],
			answer: "B. Green"
		};
	var	q11 = {
			question: "What book is Blade Runner based on?",
			multipleChoice: ["A. Bicentennial Man", "B. The Complete Robot", "C. Do Androids Dream of Electric Sheep", "D. I, Robot", "E. Nightfall"],
			flags: [false, false, true, false, false],
			answer: "C. Do Androids Dream of Electric Sheep"
		};
	var	q12 = {
			question: "What is the main antagonist program in TRON?",
			multipleChoice: ["A. The Compiler", "B. The Deconstructor", "C. The Electronic Control Manipulator", "D. The Master Control Program", "E. The User Control Matrix"],
			flags: [false, false, false, true, false],
			answer: "D. The Master Control Program"
		};
	var	q13 = {
			question: "How did aliens recruit pilots in The Last Starfighter?",
			multipleChoice: ["A. An Arcade Game", "B. Military Service", "C. Conscription", "D. Interviews", "E. Recommendations"],
			flags: [true, false, false, false, false],
			answer: "A. An Arcade Game"
		};
	var	q14 = {
			question: "What feat is the Millenium Falcon famous for?",
			multipleChoice: ["A. The Andorian Slip", "B. The Batarian Crunch", "C. The Coruscant Skim", "D. The Kessel Run", "E. The Rurk Roundabout"],
			flags: [false, false, false, true, false],
			answer: "D. The Kessel Run"
		};
	var	q15 = {
			question: "What is James Kirk's Middle Name?",
			multipleChoice: ["A. Cochrane", "B. Daystrom", "C. Maynard", "D. Shepherd", "E. Tiberius"],
			flags: [false, false, false, false, true],
			answer: "E. Tiberius"
		};

	var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];

		function loadQuestion(qSelection) {
			timer.reset();
			$(".question").html("<h3>" + questions[qSelection].question + "</h3>");
			$("#buttonA").text(questions[qSelection].multipleChoice[0]).show();
			$("#buttonB").text(questions[qSelection].multipleChoice[1]).show();
			$("#buttonC").text(questions[qSelection].multipleChoice[2]).show();
			$("#buttonD").text(questions[qSelection].multipleChoice[3]).show();
			$("#buttonE").text(questions[qSelection].multipleChoice[4]).show();
		}


		function gameStart () {
			index = 0;
			$(".question").append('<button id="startButton">Start</Button>');
			$("#startButton").on('click', function() {
				$(this).hide();
				timer.start();
				loadQuestion(index);
			});
		}

		function getAnswer() {
			$(".choice").on('click', function(){
				console.log('alert', index);
				index++;
				console.log('click', index);
				$("#question").text("");
				$("#buttonA").text("");
				$("#buttonB").text("");
				$("#buttonC").text("");
				$("#buttonD").text("");
				$("#buttonE").text("");
				loadQuestion();
			})
		}

		function answerCorrect() {
			correct++;
			alert("Correct!");
			console.log("correct");
		}

		function answerIncorrect(){
			incorrect++;
			alert("Incorrect");
			console.log("incorrect");
		}

		function showScore(){
			$(".question").empty();
			$(".question").append("<h2><p>" + correct + " correct</p></h2>");
			$(".question").append("<h2><p>" + incorrect + " incorrect</p></h2>");
			timer.stop();
			$(".clock").empty();
		}



	gameStart();
	$('.choice').on('click', function(){
		console.log($(this));
		if(this.id === "buttonA"){
			var answerChosen = "A";
		}
		else if(this.id === "buttonB"){
			answerChosen = "B";
		}
		else if(this.id === "buttonC"){
			answerChosen = "C";
		}
		else if(this.id === "buttonD"){
			answerChosen = "D";
		}
		else if(this.id === "buttonE"){
			answerChosen = "E";
		}
		if(answerChosen === "A" && (questions[index].flags[0] === true)){
			answerCorrect();
		}
		else if(answerChosen === "A"){
			answerIncorrect();
		}
		if(answerChosen === "B" && (questions[index].flags[1] === true)){
			answerCorrect();
		}
		else if(answerChosen === "B"){
			answerIncorrect();
		}
		if(answerChosen === "C" && (questions[index].flags[2] === true)){
			answerCorrect();
		}
		else if(answerChosen === "C"){
			answerIncorrect();
		}
		if(answerChosen === "D" && (questions[index].flags[3] === true)){
			answerCorrect();
		}
		else if(answerChosen === "D"){
			answerIncorrect();
		}
		if(answerChosen === "E" && (questions[index].flags[4] === true)){
			answerCorrect();
		}
		else if(answerChosen === "E"){
			answerIncorrect();
		}
		 $(".question").text("");
		 $("#buttonA").text("");
		 $("#buttonB").text("");
		 $("#buttonC").text("");
		 $("#buttonD").text("");
		 $("#buttonE").text("");
		 index++;
		 if (index < questions.length) {
		 	loadQuestion(index);
		 } else {
		 	$(".answers").hide();
		 	showScore();
		 	
		 }
	});

});