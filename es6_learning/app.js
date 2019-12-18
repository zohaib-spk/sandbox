let items = new Set(['one', 'two', 'three']);
console.log(items);  // [one,two,three]


items.add('three');
console.log(items);  // [one,two,three]


items.add('four');
console.log(items);  // [one,two,three,four]

items.delete('four');
console.log(items);  // [one,two,three]

console.log(items.size);//3


console.log('items has 4?',items.has('four'));

items.forEach((item) => console.log(item));

items.clear();
console.log(items);

