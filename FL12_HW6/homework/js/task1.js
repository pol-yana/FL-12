// Your code goes here
var a = parseInt(prompt('a=', a));
var b = parseInt(prompt('b=', b));
var c = parseInt(prompt('c=', c));
let d;
const two = 2;
if (isNaN(a) || isNaN(b) || isNaN(c) ||a===0){
  console.log('Invalid input data');
} else {
  const n = 4;
  d = b * b - n * a * c;
}
if (d > 0) {
  let x1 = Math.round((-b + Math.sqrt(d)) / (two * a));
  let x2 = Math.round((-b - Math.sqrt(d)) / (two * a));
  console.log('x1 = ' + x1 + ' and x2 = '+ x2);
} else if (d === 0) {
  let x =Math.round( -b / (two * a));
  console.log('x = ' + x);
} else {
  console.log('No solution');
}
