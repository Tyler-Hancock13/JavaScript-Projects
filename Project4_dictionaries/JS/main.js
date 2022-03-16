//DICTIONARIES

//Assignment 24

//A function to create a dictionary named employee and display key-value pairs in the browser
function EmployeeDictionary() {
    var employee = {
        FirstName:"John",
        LastName:"Doe",
        PhoneNumber: 5551234567,
        Department: "HR"
    }

    document.getElementById("Dictionary").innerHTML = employee.FirstName + " " + employee.LastName; //Displays the employees first and last name
}

//Challenge 5

//A function with duplicate key-value pairs
function DuplicateDictionary() {
    var dog = {
        breed: "Golden Retriever",
        color: "Brown",
        color: "Golden"
    }

    document.getElementById("Duplicate").innerHTML = dog.color; //Displays second color pair in the dog dictionary
}

//Assignment 25

//A function that creates the employee dictionary and deletes the first name pair and attempts to display it in the browser
function DeleteDictionary() {
    var employee = {
        FirstName:"John",
        LastName:"Doe",
        PhoneNumber: 5551234567,
        Department: "HR"
    }

    delete employee.FirstName; //Deletes the FirstName key-value pair from the employee dictionary
    document.getElementById("Delete").innerHTML = employee.FirstName; //Attempts to display the deleted pair. Returns undefined
}