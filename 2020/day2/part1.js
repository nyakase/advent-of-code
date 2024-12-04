// Commit date: December 16, 2020

const fs = require("fs")
/** The password database, containing all the passwords. */
const passwordDatabase = fs.readFileSync("input.txt").toString("utf-8").split("\n").map(String);
let letterCount = 0;
let correctPasswords = 0;

for (i = 0; i < passwordDatabase.length; i++) {
  /** The password. */
  const password = passwordDatabase[i].split(": ")[1]
  /** The password policy. */
  const policy = {
    /** The minimum amount of the letter. */
    min: parseInt(passwordDatabase[i].split(": ")[0].split(" ")[0].split("-")[0]),
    /** The maximum amount of the letter. */
    max: parseInt(passwordDatabase[i].split(": ")[0].split(" ")[0].split("-")[1]),
    /** The letter that min and max are referring to. */
    letter: passwordDatabase[i].split(": ")[0].split(" ")[1]
  }
  for (j = 0; j < password.length; j++) {
    const passwordSplit = password.split("").map(String);
    if(passwordSplit[j] == policy.letter) {
      letterCount += 1
    }
  }
  if (letterCount > policy.max || letterCount < policy.min) {
    letterCount = 0
  } else {
    correctPasswords += 1
    letterCount = 0
  }
}

console.log(`${correctPasswords} valid passwords!`)