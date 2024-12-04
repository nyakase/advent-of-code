// Commit date: December 2, 2023

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("\n")
let answer = 0;

input.forEach(function(line) {
    const dimensions = line.split("x")
    const sides = [
        parseInt(dimensions[0]) * parseInt(dimensions[1]),
        parseInt(dimensions[1]) * parseInt(dimensions[2]),
        parseInt(dimensions[2]) * parseInt(dimensions[0])
    ]

    const surface = (
        (2 * sides[0]) +
        (2 * sides[1]) +
        (2 * sides[2]) +
        sides.sort((a, b) => a - b)[0]
    )

    answer += surface
})

console.log(answer)