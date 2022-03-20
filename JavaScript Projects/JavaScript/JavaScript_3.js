//Assignment 59
//A function that gets the animal by the data-character-type attribute and
//assigns it to the animalType variable and displays it in an alert box
function DisplayAnimal(animal) {
    var  animalType = animal.getAttribute("data-character-type");
    alert("You selected a " + animalType);
}