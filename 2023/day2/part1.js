// Commit date: December 2, 2023

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("\n")
let answer = 0;


input.forEach(function(line) {
    const game = parseInt(line.split("Game ")[1].split(":")[0])
    const sets = line.split("Game ")[1].split(": ")[1].split("; ")
    let impossible = false

    sets.forEach(function(set) {
        let cubes = {red: 0, green: 0, blue: 0}
        set.split(", ").forEach(function(cube) {
            cubes[cube.split(" ")[1]] += parseInt(cube.split(" ")[0])
        })
        if(cubes.red > 12 || cubes.green > 13 || cubes.blue > 14) {
            impossible = true
        }
    })

    if(!impossible) {
        answer += game;
    }
})

console.log(answer)