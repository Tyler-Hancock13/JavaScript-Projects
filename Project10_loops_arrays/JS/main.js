//Loops Arrays

//Assignment 50
//A function what utilizes a while loop to count down from 10 to 0
function Call_Loop() {
    var num = "";
    var startingNumber = 10;

    while(startingNumber > 0) {
        num += "<br>" + startingNumber;
        startingNumber--;
    }

    document.getElementById("Loop").innerHTML = num;
    
}

//Challenge 13
//A function that will check the length of a string using string.length
function CheckLength() {
    var message = "Click here to check the length of this sentence."
    document.getElementById("Length").innerHTML = message.length + " characters.";
}

//Assignment 51
//A function that creates an array called instruments and uses a for loop to display the list of intruments to the user

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

function for_Loop() {
    for(Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Assignment 52
//A function that creates an array of countries and displays the country located at the index of 1
function array_Function() {
    var countries = ["Canada", "United States", "Japan"];
    document.getElementById("Array").innerHTML = "This country is " + countries[1];
}

//Assignment 53
//A function that creates a vehicle object as a constant and displays the properties to the user
//The vehicle.brand property is changed and displayed to the user
function constant_function() {
    const vehicle = {type:"truck", brand:"Dodge", color:"Red", year:2020};
    vehicle.brand = "Ford";
    document.getElementById("Constant").innerHTML = vehicle.color + " " + vehicle.brand + ". The added and changed property is " + vehicle.year + " " + vehicle.brand
}

//Assignment 54
//Displays 5 because of var keyword
//Displays let as 2 because of block level scope
//Does not run because of defer in script tag
var num = 5;
if(num == 5){
    let num = 2;
    document.write(num);
}

document.write(num);

//Challenge 14
//A function that displays the result returned by the return_Function()
function call_Return() {
    document.getElementById("Return").innerHTML = return_Function();

    function return_Function() {
        var result = 1 + 2;
        return result;
    }
}

//Assignment 55
//A function that creates a student object and sets the properties for the object
//The student object properties are then displayed to the user
function createStudent() {
    let student = {
        firstName: "John",
        lastName: "Doe",
        grade: 11,
        average: 60
    }
    
    document.getElementById("StudentObject").innerHTML = "Student " + student.firstName + " " + student.lastName + " is in grade " + student.grade + " with an average of " + student.average;
}

//Challenge 15
//A function that demonstrates a break statement within a loop
function BreakFunction() {
    let text = "";

    for(let i = 0; i < 10; i++) {
        if(i === 3) {
            break;
        }
        text += "The number is " + i + "<br>";
        document.getElementById("Break").innerHTML = text;
    }
}

//A function that demonstrates a continue statement within a loop
function ContinueFunction() {
    let text = "";

    for (let i = 0; i < 10; i++) {
        if (i === 3) { 
            continue; 
        }

        text += "The number is " + i + "<br>";
        document.getElementById("Continue").innerHTML = text;
      }
}