// Alla frågor
var questions = ["q1", "q2"];
// Alla svar
var answers = ["a1", "a2"];
// Frågorna har ej blivit besvarade
var isAnswered = [false, false];


// Här definieras radioknappar för att kunna skapa dem för varje fråga
function makeRadioButton( name, value, text ) {

    var label = document.createElement("label");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.value = value;

    label.appendChild(radio);

    label.appendChild(document.createTextNode(text));
    return label;
}

// Fråga 1
function showQuestion1() {
// already answered
if ( isAnswered[0] == true ) {
    return;
} else {
    var q1 = questions[0];
                        
    // Frågan
    var elem = document.getElementById("theLink");
    elem.style.display = "block";
    var createinput = document.createTextNode(q1);
    theLink.appendChild(createinput);

    // Svaren
    var yes_button = makeRadioButton("first", "yes", answers[0]);
    theLink.appendChild(yes_button);

    var new_button = makeRadioButton("second", "no", answers[1]);
    theLink.appendChild(new_button);
                    
    // has now been answered
    isAnswered[0] = true;
	}					
}
                    
// Fråga 2
function showQuestion2() {
    // already answered
    if (isAnswered[1] == true) {
        return;
    } else {
    var q = questions[1];
    var a = answers[1];
                        
    var elem = document.getElementById("theLink");
    elem.style.display = "block";

    var createinput = document.createTextNode(q);
    theLink.appendChild(createinput);

    // has now been answered
    isAnswered[1] = true;
    }                       
}