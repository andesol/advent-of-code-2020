/*
Part 1: Find the two entries that sum to 2020 and then multiply those two numbers together
*/

/**
 * Finds two numbers that sum to 2020 in an array
 * @param {Array} input - Input values
 * @returns {Array} - Right two numbers
 */
function findSumTo2020(input) {
    let values;
    input.forEach((item1) => {
        input.forEach((item2) => {
            if (item1 + item2 === 2020) {
                values = [item1, item2];
            }
        })
    })

    return values;
}

// Read txt file
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('./1.data.txt'),
    output: process.stdout,
});

let input = [];

// Store items in an array
rl.on('line', (line) => {
    input.push(Number(line));
});

rl.on('close', () => {
    const values = findSumTo2020(input);

    const multiplied = values[0] * values[1];

    console.log('Numbers multiplied = ', multiplied)    
})