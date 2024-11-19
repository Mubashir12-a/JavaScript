const prompt = require("prompt-sync")();

let base = parseInt(prompt("Enter Base: "));
let perpendicular = parseInt(prompt("Enter perpendicular: "));

let Max_Edge = (base + perpendicular) - 1;

console.log("Max Edge Of Triangle is: ", Max_Edge);