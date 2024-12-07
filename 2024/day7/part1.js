const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("\n")
let answer = 0;

input.forEach(function(line) {
    const toFind = parseInt(line.split(": ")[0])
    const numbers = line.split(": ")[1].split(" ").map(Number);
    // okay i have a terrible idea
    const possibleCombis = numbers.length * 999; // totally arbitrary number because my algo is a bit bugged. it works
    const triedCombis = [];
    for(let _ = 0; _ < possibleCombis; _++) {
        let soFar = 0;
        let combiToDo = "";
        while(combiToDo === "" || triedCombis.filter(combi => combi === combiToDo).length !== 0) {
            combiToDo = "";
            for(let __ = 0; __ < numbers.length; __++) {
                combiToDo += Math.floor(Math.random() * 2) === 0 ? "+" : "*";
            }
        }
        for(let i = 0; i < numbers.length; i++) {
            const operation = combiToDo.split("")[i];
            if(operation === "+") {
                soFar += numbers[i];
            } else {
                soFar = soFar * numbers[i];
            }
        }
        if(soFar === toFind) {
            console.log(line, combiToDo);
            answer += toFind;
            break;
        }
    }
})

console.log(answer);
