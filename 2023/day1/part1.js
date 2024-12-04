// Commit date: December 2, 2023

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("\n")
let answer = 0;

input.forEach(function(line) {
    let numbers = []
    line.split("").forEach(function(character) {
        if(!isNaN(character)) numbers.push(character)
    })

    const result = parseInt(numbers[0] + numbers[numbers.length-1]);
    answer += result;
})

console.log(answer)