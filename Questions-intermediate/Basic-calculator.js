const prompt = require("prompt-sync")();


let a = parseFloat(prompt("Enter Num-1: "))
let b = parseFloat(prompt("Enter Num-2: "))
let operator = prompt("Enter operator without spaces: ")


if(operator == "*"){
    console.log(a * b);
}
else if(operator == "+"){
    console.log(a + b);
}
else if(operator == "-"){
    console.log(a - b);
}
else if(operator == "/"){
    console.log(a / b);
}
else{
    console.log("Invalid operator")
}