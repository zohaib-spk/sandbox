function sumNumbers(...numbers) {
    return numbers.reduce((prev, current) => prev + current);
}
console.log(sumNumbers(1, 2, 3));