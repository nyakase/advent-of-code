// Last edit: December 3, 2024

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8");
let answer = 0;

const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
input.matchAll(regex).forEach(function(match) {
	answer += parseInt(match[1]) * parseInt(match[2]);
})

console.log(answer);
