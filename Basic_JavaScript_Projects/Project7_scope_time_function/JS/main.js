
//Global variable
var X = 10; 
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();


//Local variable
function Add_numbers_3() {
    var Y = 10;
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100 + "<br>");
}
Add_numbers_3();
Add_numbers_4();


//console log mess up (The error shows up when I take the local varibale one away )
function Add_numbers_5() {
    var Z = 10;
    console.log(15 + Z + "<br>");
}
function Add_numbers_6() {
    console.log(Z + 100 + "<br>");
}
Add_numbers_5();
Add_numbers_6();

function get_Date() {
    if (new Date() .getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
    else {
    document.getElementById("Greeting").innerHTML = "Good evening!";
    }
}

function get_Date1() {
    if (new Date() .getHours() < 12) {
    document.getElementById("Greeting1").innerHTML = "Good Morning";
    }
    if (new Date() .getHours() > 12) {
        document.getElementById("Greeting1").innerHTML = "Good Afternoon";
        }
    if (new Date() .getHours() > 17) {
        document.getElementById("Greeting1").innerHTML = "Good Evening";
        }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time > 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
