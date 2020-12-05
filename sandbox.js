function multiply(arr) {
    return arr.reduce((acc, i) => {
        console.log(acc, i)
        return acc * i
    }, 0);
}

console.log(multiply([1,2, 3, 4, 5]))