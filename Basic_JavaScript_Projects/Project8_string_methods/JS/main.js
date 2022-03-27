function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2,part_3,part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy";
    var Section = Sentence.slice(27,33);
    document.getElementById("slice").innerHTML = Section;
}
function upper_Method() {
    let text = "Hello World!";
    let result = text.toUpperCase();
    document.getElementById("demo").innerHTML = result;
}
function search_Method() {
    let text = "Mr. Blue has a blue house";
    let position = text.search("Blue");
    document.getElementById("demo1").innerHTML = position;
}
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
function toFixed_Method() {
    var X = 12938.3012987376112;
    document.getElementById("toFixed").innerHTML = X.toFixed();
}
function valueof_Method() {
    let text = 12938.3012987376112;
    document.getElementById("valueof").innerHTML = text.valueOf();
}