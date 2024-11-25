var n1 = 12;
var n2 = 12.22;

console.log(Number.isFinite(n1));
console.log(Number.isFinite(n2));

console.log(Number.isInteger(n1));
console.log(Number.isInteger(n2));

console.log(Number.parseFloat(n1));
console.log(Number.parseFloat(n2));

console.log(Number.parseInt(n1));
console.log(Number.parseInt(n2));

console.log(n1.toExponential(5));
console.log(n2.toExponential(5));

console.log(n1.toFixed(5));
console.log(n2.toFixed(5));

console.log(n1.toPrecision(5));
console.log(n2.toPrecision(5));

var newnum = n1.toString()
console.log(Number.isInteger(newnum));


