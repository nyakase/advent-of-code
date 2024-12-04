// Last edit: December 1, 2024

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("\n").map(line => line.split("   "))
let answer = 0;
let leftSide = [];
let rightSide = [];

input.forEach(function(line) {
	if(line.length < 2) return;
	leftSide.push(line[0]); rightSide.push(line[1]);
})

leftSide = leftSide.map(Number).sort();
rightSide = rightSide.map(Number).sort();

leftSide.forEach(function(number) {
	answer += number * rightSide.filter(side => number === side).length;
})

console.log(answer);
