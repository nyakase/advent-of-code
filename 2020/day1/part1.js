// Commit date: December 16, 2020

const fs = require("fs");
/** The expense report. */
const expenseReport = fs.readFileSync("input.txt").toString("utf-8").split("\n").map(Number);
let solved = false

for (i = 0; i < expenseReport.length; i++) {
  /** The first random number. */
  const firstNumber = expenseReport[i]
  for (h = 0; h < expenseReport.length; h++) {
    /** The second random number. */
    const secondNumber = expenseReport[h]
    if(firstNumber + secondNumber == 2020) {
      console.log(`${firstNumber} and ${secondNumber}\nFinal answer: ${firstNumber * secondNumber}`)
      solved = true
    }
  }
  if(solved == true) break;
}