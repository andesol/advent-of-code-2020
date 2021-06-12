/*
Part 1: Find the two entries that sum to 2020 and then multiply those two numbers together
*/

/**
 * Finds two numbers that sum to 2020 in an array
 * 
 * @param {Array} input - Input values
 * @returns {Array} - Right two numbers
 */
function findTwoTo2020(input) {
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

/**
 * Finds three numbers that sum to 2020 in an array
 * 
 * @param {Array} input - Input values
 * @returns {Array} - Right two numbers
 */
function findThreeTo2020(input) {
    let values;
    let accum;
    input.forEach((item1) => {
        input.forEach((item2) => {
            accum = item1 + item2;
            if (accum < 2020) {
                input.forEach((item3) => {
                    if (item3 + accum === 2020) {
                        values = [item1, item2, item3]; 
                    }
                })
            }
        })
    })

    return values;
}

/**
 * Multiply all numbers in an array
 * 
 * @param {Array<Number>} arr - Numbers to multiply
 */
function multiply(arr) {
    return arr.reduce((a, b) => a * b);
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
    const twoValues = findTwoTo2020(input);
    const threeValues = findThreeTo2020(input);

    const twoMultiplied = multiply(twoValues);
    const threeMultiplied = multiply(threeValues)

    console.log('Two numbers multiplied = ', twoMultiplied)    
    console.log('Three numbers multiplied = ', threeMultiplied)    
})