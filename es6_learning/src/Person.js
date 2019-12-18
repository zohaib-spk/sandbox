function defaultDiscount() {
    return .10;
}

function applyDiscount(cost, discount = defaultDiscount()) {
    return cost - (cost * discount);
}

alert(applyDiscount(100));