const prompt = require("prompt-sync")();

let integer = parseInt(prompt("Enter Integer: "));

integer = integer + 1;

console.log("The Next Integer is:", integer);