const prompt = require("prompt-sync")();

let Age = parseInt(prompt("Enter Age: "));

function convert(x){
    return x * 365;
}

console.log("Almost Days is: ", convert(Age));