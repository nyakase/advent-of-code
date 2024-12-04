// Commit date: December 16, 2020

const fs = require("fs")
/** The batch of passports, containing all the passports in the batch. */
const passportBatch = fs.readFileSync("input.txt").toString("utf-8").split("\r\n").join(' ').split('  ').map(String);
/** The required fields. */
const requiredFields = [
    'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'
];
let validPassports = 0;

for (let i = 0; i < passportBatch.length; i++) {
    const passport = passportBatch[i];
    const isInPassport = (stringy) => passport.includes(stringy);
    if (requiredFields.every(isInPassport)) {
        validPassports += 1
    }
}

console.log(`There are ${validPassports} valid passports.`)
