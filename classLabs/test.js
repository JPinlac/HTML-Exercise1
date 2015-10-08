var squareRegular = function(x) {
  return x*x;
}

var squareFunction = function(x) {
  return Math.pow(x,2);
}

var squareRecursion = function(x) {
  if(x==0){
    return 0;
  }
  else{
    return (((x-1)*(x-1)) + (2*x) - 1)
  }
}

var squareLoop = function(x) {
  var total = 0;
  for( var i = 0; i<x;i++) {
    total = x + total;
    console.log(total);
  };
  return total;
}

console.log(squareRegular(2));
console.log(squareFunction(3));
console.log(squareRecursion(5));
console.log(squareLoop(6));