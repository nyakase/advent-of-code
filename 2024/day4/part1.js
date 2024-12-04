// Last edit: December 4, 2024

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("\n").map(line => line.split(""));
const order = ["X","M","A","S"];
let answer = 0;

for(const i in input) {
	for(const j in input[i]) {
		if(input[i][j] === "X") {
			console.log("starting search at",i,j)
			search(parseInt(i), parseInt(j))
		}
	}
}

function search(line, char, dir) {
	const searchFor = order[order.indexOf(input[line][char])+1]
	console.log(line,char,input[line][char],dir||"");
	if(!searchFor) {
		console.log("found!");
		return answer+=1
	}

	if(input[line][char+1] === searchFor && (!dir || dir == "right")) search(line,char+1,"right");
	if(input[line][char-1] === searchFor && (!dir || dir == "left")) search(line,char-1,"left");
	if(input[line+1]?.[char] === searchFor && (!dir || dir == "down")) search(line+1,char,"down");
	if(input[line+1]?.[char+1] === searchFor && (!dir || dir == "diagdownright")) search(line+1,char+1,"diagdownright");
	if(input[line+1]?.[char-1] === searchFor && (!dir || dir == "diagdownleft")) search(line+1,char-1,"diagdownleft");
	if(input[line-1]?.[char] === searchFor && (!dir || dir == "up")) search(line-1,char,"up");
	if(input[line-1]?.[char+1] === searchFor && (!dir || dir == "diagupright")) search(line-1,char+1,"diagupright");
	if(input[line-1]?.[char-1] === searchFor && (!dir || dir == "diagupleft")) search(line-1,char-1,"diagupleft");
}

console.log(answer);
