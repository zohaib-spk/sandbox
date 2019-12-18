function fire(bool) {
    if (bool) {
        var foo = "bar";
        // let foo = "bar"; block level
        console.log(foo);
    }
    else {
        console.log(foo);
    }
}
fire(false);