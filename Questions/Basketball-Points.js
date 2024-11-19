const prompt = require("prompt-sync")();

// You are counting points for a basketball game, 
// given the amount of 2-pointers scored and 3-pointers scored,
// find the final points for the team and return that value.

let p_2 = parseInt(prompt("Enter 2-Pointers Score: "));
let p_3 = parseInt(prompt("Enter 3-Pointers Score: "));

p_2 = p_2 * 2;
p_3 = p_3 * 3;

let total = p_2 + p_3;

console.log("Total points: ",total);
