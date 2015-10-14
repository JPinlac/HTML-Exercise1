function perfectSquare(beginning, end) {
    var count = 0;
    for ( var i = beginning; i <= end; i++) {
        if((Math.sqrt(i)%1) === 0)
            count++;
    }
    return count;
}

console.time("1");
console.log(perfectSquare(4,17));
console.log(perfectSquare(0,42));
console.log(perfectSquare(1,1000000));
console.timeEnd("1");

function perfectSquare2(beginning, end) {
    var count = 0;
    var testVar = 0;
    while(testVar * testVar <= end) {
        if((testVar*testVar) >= beginning)
            count++;
        testVar++;
    }
    return count;
}

console.time("2");
console.log(perfectSquare2(4,17));
console.log(perfectSquare(0,42));
console.log(perfectSquare(1,1000000));
console.timeEnd("2");