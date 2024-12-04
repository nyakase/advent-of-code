// Commit date: December 17, 2020

const fs = require("fs")
/** The batch of passports, containing all the passports in the batch. */
const passportBatch = fs.readFileSync("input.txt").toString("utf-8").split("\r\n").join(' ').split('  ').map(String);
/** The required fields. */
const requiredFields = [
    'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'
];
/** Validation for the required fields. */
function validate([key, value]) {
    const validation = {
        byr: (v) => v >= 1920 && v <= 2002,
        iyr: (v) => v >= 2010 && v <= 2020,
        eyr: (v) => v >= 2020 && v <= 2030,
        hgt: (v) => {
            const [_, num, unit] = v.match(/^(\d+)(cm|in)$/) || []
            if (unit == 'cm') {
              return num >= 150 && num <= 193
            } else if (unit == 'in') {
              return num >= 59 && num <= 76
            }
        },
        hcl: (v) => v.match(/#[a-f0-9]{6}/) == true,
        ecl: (v) => v.match(/(amb|blu|brn|gry|grn|hzl|oth)/) == true,
        pid: (v) => v.match(/\d{9}/) == true
    }
    const f = () => true
    const valid = (validation[key] || f)(value)
    if(key == "ecl") console.log(`${key}, ${value}, ${valid}`)
    return valid
}
let validPassports = 0;

for (let i = 0; i < passportBatch.length; i++) {
    const passport = passportBatch[i];
    const fields = passport.match(/[a-z]+:[a-z0-9#]+/g).map(m => m.split(':'))
    const isInPassport = (stringy) => passport.includes(stringy);
    if (requiredFields.every(isInPassport)) {
        for (let j = 0; j < fields.length; j++) {
            if(validate([fields[j][0], fields[j]][1]) == true) validPassports += 1
        }
    }
}

console.log(`There are ${validPassports} valid passports.`)
