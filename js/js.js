// alert("working");

document.write("<h1>document.write</h1><hr>");

// Local

document.write("Local: ");

function hello(name) {
	var name = "Matteo";
	console.log("Hi, " + name);
	document.write("Hi, " + name);
}

hello(name);
console.log(hello);

document.write("<hr>");

// Global

document.write("Global: ");

var name = "Matteo";

function hello(name) {
	console.log("Hi, " + name);
	document.write("Hi, " + name);
}

hello(name);