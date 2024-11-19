const prompt = require("prompt-sync")();

let x = parseInt(prompt("Enter Num-1: "));
let y = parseInt(prompt("Enter Num-2: "));

let remainder = x % y;

console.log("Remainder is:",remainder);