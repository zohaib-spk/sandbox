function getPerson() {
    let name = 'zohaib Akram';
    let age = 24;
    return {
        name, age, great() {
            return `hello, ${this.name}`;
        }
    }
}

let person = {
    name: 'zohaib Akram',
    age: 24,
};

let {name, age} = person;

console.log(name);

console.log(getPerson().great());