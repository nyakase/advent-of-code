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
    for (j = 0; j < expenseReport.length; j++) {
      /** The third random number. */
      const thirdNumber = expenseReport[j]
      if(firstNumber + secondNumber + thirdNumber == 2020) {
        console.log(`${firstNumber}, ${secondNumber}, and ${thirdNumber}\nFinal answer: ${firstNumber * secondNumber * thirdNumber}`)
        solved = true
      }
      if(solved == true) break;
    }
    if(solved == true) break;
  }
  if(solved == true) break;
}