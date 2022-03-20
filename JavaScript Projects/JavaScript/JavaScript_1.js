//JavaScript Projects

//Assginment 56
//A function that gets input from the user and depending on the input uses a switch case to execute the correct code
function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";

    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    
    document.getElementById("Output").innerHTML = Color_Output;
}

//Assignment 57
//A function that gets all classes named 'Test' and uses a for loop to change the text in each element
function ChangeTextByClass() {
    var currentText = document.getElementsByClassName("Test");

    for(i = 0; i < currentText.length; i++) {
        currentText[i].innerHTML = "The text has changed!";
    }
}