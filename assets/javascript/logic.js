$('#start').on('click', function() { 
 	game.start(); 
});
//Arrays within objects within arrays! 
var questions = [{
	question: "What is the unit measurement for the activity of a radioactive source?", 
	answers: ["Bequeral", "Kelvin", "Candela", "Curie"], 
	correctAnswer: "Bequeral"
}, { 
	question: "What is the strongest known magnet in the Universe?",
	answers: ["Neodymium", "A Neuron Star", "Rare Earth", "Disc"], 
	correctAnswer: "A Neuron Star"
}, { 
	question: "How many patents did Thomas Edison file?",
	answers: ["1000", "1225", "5000", "1093"],
	correctAnswer: "1093"
}, {
	question: "What can be used to treat heart attacks?", 
	answers: ["Grapefruit", "Zanamivir", "Nitroglycerine", "Klonopin"],
	correctAnswer: "Nitroglycerine"
}, {
	question: "What causes an Aurora?",
	answers: ["Slow moving particles", "Charged particles from solar wind", "Magnetospheric disturbance", "Disrupted magnetic fields"],
	correctAnswer: "Charged particles from solar wind"
}, {
	question: "How old is our sun?",
	answers: ["6 billion years", "6.5 billion years", "12 billion years", "4.5 billion years"],  
	correctAnswer: "4.5 bilion years"
}, {
	question: "Is lightning 3 times hotter than the Sun?",
	answers: ["Yes", "No"], 
	correctAnswer: "Yes"
}, {
	question: "What is the longest type of cell in the body?",
	answers: ["Red blood cell", "Salivary Gland", "Prostate Gland", "Nerve"],
	correctAnswer: "Nerve"
}]; 


//FUNCTIONS

var game = {
	correct: 0, 
	incorrect: 0, 
	counter: 20, 
	countdown: function() { 
		game.counter--; 
		$('#counter').html(game.counter);
		if(game.counter <=0) {
			console.log("Time is up!"); 
			game.done(); 
		} 
	}, 
	start: function(){
		timer = setInterval(game.countdown, 1000); 
		$('#subwrapper').prepend('<h2> Time Remaining: <span id="counter"> 20</span> Seconds</h2>'); 
		$('#start').remove();  
		for (var i = 0; i < questions.length; i++) {
			$('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
			for (var j = 0; j < questions[i].answers.length; j++) {
				$("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>" + questions[i].answers[j]); 
			}
		}
	}, 

	//When this timer gets to zero, we need to do the game done fcn to check whether question was correct or incorrect
	//It has to do this for each and every question on the page 
	//FIRST check thru each of the input types to check if any of the buttons are marked as checked
	done: function () { 
		//comparing the checked vs. correct at the 0th position in the array 
		$.each($("input[name='question-0']:checked"), function() {
			if($(this).val()==questions[0].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		});
		//comparing the checked vs. the correct at the 1 position in the array 
		$.each($("input[name='question-1']:checked"), function() {
			if($(this).val()==questions[1].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		});
		//comparing the checked vs. correct at the 2 position in the array 
		$.each($("input[name='question-2']:checked"), function() {
			if($(this).val()==questions[2].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		});
		//comparing the checked vs. correct at the 3 position in the array
		$.each($("input[name='question-3']:checked"), function() {
			if($(this).val()==questions[3].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		}); 
		//comparing the checked vs. the correct at the 4 position in the array
		$.each($("input[name='question-4']:checked"), function() {
			if($(this).val()==questions[4].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		});
		//comparing the checked vs. the correct at the 5 position in the array
		$.each($("input[name='question-5']:checked"), function() {
			if($(this).val()==questions[5].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		}); 
		//comparing the checked vs. the correct at the 6 position in the array 
		$.each($("input[name='question-6']:checked"), function() {
			if($(this).val()==questions[6].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		}); 
		//compring the checked vs. the correct at the 7 position in the array 
		$.each($("input[name='question-7']:checked"), function() {
			if($(this).val()==questions[7].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		});

	this.result(); 
	}, 
	result: function() { 
	clearInterval(timer); 
	$('#subwrapper h2').remove();
	$('#subwrapper').html("<h2>All done!</h2>"); 
	$('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
	$('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
	$('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
	}
}





	// done: function(){
	// 	$.each($('input'))
	// }

// function palindrome ("hi") {
// 	return hi.split("").reverse("")join("") === str; 

// }























