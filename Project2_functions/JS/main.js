//Assignment 13
function MakeTextUppercase() {
    var text = "This text is uppercase"; //Set the variable text
    var textResult = text.toUpperCase(); //Assign textResult variable to the text value and make it uppercase
    document.getElementById("largeText").innerHTML = textResult;
}

//Assignment 14
function ConcatString() {
    var stringConcat = "This text has "; //Set the value of stringConcat
    stringConcat += "been concatenated"; //Concatenate the stringConcat value

    document.getElementById("stringConcat").innerHTML = stringConcat; //Set the HTML element with the id of stringConcat
}