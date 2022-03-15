function addition() {
    var addition = 2 + 2;
    document.getElementById("Math0").innerHTML = "2 + 2 = " + addition; // Making a math function!
}

function subtraction() {
    var Subtraction = 5 - 2;
    document.getElementById("Math1").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 + 8;
    document.getElementById("Math2").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
    var simples_Math = 48 / 6;
    document.getElementById("Math3").innerHTML = "48 / 6 = " + simples_Math;
}

function more_Math() {
    var simple_MATH = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math4").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_MATH;
}

function modulus_Operator() {
    var simple_Maths = 25 % 6;
    document.getElementById("Math5").innerHTML = "When you divid 25 by 6 you have a remainder of: " + simple_Maths;
}

function negation_Operator() {
    var A = 10;
    document.getElementById("Math6").innerHTML = -A;
}

function increment_Operator() {
    var B = 10;
    B++;
    document.getElementById("Math7").innerHTML = B;
}

function decrement_Operator() {
    var C = 10;
    C--;
    document.getElementById("Math8").innerHTML = C;
}

function math_Random() {
   var D = Math.random();
    document.getElementById("Math9").innerHTML = "Here is a number between 1 and 0 " + D;
}

function math_Randoms() {
    var E = Math.random() * 100;
     document.getElementById("Math10").innerHTML = "Here is a number between 1 and 100 " + E;
 }

 function math_Objects() {
    var F = Math.SQRT2;
     document.getElementById("Math11").innerHTML = "Returns the square root of 2 " + F;
 }

 function math_Round() {
    var G = Math.round(5.578910);
     document.getElementById("Math12").innerHTML = "5.578910 is rounded too " + G;
 }