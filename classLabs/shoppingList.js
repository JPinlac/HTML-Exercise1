var a = {
    name: 'Milk',
    price: 1.1,
    quantity: function(quantity) {
        return quantity;
    }
}

var b = {
    name: 'Chocolate',
    price: 3.7,
    quantity: function(quantity) {
        return quantity;
    }
}

var c = {
    name: 'Magazine',
    price: 7.5,
    quantity: function(quantity) {
        return quantity;
    }
}

var d = {
    name: 'Candy',
    price: .78,
    quantity: function(quantity) {
        return quantity;
    }
}

var list = [a,b,c,d];
console.log(list)