function My_First_Function() { //this is my first function
    var str = "This is the button text!"; //writing a string, this will be used in a button later
    document.getElementById("Button_Text").innerHTML = str; //learning how to use the get element by ID
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence; // this time this is a sentance that can be interacted with
}