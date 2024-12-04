// Commit date: December 2, 2023

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("\n")
let answer = 0;


input.forEach(function(line) {
    const game = parseInt(line.split("Game ")[1].split(":")[0])
    const sets = line.split("Game ")[1].split(": ")[1].split("; ")

    let cubes = {red: 0, green: 0, blue: 0}
    sets.forEach(function(set) {
        set.split(", ").forEach(function(cube) {
            const cubeCount = cube.split(" ")[0]
            const currentCubeCount = cubes[cube.split(" ")[1]]

            if(currentCubeCount < cubeCount) cubes[cube.split(" ")[1]] = parseInt(cube.split(" ")[0])
        })
    })

    answer += (cubes.red * cubes.green * cubes.blue)
})

console.log(answer)