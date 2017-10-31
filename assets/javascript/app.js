
$(document).ready(function(){
var index = 0;
var timer = {
	time: 30,
	reset: function() {
		this.time = 30;
		$('timer').html('<h3>' + this.time + ' seconds remaining</h3>');
	},

	start: function() {
		counter = setInterval(timer.count, 1000);
	},

	stop: function() {
		clearInterval(counter);
	},

	count: function() {
		timer.time--;
		if(timer.time >=0){
			$('timer').html('<h3>' + this.time + ' seconds remaining</h3>');

		}

		else {
			wrongAnswer();
			timer.reset();
			if (index < questions.length) {
				showQuestion(index);
			}

			else{
				$('answers').hide();
				showScore();
			}
		}
	},
};

var correct = 0,
	incorrect = 0;

var	q1 = {
		question: 'What year was Star Wars released?',
		multipleChoice: [
							'A. 1965',
							'B. 1973',
							'C. 1977',
							'D.1983'],
		flags: [false, false, true, false],
		answer: 'C. 1977',
	};

var	q2 = {
		question: 'What is the NCC Registry of the USS Voyager?',
		multipleChoice: [
							'A. NCC-1701',
							'B. NCC-40394',
							'C. NCC-73344',
							'D. NCC-74656'],
		flags: [false, false, false, true],
		answer: 'D. NCC-74656',
	};

var	q3 = {
		question: 'What Battlestar group is the Galactica a part of?',
		multipleChoice: [
							'A. BSG 75',
							'B. BSG 87',
							'C. BSG 99',
							'D. BSG 124'],
		flags: [true, false, false, false],
		answer: 'A. BSG 75',
	};

var	q4 = {
		question: '',
		multipleChoice: [],
		flags: [],
		answer: '',
	};

var	q5 = {
		question: '',
		multipleChoice: [],
		flags: [],
		answer: '',
	};

var	q6 = {
		question: '',
		multipleChoice: [],
		flags: [],
		answer: '',
	};

var	q7 = {
		question: '',
		multipleChoice: [],
		flags: [],
		answer: '',
	};

var	q8 = {
		question: '',
		multipleChoice: [],
		flags: [],
		answer: '',
	};

var	q9 = {
		question: '',
		multipleChoice: [],
		flags: [],
		answer: '',
	};

var	q10 = {
		question: '',
		multipleChoice: [],
		flags: [],
		answer: '',
	};

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

	function loadQuestion(qSelection) {
		timer.reset();
		$('#question').html("<h3>" + questions.[qSelection].question + "</h3>");
		$('#buttonA').text(questions[qSelection].multipleChoice[0]).show();
		$('#buttonB').text(questions[qSelection].multipleChoice[1]).show();
		$('#buttonC').text(questions[qSelection].multipleChoice[2]).show();
		$('#buttonD').text(questions[qSelection].multipleChoice[3]).show();
	}

	function gameStart () {
		index = 0;
		$('#question').append('<button id="startButton">Start</Button>');
		$('#startButton').on('click', function() {
			$(this).hide();
			timer.start();
			loadQuestion(index);
		});
	}

	function getAnswer() {
		$('.choice')on.('click', function(){
			console.log('alert', index);
			index++;
			console.log('click', index);
			$('#question').text('');
			$('#buttonA').text('');
			$('#buttonB').text('');
			$('#buttonC').text('');
			$('#buttonD').text('');
			loadQuestion();
		})
	}

	function answerCorrect() {
		correct++;
		alert("Correct!");
		console.log('correct');
	}

	function answerIncorrect(){
		incorrect++;
		alert("Incorrect");
		console.log("incorrect");
	}

	function showScore(){
		$('#question').empty();
		$('#question').append("<h2><p>" + correct + " correct</p></h2>");
		$('#question').append("<h2><p>" + incorrect + " incorrect</p></h2>");
		timer.stop();
		$('#timer').empty();
	}

gameStart();
$('.choice').on('click', function(){
	console.log($(this));
	if(this.id === 'buttonA'){
		var answerChosen = 'A';
	}
	else if(this.id === 'buttonB'){
		answerChosen = 'B';
	}
	else if(this.id === 'buttonC'){
		answerChosen = 'C';
	}
	else if(this.id === 'buttonD'){
		answerChosen = 'D';
	}
	if(answerChosen === 'A' && (questions[index].flags[0] === true)){
		answerCorrect();
	}
	else if(answerChosen === 'A'){
		answerIncorrect();
	}
	if(answerChosen === 'B' && (questions[index].flags[1] === true)){
		answerCorrect();
	}
	else if(answerChosen === 'B'){
		answerIncorrect();
	}
	if(answerChosen === 'C' && (questions[index].flags[2] === true)){
		answerCorrect();
	}
	else if(answerChosen === 'C'){
		answerIncorrect();
	}
	if(answerChosen === 'D' && (questions[index].flags[3] === true)){
		answerCorrect();
	}
	else if(answerChosen === 'D'){
		answerIncorrect();
	}
	 $(".question").text('');
	 $("#buttonA").text('');
	 $("#buttonB").text('');
	 $("#buttonC").text('');
	 $("#buttonD").text('');
	 index++;
	 if (index < questions.length) {
	 	loadQuestion(index);
	 } else {
	 	$(".choice").hide();
	 	showScore();
	 }
});

});