const prompt = require("prompt-sync")();

// Create a program that takes voltage and current and returns the calculated power:

let current = parseFloat(prompt("Enter current: "));
let voltage = parseFloat(prompt("Enter Voltage: "));

let power = current * voltage;

console.log("Power is:", power,"Watts");