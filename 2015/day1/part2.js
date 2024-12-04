// Commit date: December 2, 2023

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("")
let answer = 0;

for (let i = 0; i < input.length; i++) {
    if(input[i] === "(") answer += 1;
    if(input[i] === ")") answer -= 1;

    if(answer === -1) {
        console.log(i + 1)
        break;
    }
}