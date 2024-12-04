// Commit date: December 2, 2023

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("")
let answer = 0;

input.forEach(function(character) {
    if(character === "(") answer += 1;
    if(character === ")") answer -= 1;
})

console.log(answer)