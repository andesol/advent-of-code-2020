const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '2.data.txt')

const result = fs.readFileSync(file, 'utf-8');

const list = result.split('\r\n');

let count1 = 0, count2 = 0;

list.forEach(line => {
    
    const [condition, password] = line.split(': '); // Split colon and space!
    const [range, letter] = condition.split(' ');
    const [lower, upper] = range.split('-');
    const passwordPolicy = {lower, upper, letter, password};

    // Part 1
    const repeated = findIfRepeated(passwordPolicy);

    if (repeated) {
        count1 += 1;
    }

    // Part 2
    const rightPosition = isRighPosition(passwordPolicy)

    if (rightPosition) {
        count2 += 1;
    }
})

console.log(`Answer to part 1: ${count1}`)
console.log(`Answer to part 2: ${count2}`)

function findIfRepeated ({lower, upper, letter, password}) {
    const regex = new RegExp(letter, "g");
    const arrayOfLetters = password.match(regex) || [];
    const numberOfLetters = arrayOfLetters.length

    return numberOfLetters >= lower  && numberOfLetters <= upper
}

function isRighPosition({lower, upper, letter, password}) {
    
    if (password[lower-1] === letter && password[upper-1] === letter) {
        return false;
    } else if(password[lower-1] !== letter && password[upper-1] !== letter) {
        return false;
    } else {
        return true;
    }
}

module.exports = isRighPosition;