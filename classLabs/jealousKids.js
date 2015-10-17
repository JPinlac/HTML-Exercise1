// var sibling1 = {
//     name: "Steve",
//     speak: function (sibling) {
//         return "I'm better than " + sibling.name + " because I, " + this.name + ", is taller.";
//     } 
// }

// var sibling2 = {
//     name: "Joseph",
//     speak: function (sibling) {
//         return "I'm better than " + sibling.name + " because I, " + this.name + ", is shorter.";
//     }
// }

// console.log( sibling1.speak(sibling2) );
// console.log( sibling2.speak(sibling1) );

var Sibling = function(name) {
    this.name = name;
    this.speak = function (sibling) {
        return "I'm better than " + sibling.name + " because I, " + this.name + ", is taller.";
    };
}

var sibling1 = new Sibling("Sarah");
var sibling2 = new Sibling("Ashley");

console.log( sibling1.speak(sibling2) );
console.log( sibling2.speak(sibling1) );

// console.log( sibling1.speak(sibling2) );
// console.log( sibling2.speak(sibling1) );