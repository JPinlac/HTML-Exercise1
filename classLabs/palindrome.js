function palindrome(word) {
    var x = 0;
    word = word.toLowerCase();
    while (x<word.length) {
        if(word.charAt(x) !== word.charAt(word.length - x -1))
            return false;
        x++;
    }
    return true;
}

function palindrome2(word) {
    var chara = '';
    var charb = '';
    word = word.toLowerCase();

    for(var i = 0; i < word.length; i++) {
        chara = word[i];
        charb = word[word.length - i -1];
        if(chara !== charb)
            return false;
    }

    return true;
}

function palindrome3(word) {
    word = word.toLowerCase();
    var a = word.split("");
    console.log(a);
    var b = word.split("").reverse();
    console.log(b);

    for(var i = 0; i < word.length; i++){
        if(a[i] !== b[i])
            return false;
    }

    return true;
}

console.log('level method 1 '+ palindrome('level'));
console.log("levels method 1 " + palindrome("levels"));
console.log("Poop method 1 " + palindrome("Poop") + "\n");

console.log('level  method 2 '+ palindrome2('level'));
console.log("levels  method 2 " + palindrome2("levels"));
console.log("Poop  method 2 " + palindrome2("Poop") + "\n");

console.log('level  method 3 '+ palindrome3('level'));
console.log("levels  method 3 " + palindrome3("levels"));
console.log("Poop  method 3 " + palindrome3("Poop"));
