// Scope Time Function

//Assignment 39

//Sets the value of globalNum as 10
var globalNum = 10;

//A function that adds 15 to the value of globalNum
function CalculateGlobalNum() {
    globalNum = globalNum + 15;
    document.getElementById("Global").innerHTML = globalNum;
}

//A function that declares a variable named localNum and sets its value to 16
//Adds 4 to the value of localNum and displays it on screen
function CalculateLocalNum() {
    var localNum = 16;
    localNum = localNum + 4;
    document.getElementById("Local").innerHTML = localNum;
}

//A function that adds 10 to the value of localNum and displays it in the browser
//Error occurs because localNum has not declared globally
function CalculateNumError() {
    localNum = localNum + 10;
    document.getElementById("Error").innerHTML = localNum;
}

//Assignment 40, 41
function CheckTimeOfDay() {
    console.log(new Date().getHours());
    if(new Date().getHours() >= 0) {
        document.getElementById("Time").innerHTML = "It's late!";
    }
}

//Assignment 42

//A function that gets the age input by the user
//Checks the age value and displays a different message depending on the users age
function CheckAge() {
    var age = document.getElementById("Age").value;

    if(age < 16) {
        document.getElementById("AgeMessage").innerHTML = "You are too young to drive!"
    }
    else {
        document.getElementById("AgeMessage").innerHTML = "You can drive!";
    }
}

//Assignment 43

//A function that checks the users time and compares it to certain hours of the day
//The value of Reply is set depending on which condition sets the value
function Time_function() {
    var Time = new Date().getHours(); //Sets the value of time to the current local time
    var Reply; //Creates a variable named Reply that does not have a value
    
    if(Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if(Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time";
    }

    document.getElementById("Time_of_day").innerHTML = Reply;
}