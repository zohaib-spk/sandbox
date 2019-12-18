function sumNumbers(...numbers) {
    return numbers.reduce((prev, current) => prev + current);
}

let numbers = [1, 2, 3, 4, 5, 6];
console.log(sumNumbers(...numbers));