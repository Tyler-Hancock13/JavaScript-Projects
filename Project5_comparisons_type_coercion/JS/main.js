//Comparisons Type Coercion

//Assignment 26

//Displays a numeric value in the browser using the typeof operator
document.write(typeof 132);

document.write("\n");
//Challenge 6

//A function to display NaN in JavaScript
function DisplayNaN(){
    document.getElementById("DisplayNAN").innerHTML = 0 / 0;
}

//A function that displays true if the string is a number
function IsNaNTrue() {
    document.getElementById("IsNaNTrue").innerHTML = isNaN("This will be true");
}

//A function that displays false if the string is a number
function IsNaNFalse() {
    document.getElementById("IsNaNFalse").innerHTML = isNaN("100");
}

//Assignment 27

//A function that displays infinity
function DisplayInfinity() {
    document.getElementById("Infinity").innerHTML = 4E533;
}

//A function that displays negative infinity
function DisplayNegInfinity() {
    document.getElementById("NegInfinity").innerHTML = -6E388;
}

//Assignment 28

//Checks if 5 is less than two. Returns false
document.write(5 < 2);

document.write("\n");

//Assignment 29

//Displays the result of 5 * 20 in the console
console.log(5 * 20);

//Assignment 30

//Demonstrates type coercion
document.write(10 + "20");

document.write("\n");

//Challenge 7

//Returns false and displays the result in the console
console.log(512 < 2);

//Assignment 31

//Using == the statement will return false
document.write(5 == 2);

document.write("\n");

//Using == the statement will return true
document.write(0 == 0);

document.write("\n");

//Assignment 32

//Checks to see if data type and value match. Returns true
document.write(1 === 1);
document.write("\n");

//Checks to see if different data type and value match. Returns false
document.write("1" === 2);
document.write("\n");

//Checks to see if different data type and same value match. Returns false
document.write("1" === 1);
document.write("\n");

//Checks to see if same data type and different value match. Returns false
document.write(1 === 3);
document.write("\n");

//Assignment 33

//Uses && operator to check if both statements are true. Returns true
document.write(5 < 100 && 2 > 1);
document.write("\n");

//Uses && operator to check if both statements are true. Returns false
document.write(50 < 10 && 3 > 2);
document.write("\n");

//Uses || operator to check if at least one statement is true. Returns true
document.write(1 == 0 || 5 > 1);
document.write("\n");

//Uses || operator to check if at least one statement is true. Returns false
document.write(1 == 2 || 100 == 1);
document.write("\n");

//Assignment 34

//Using the NOT Operator this statement will return true
document.write(! 5 < 3);
document.write("\n");

//Using the NOT Operator this statement will return true
document.write(! 1 == 2);