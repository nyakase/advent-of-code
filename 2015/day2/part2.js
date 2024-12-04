// Commit date: December 2, 2023

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("\n")
let answer = 0;

input.forEach(function(line) {
    const dimensions = line.split("x")

    // TODO: Wrong calculation
    const surface = (
        (parseInt(dimensions[0]) + parseInt(dimensions[0]) + parseInt(dimensions[1]) + parseInt(dimensions[1])) +
        (parseInt(dimensions[0]) * parseInt(dimensions[1]) * parseInt(dimensions[2]))
    )

    answer += surface
})

console.log(answer)