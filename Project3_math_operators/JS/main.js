//Assignment 16

//A function to add two numbers
function AddNumber() {
    var result = 524 + 216; //Sets result as the sum of 524 + 216
    var numberText = "524 + 216 = ";
    document.getElementById("Math").innerHTML = numberText + result; //Displays sum in paragraph tag
}

//Assignment 17

//A function to subtract two numbers
function SubtractNumber() {
    var result = 54 - 33; //Sets result as remainder of 54 - 33
    var numberText = "54 - 33 = ";
    document.getElementById("Subtract").innerHTML = numberText + result; //Displays remainder in paragraph tag
}

//Assignment 18

//A function to multiply two numbers
function MultiplyNumber() {
    var result = 5 * 4; //Sets result as total of 5 * 4
    var numberText = "5 x 4 = ";
    document.getElementById("Multiply").innerHTML = numberText + result; //Displays remainder in paragraph tag  
}

//A function to divide two numbers
function DivideNumber() {
    var result = 100 / 20;//Sets result as remainder of 100 / 20
    var numberText = "100 / 20 = ";
    document.getElementById("Divide").innerHTML = numberText + result; //Displays remainder in paragraph tag
}

// Assignment 19

//A function to perform multiple operations in one line
function MultipleOperations() {
    var result = 100 - 80 * 3 / 2 + 100; 
    var numberText = "100 - 80 * 3 / 2 + 100 = ";
    document.getElementById("MultiOperation").innerHTML = numberText + result; //Displays remainder in paragraph tag
}

// Assignment 20

//A function to display only what remains after 20 is divided by 3
function ModulusOperations() {
    var result = 20 % 3;
    var numberText = "20 % 3 = ";
    document.getElementById("ModulusOperation").innerHTML = numberText + result; //Displays remainder in paragraph tag
}

// Assignment 21

//A function to demonstrate the negate operator
function NegationOperations() {
    var num = 100;
    document.getElementById("NegationOperation").innerHTML = -num; //Displays remainder in paragraph tag
}

// Assignment 22

//A function to increment a number by one and display it
function IncrementOperations() {
    var increment = 5;
    increment++;
    document.getElementById("IncrementOperation").innerHTML = increment; //Displays remainder in paragraph tag
}

//A function to decrement a number by one and display it
function DecrementOperations() {
    var decrement = 100;
    decrement--;
    document.getElementById("DecrementOperation").innerHTML = decrement; //Displays remainder in paragraph tag
}

//Challenge 23

//A function to display a random number
function RandomNumber() {
    var random = Math.random();
    document.getElementById("RandomMethod").innerHTML = random; //Displays remainder in paragraph tag
}
document.write(random);

//Challenge 4

//A function to display a number multiplied by the power of another number
function PowerNumber() {
    var power = Math.pow(2,3);
    document.getElementById("PowerMethod").innerHTML = power; //Displays remainder in paragraph tag
}