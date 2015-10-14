function ShoppingList (name, price, quantity) {
    this.name =  name;
    this.price = price;
    this.quantity = quantity;
}

var a = new ShoppingList("Milk", 2, Math.floor(Math.random()*10)+1);
var b = new ShoppingList("Candy", 1, Math.floor(Math.random()*10)+1);
var c = new ShoppingList("Magazine", 7, Math.floor(Math.random()*10)+1);
var d = new ShoppingList("Chocolate", 2, Math.floor(Math.random()*10)+1);

var list = [a,b,c,d];

var total=0;
for (var item in list) {
    console.log(list[item].price * list[item].quantity)
    total += list[item].price * list[item].quantity;
}

console.log(total);