const fs = require("fs");
const input = fs.readFileSync("input.txt").toString("utf-8").split("\n").map(line => line.split(""));
const order = ["1","2","3","4","5","6","7","8","9"];
let answer = 0;

for(const i in input) {
    for(const j in input[i]) {
        if(input[i][j] === "0") {
            console.log("starting search at",i,j)
            search(parseInt(i), parseInt(j))
        }
    }
}

function search(line, char,dir) {
    const searchFor = order[order.indexOf(input[line][char])+1]
    console.log(line,char,input[line][char]||"",dir);
    if(!searchFor) {
        console.log("found!");
        return answer+=1
    }

    if(input[line][char+1] === searchFor) search(line,char+1,"right");
    if(input[line][char-1] === searchFor) search(line,char-1,"left");
    if(input[line+1]?.[char] === searchFor) search(line+1,char,"down");
    if(input[line-1]?.[char] === searchFor) search(line-1,char,"up");
    if(input[line][char+1] !== searchFor && input[line][char-1] !== searchFor && input[line+1]?.[char] !== searchFor && input[line-1]?.[char] !== searchFor) console.log("^ dead end")
}

console.log(answer);