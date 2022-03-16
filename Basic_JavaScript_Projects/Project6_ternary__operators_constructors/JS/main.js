function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Height1, Can_ride1;
    Height1 = document.getElementById("Height1").value;
    Can_ride1 = (Height1 < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_ride1 + " to vote.";
}

function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function keyword_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year + ".";
}

function Career (College, Major, Grade, Job) {
    this.Career_College = College;
    this.Career_Major = Major;
    this.Career_Grade = Grade;
    this.Career_Job = Job;
}
var Ben = new Career ("Berry College", "Software Developer", "Junior", "Full Stack Junior Developer at Google");
var Holly = new Career ("University of Tennessee", "Animator", "Senior", "Dinsey Animation Studios animator");
var James = new Career ("University of Georgia", "Photographer", "Freshman", "Disney Wedding Photographer");
function newkeyword_Function() {
    document.getElementById("New_and_This").innerHTML = 
    "James goes to " + James.Career_College + " to become a " + James.Career_Major + 
    "! He is a  " + James.Career_Grade + ", who wants to work as a " + James.Career_Job + ".";
}

//var C = function;  //It does not work :)
//document.write(C);

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}