// alert("working");

//////////////////////////////////////////////////////////////////////////////////

document.write("<h1>JavaScript for Beginners</h1><hr>");

////////////////////////////////////////////////////////////////////////////////// 

document.write("<h2>document.write</h2><hr>");

// Local

document.write("Local: ");

function hello(name) {
	var name = "Matteo";
	console.log("Hi, " + name);
	document.write("Hi, " + name);
}

hello(name);
console.log(hello);

//////////////////////////////////////////////////////////////////////////////////
document.write("<br>");

// Global

document.write("Global: ");

var name = "Matteo";

function hello(name) {
	console.log("Hi, " + name);
	document.write("Hi, " + name);
}

hello(name);

//////////////////////////////////////////////////////////////////////////////////
document.write("<hr>");

document.write("<h2>Variables</h2>");
document.write("<hr>");

document.write("<h3>Number</h3>");

var myNumber = 16;

myNumber = myNumber + 5;

document.write(myNumber);
console.log(typeof myNumber);

document.write("<h3>String</h3>");

var completeName = "Soresini";

completeName = completeName + " " + "Matteo";

document.write(completeName);
console.log(typeof completeName);

document.write("<h3>Booleans</h3>");

var readyToWork = true;
var notReady = false;

document.write(readyToWork);
document.write("<br>");
document.write(notReady);
console.log(typeof notReady);

//////////////////////////////////////////////////////////////////////////////////
document.write("<hr>");

document.write("<h2>Arrays</h2>");
document.write("List of variables");
document.write("<hr>");

var names = ["Matteo ", "Bill ", "Steve"];
document.write(names);
console.log(names);

document.write("<br><br>");

var dateOfBirth = [05 , 11 , 1990];
document.write(dateOfBirth);
console.log(dateOfBirth);

var index = ["Matteo", 26, "Turin", true];
document.write("<br><br>");
document.write(index[0] + " from " + index[2] + "?" + " Yes, " + index[3]);
console.log(index);

//////////////////////////////////////////////////////////////////////////////////
document.write("<hr>");

document.write("<h2>Objects</h2>");
document.write("JSON (JavaScript Object Notation) - key/value");
document.write("<hr>");

var person = {
	"name"     : "Matteo",
	"age"      : 26,
	"isFamous" : false
};

document.write(person.name + " is " + person.age + " and do you think is famous? " + person.isFamous);
console.log(person);







