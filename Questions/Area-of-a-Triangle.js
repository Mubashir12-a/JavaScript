const prompt = require("prompt-sync")();

let base = parseFloat(prompt("Enter base: "));
let height = parseFloat(prompt("Enter height: "));

let area = (base * height) / 2;

console.log("Area of triangle =",area);