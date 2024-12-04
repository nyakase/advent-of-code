// Last edit: December 2, 2024

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("\n");
let answer = 0;

input.forEach(function(line) {
	if(line === "") return;
	const numbers = line.split(" ").map(Number);
	let problemDampened = false;
	function parseLine(numbers) {
		for(const i in numbers) {
			const currentNum = numbers[i];
			const nextNum = numbers[parseInt(i)+1];
			if(!nextNum) return true;

			const diff = Math.abs(currentNum-nextNum);
			const diffDanger = diff < 1 || diff > 3;
			const isBulging = numbers[0] < numbers[1];
			const trendMismatch = isBulging ? nextNum < currentNum : nextNum > currentNum;

			const problem = diffDanger || trendMismatch
			if(problem && problemDampened) { return false; } else if (problem) {
				problemDampened = true;
				let stompSuccess = false;
				for(const i in numbers) {
					stompSuccess = parseLine(numbers.filter((num, index) => index != i));
					if(stompSuccess) break;
				}
				return stompSuccess;
			}
		}
	}

	if(parseLine(numbers)) answer += 1;
})

console.log(answer);
