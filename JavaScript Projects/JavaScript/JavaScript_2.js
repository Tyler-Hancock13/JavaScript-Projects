//Challenge 18

//A function that is triggered when a user clicks the submit button
//The values of firstName and lastName are validated and returns true if not empty
function validateForm() {
    let firstName = document.forms["myForm"]["fname"].value;
    let lastName = document.forms["myForm"]["fname"].value;

    if(firstName == "") {
        alert("First Name must be filled out");
        return false;
    } else if(lastName == "") {
        alert("Last Name must be filled out");
        return false;
    }
}