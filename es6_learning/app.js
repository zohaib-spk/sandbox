class Rectangle {
    constructor(height, width) {
        this.name = 'Rectangle';
        this.height = height;
        this.width = width;
    }

    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }

    get area() {
        return this.height * this.width;
    }

    set area(value) {
        this._area = value;
    }
}

class Square extends Rectangle {
    constructor(length) {
        super();
        // Here, it calls the parent class's constructor with lengths
        // provided for the Rectangle's width and height


        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        this.name = 'Square';
        this.length=length;
    }
}

var user = new Square(23);
console.log(user.length);
console.log(user.name);