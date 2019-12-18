function* numbers() {
    console.log('begin');
    yield 1;
    yield 2;
    yield 3;
}

var iterator = numbers();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);