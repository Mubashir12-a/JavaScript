const prompt = require("prompt-sync")();

let num = parseFloat(prompt("Enter Number: "));

let cube = num * num * num;

console.log(`Cube of ${num} is: ${cube}`);