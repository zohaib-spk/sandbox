function* range(start, end) {
    while (start <= end) {
        yield start;
        start++;
    }
}

let iterator = range(1, 5);
console.log(...[...range(1, 5)]);
for (let i of iterator) console.log(i);