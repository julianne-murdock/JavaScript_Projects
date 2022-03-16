document.write(typeof "Word", "<br>"); //type of word
document.write(typeof 3, "<br>"); //type of number
document.write("10" + 5);

function NAN() { //NAN
    document.getElementById("Test").innerHTML = 0/0;
}

function isTrue() { //NAN true
    document.getElementById("Test1").innerHTML = isNaN('This is a string');
}

function isFalse() { //NAN false
    document.getElementById("Test2").innerHTML = isNaN('007');
}
document.write("<br>")
document.write(2E310, "<br>"); //infinity
document.write(-3E310, "<br>"); //-infinity
document.write(10 > 2, "<br>"); //boolean true
document.write(10 < 2, "<br>"); //boolean false

console.log(2 + 2); //using console
console.log(10 < 2); //console boolean

document.write(10 == 10, "<br>"); //== true
document.write(3 == 11, "<br>"); //== false

X = 10;
Y = 10;
document.write(X === Y, "<br>"); //=== true

X = 82;
Y = 52;
document.write(X === Y, "<br>"); //=== false

X = 82;
Y = "82";
document.write(X === Y, "<br>"); //=== false with differenct type

document.write(5 > 2 && 10 > 4, "<br>"); //And true
document.write(5 > 10 && 10 > 4, "<br>"); //And false
document.write(5 > 10 || 10 > 4, "<br>"); // Or true
document.write(5 > 10 || 10 > 20, "<br>"); //Or false

function not_Function() {
    document.getElementById("Not").innerHTML = ! (20 > 10);
}

function not_Function1() {
    document.getElementById("Not1").innerHTML = ! (5 > 10);
}

