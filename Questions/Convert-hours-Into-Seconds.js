const prompt = require("prompt-sync")();

let hours = parseInt(prompt("Enter Hours: "));

console.log(hours,"hours are equal to",(hours * 60 * 60),"seconds");