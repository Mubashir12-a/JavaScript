const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter num: "));

num = num * num;

console.log("Squared num is:", num);