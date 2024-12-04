// Commit date: December 5, 2023

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("\n")
let answer = 0;
let numbers = []

function findDiagonals(params) {
    if(!isNaN(params.prevLineChars[params.char - 1])) pursueNumber(params.char - 1, params.prevLineChars)
    if(!isNaN(params.prevLineChars[params.char])) pursueNumber(params.char, params.prevLineChars)
    if(!isNaN(params.prevLineChars[params.char + 1])) pursueNumber(params.char + 1, params.prevLineChars)

    if(!isNaN(params.lineChars[params.char - 1])) pursueNumber(params.char - 1, params.lineChars)
    if(!isNaN(params.lineChars[params.char])) pursueNumber(params.char, params.lineChars)
    if(!isNaN(params.lineChars[params.char + 1])) pursueNumber(params.char + 1, params.lineChars)

    if(!isNaN(params.nextLineChars[params.char - 1])) pursueNumber(params.char - 1, params.nextLineChars)
    if(!isNaN(params.nextLineChars[params.char])) pursueNumber(params.char, params.nextLineChars)
    if(!isNaN(params.nextLineChars[params.char + 1])) pursueNumber(params.char + 1, params.nextLineChars)
}

function pursueNumber(loc, line) {
    let number = line[loc];

    if(!isNaN(line[loc - 1])) number = line[loc - 1] + number;
    if(!isNaN(line[loc + 1])) number = number + line[loc + 1];

    if(!isNaN(line[loc - 1]) && !isNaN(line[loc - 2])) number = line[loc - 2] + number;
    if(!isNaN(line[loc + 1]) && !isNaN(line[loc + 2])) number = number + line[loc + 2];

    if(numbers[numbers.length-1] !== number) numbers.push(number)
}

for (let i = 0; i < input.length; i++) {
    const prevLine = input[i - 1];
    const line = input[i];
    const nextLine = input[i + 1];

    const prevLineChars = prevLine?.split("");
    const lineChars = line.split("");
    const nextLineChars = nextLine?.split("");

    for (let j = 0; j < lineChars.length; j++) {
        if(/[*$=#@%/&+-]/.test(lineChars[j])) {
            findDiagonals({
                char: j,
                prevLineChars,
                lineChars,
                nextLineChars
            })
        }
    }
}

numbers.forEach(function(number) {
    answer += parseInt(number);
})
console.log(answer)