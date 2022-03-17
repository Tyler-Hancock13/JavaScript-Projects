//Ternary Operators and Constructors

//Assignment 35

//A function that checks the age entered and returns true or false if the user is tall enough to ride
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//Challenge 8

//Gets the age value from user input
//Using the age variable it checks if the age the user entered is less than 18
//Using a ternary operator a message is displayed to the user depending on the age they entered
function Check_Age_Vote() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

//Assignment 36

//Creates a vehicle class with the properties Make, Model, Year, Color
//Creates a new instance of the vehicle class and sets the values
//Displays Erik's vehicle class properties
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//Challenge 9

//Attempt to name a variable 'true' and display it in the browser
//var true = "Test";
//document.write(true);


function Employee(firstName, lastName, phoneNumber, department) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.department = department;
}

var emp = new Employee("John", "Doe", 1234567890, "Sales");

//Assignment 38
//Sets the value of num to 5. Uses a nested function to decrement the value of num by one and return the new value and is then displayed in the browser
function Nested_Function() {
    document.getElementById("Nested_Function").innerHTML = Subtract();

    function Subtract() {
        var num = 5

        function Decrement() {
            num--;
        }

        Decrement();
        return num;
    }
}