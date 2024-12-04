// Commit date: December 2, 2023

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("\n\n")
let answer = 0;

input.forEach(function(line) {
    let full = 0
    line.split("\n").forEach(function(hungy) {
        full += parseInt(hungy);
    })
    if(full > answer) answer = parseInt(full)
})

console.log(answer)