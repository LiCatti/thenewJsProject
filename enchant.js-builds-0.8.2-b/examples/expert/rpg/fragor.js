
var questions = [
				{Quest:"Fråga 1",ans1:"a",}, 
				{Quest:"Fråga 2",ans1:"a",},
				{Quest:"Fråga 3",ans1:"a",},
				{Quest:"Fråga 4",ans1:"a",},
				{Quest:"Fråga 5",ans1:"a",},
				{Quest:"Fråga 6",ans1:"a",},
				{Quest:"Fråga 7",ans1:"a",},
				{Quest:"Fråga 8",ans1:"a",}
				];
				
// Apply a function to all the male friends

myFunction(questions); 

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i<arr.length; i++) {
	out = out+"<br>"+arr[i].Quest+ "!"+"<br>"+arr[i].ans1;
	
    }
	
    document.getElementById("theLink").innerHTML = out;	
}

	//bind an event when the user presses any key
	window.onkeydown = function (event) {}
		
            function leftArrowPressed() {
                var element = document.getElementById("image");
                element.style.left = parseInt(element.style.left) - 5 + 'px';
            }

            function rightArrowPressed() {
                var element = document.getElementById("image1");
                element.style.left = parseInt(element.style.left) + 5 + 'px';
            }

            function upArrowPressed() {
                var element = document.getElementById("image1");
                element.style.top = parseInt(element.style.top) - 5 + 'px';
            }

            function downArrowPressed() {
                var element = document.getElementById("image1");
                element.style.top = parseInt(element.style.top) + 5 + 'px';
            }

            function moveSelection(event) {                    
                switch (event.keyCode) {
                    case 37:
                        leftArrowPressed();
                    break;

                    case 39:
                        rightArrowPressed();
                    break;

                    case 38:
                        upArrowPressed();
                    break;

                    case 40:
                        downArrowPressed();
                    break;
                }
            };

        function gameLoop()
        {
            // change position based on speed
            moveSelection();
            setTimeout("gameLoop()",1);
        }



