const prompt = require("prompt-sync")();

let minutes = parseInt(prompt("Enter Minutes: "));

console.log(`${minutes} minutes = ${minutes * 60} seconds`);