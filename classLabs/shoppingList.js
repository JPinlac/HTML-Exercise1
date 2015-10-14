var a = {
    name: 'Milk',
    price: 2,
    itemTotal: function(quantity) {
        return this.price * quantity;
    }
}

var b = {
    name: 'Chocolate',
    price: 3,
    itemTotal: function(quantity) {
        return  this.price * quantity;
    }
}

var c = {
    name: 'Magazine',
    price: 7,
    itemTotal: function(quantity) {
        return  this.price * quantity;
    }
}

var d = {
    name: 'Candy',
    price: 1,
    itemTotal: function(quantity) {
        return  this.price * quantity;
    }
}

var list = [a,b,c,d];
console.log(list);

var total = 0;

for (var i = 0; i < list.length; i++) {

    var quantity = Math.floor(Math.random()*10);

    console.log(list[i].itemTotal(quantity))
    total += list[i].itemTotal(quantity);
    // total += list[i].price * quantity(quantity)

}


console.log(total)