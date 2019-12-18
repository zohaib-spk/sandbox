function sumNumbers(value,...numbers) {
    return numbers.reduce((prev, current) => prev + current)+value;
}

let numbers = [1, 2, 3];
console.log(sumNumbers(4, ...numbers));