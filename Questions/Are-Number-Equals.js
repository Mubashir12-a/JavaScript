const prompt = require("prompt-sync")();

let a = parseInt(prompt("Enter Number-1: "));
let b = parseInt(prompt("Enter Number-2: "));

function check(a,b){
    if(a == b){
        return true;
    }
    else{
        return false;
    }
}

console.log(check(a,b));