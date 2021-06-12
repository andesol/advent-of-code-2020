const isRighPosition = require('./2.js');

test('check if the position is as expected', () => {
    let lower = 1;
    let upper = 3;
    let letter = 'a';
    let password = 'abcde'

    expect(isRighPosition({lower, upper, letter, password})).toBe(true);


    lower = 1;
    upper = 3;
    letter = 'b';
    password = 'cdefg'

    expect(isRighPosition({lower, upper, letter, password})).toBe(false);

    lower = 2;
    upper = 9;
    letter = 'c';
    password = 'ccccccccc'

    expect(isRighPosition({lower, upper, letter, password})).toBe(false);
})