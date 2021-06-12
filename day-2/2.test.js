const isRighPosition = require('./2.js');

describe('check if the position is as expected', () => {

    test('case 1', () => {
        const lower = 1;
        const upper = 3;
        const letter = 'a';
        const password = 'abcde'

        expect(isRighPosition({lower, upper, letter, password})).toBe(true);
    })

    test('case 2', () => {
        const lower = 1;
        const upper = 3;
        const letter = 'b';
        const password = 'cdefg'

        expect(isRighPosition({lower, upper, letter, password})).toBe(false);
    })

    test('case 3', () => {
        const lower = 2;
        const upper = 9;
        const letter = 'c';
        const password = 'ccccccccc'
        expect(isRighPosition({lower, upper, letter, password})).toBe(false);
    })
})