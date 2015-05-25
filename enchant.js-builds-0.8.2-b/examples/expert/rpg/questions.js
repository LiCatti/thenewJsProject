// Alla frågor
var questions = ["q1", "q2"];
// Alla svar
var answers = ["1.1","1.2","2.1","2.2"];
// Frågorna har ej blivit besvarade
var isAnswered = [false, false];

// Texten som kommer upp när man har svarat på en fråga
var answerText = document.getElementById("answerBox");
var textWrong = document.createTextNode("Fel svar!");
var textRight = document.createTextNode("Helt rätt!");

// Här definieras radioknappar för att kunna skapa dem för varje fråga
function makeRadioButton( name, value, text) {

    var label = document.createElement("label");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.value = value;

    label.appendChild(radio);

    label.appendChild(document.createTextNode(text));
    return label;
}