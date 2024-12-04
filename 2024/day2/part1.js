// Last edit: December 2, 2024

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("\n");
let answer = 0;

input.forEach(function(line) {
	if(line === "") return;
	const numbers = line.split(" ").map(Number);
	const isBulging = numbers[0] < numbers[1];
	for(const i in numbers) {
		const currentNum = numbers[i];
		const nextNum = numbers[parseInt(i)+1];
		const diff = Math.abs(currentNum-nextNum);
		if(!nextNum) break;
		if(diff < 1 || diff > 3) return;
		if(isBulging && nextNum < currentNum) return;
		if(!isBulging && nextNum > currentNum) return;
	}

	answer += 1;
})

console.log(answer);
