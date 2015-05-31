// All the questions
var questions = ["The inventor of the Rubik cube was from which country?",
				"Skoda is a well known international brand of car. But where is it from?",
				"According to the Wall Street Journal, where is Europe's best small business school?",
				"Which is the only country to have won the coveted British award for bravery, the George Cross?",
				"What will the population of the EU be after enlargement?",
				"Which of the following is located in future EU country Lithuania?",
				"Which one of these countries is home to the biggest beer drinkers in the world?",
				"Who won the 2002 Eurovision song contest?",
				"Estonia has the world's third highest what?",
				"The Estonians Thomas Edur and Agnes Oaks won which award this year?"];
// All the answers
var answers = [[{text: "Lithuania", correct: false}, {text: "Hungary", correct: true}],//b is correct
				[{text : "Czech Republic", correct: true},{text : "Estonia", correct: false}],//a is correct
				[{text : "Slovakia", correct: false},{text : " Slovenia", correct: true}],//b is correct
				[{text : "Malta", correct: true},{text : "Poland", correct: false}],//a is correct
				[{text : "375 million", correct: false},{text : " 450 million", correct: true}],//b is correct
				[{text : "The geographical centre of Europe ", correct: true},{text : "The venue of Eurovision 2004 ", correct: false}],//a is correct
				[{text : "Czech Republic", correct: true},{text : "Slovakia", correct: false}],//a is correct
				[{text : "Turkey", correct: false},{text : "Latvia", correct: true}],//b is correct
				[{text : "Literacy rate", correct: true},{text : "VAT rate", correct: false}],//a is correct
				[{text : "Laurence Olivier Award for Outstanding Achievement in Dance", correct: true},
					{text : " Oscar for best documentary short subject", correct: false}]];//a is correct
// When the question hasn't been answered
var isAnswered = [false, false, false, false, false, false, false, false, false, false];

// A function that creates the form
function makeForm( question, radioButtons ){
	var form = document.createElement("form"),
        p = document.createElement("p"),
        submit = document.createElement("button");
	
    p.textContent= question;
	form.appendChild(p);
	
	radioButtons.forEach(function( radioButton ){
		form.appendChild(makeRadioButton(radioButton.name, radioButton.value, radioButton.text));
	});
	
	submit.type="submit";
	submit.textContent = "submit answer";
	form.appendChild(submit);
	return form;
}
// A function to create the radiobuttons and their values
function makeRadioButton( name, value, text ) {
    var label = document.createElement("label"),
        radio = document.createElement("input");
    
    radio.type = "radio";
    radio.name = name;
    radio.value = value;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(text));
    return label;
}