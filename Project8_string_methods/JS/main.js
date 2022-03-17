//String Methods

//Assignment 44
//A function that uses the concat method to join multiple strings into one.
function ConcatString() {
    var firstMessage =  "This text ";
    var secondMessage = "was connected ";
    var thirdMessage = "using string concatenation";

    var fullMessage = firstMessage.concat(secondMessage, thirdMessage);

    document.getElementById("Concat").innerHTML = fullMessage;
}

//Assignment 45
//A function that slices the string and will only display the word 'Slice' when the button is clicked
function SliceString() {
    var message = "The word Slice in this sentence will be displayed when you click the button.";
    var slicedString = message.slice(9,15);
    document.getElementById("Slice").innerHTML = slicedString;
}

//Challenge 10
//A function that displays a message in uppercase. The sentence is converted to uppercase using the toUpperCase() method
function UppercaseString() {
    var message = "This sentence is now uppercase";
    document.getElementById("Uppercase").innerHTML = message.toUpperCase();
}

//A function that will search a string for a specified word using the search() method.
//The starting position of the word sunny is stored as the variable position and is displayed to the user
function SearchString() {
    var message = "It was very sunny today.";
    var position = message.search("sunny");
    document.getElementById("Search").innerHTML = "The word sunny is in position " + position;
}

//Assignment 46
//A function that will return the number 7 as a string
function ConvertNumberToString() {
    var num = 7;
    document.getElementById("NumToString").innerHTML = num.toString();
}

//Assignment 47
//A function that will assign pi the value of Math.Pi
//The toPrecision() method will then format pi to 6 places and display it to the user
function DisplayPi() {
    var pi = Math.PI;
    document.getElementById("Pi").innerHTML = pi.toPrecision(6);
}

//Challenge 11
//A function that converts the number PI to a string and rounds it to 2 decimal places
function FixedString() {
    var pi = Math.PI;
    document.getElementById("Fixed").innerHTML = pi.toFixed(2);
}

//A function that creates a variable called message and assigns it the value of 'Good morning!' and using the valueOf() method, displays the string to the user
function ValueString() {
    var message = "Good morning!";
    var fullMessage = message.valueOf();

    document.getElementById("Value").innerHTML = fullMessage;
}