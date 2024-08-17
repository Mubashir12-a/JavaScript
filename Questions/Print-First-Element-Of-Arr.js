const prompt = require("prompt-sync")();

let n, arr = [];

n = parseInt(prompt("Enter Size: "));

for(i = 0; i < n; i++){
    arr[i] = parseFloat(prompt(`Enter Arr_Element-${i+1}: `));
}

console.log(`First Element of arr : ${arr[0]}`);