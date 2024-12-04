// Commit date: December 2, 2023

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("\n\n")
let list = []
let answer = 0

input.forEach(function(line) {
    let full = 0;
    line.split("\n").forEach(function(hungy) {
        full += parseInt(hungy)
    })

    list.push(full)
})
list = list.sort((a, b) => b - a)
answer = (list[0] + list[1] + list[2])
console.log(answer)