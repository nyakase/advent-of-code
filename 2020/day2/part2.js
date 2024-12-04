// Commit date: December 16, 2020

const fs = require("fs")
/** The password database, containing all the passwords. */
const passwordDatabase = fs.readFileSync("input.txt").toString("utf-8").split("\n").map(String);
let correctPasswords = 0;

for (i = 0; i < passwordDatabase.length; i++) {
  /** The password. */
  const password = passwordDatabase[i].split(": ")[1]
  /** The password policy. */
  const policy = {
    firstPos: parseInt(passwordDatabase[i].split(": ")[0].split(" ")[0].split("-")[0]) - 1,
    secondPos: parseInt(passwordDatabase[i].split(": ")[0].split(" ")[0].split("-")[1]) - 1,
    /** The letter that firstPos and secondPos are referring to. */
    letter: passwordDatabase[i].split(": ")[0].split(" ")[1]
  }
  const passwordSplit = password.split("").map(String);
  const sameLettersAtBoth = passwordSplit[policy.firstPos] == passwordSplit[policy.secondPos]
  const validated = passwordSplit[policy.firstPos] == policy.letter && sameLettersAtBoth == false || passwordSplit[policy.secondPos] == policy.letter && sameLettersAtBoth == false
  if (validated) {
    correctPasswords += 1
  }
}

console.log(`${correctPasswords} valid passwords!`)
