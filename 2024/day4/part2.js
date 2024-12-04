// Last edit: December 4, 2024

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("\n").map(line => line.split(""));
let answer = 0;

for(let i in input) {
	for(let j in input[i]) {
		if(input[i][j] === "A") {
			i=parseInt(i);j=parseInt(j);
			const topLeft = input[i-1]?.[j-1];
			const topRight = input[i-1]?.[j+1];
			const bottomLeft = input[i+1]?.[j-1];
			const bottomRight = input[i+1]?.[j+1];
			if((topLeft === "M" && bottomRight === "S") || (topLeft === "S" && bottomRight === "M")) {
				if((topRight === "M" && bottomLeft === "S") || (topRight === "S" && bottomLeft === "M")) answer += 1;
			}
		}
	}
}

console.log(answer);
