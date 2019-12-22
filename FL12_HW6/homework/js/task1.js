// Your code goes here
var a = parseInt(prompt('a=', a));
var b = parseInt(prompt('b=', b));
var c = parseInt(prompt('c=', c));
let d;
const two=2;
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('Invalid input data');
} else {
  const n = 4;
  d = b * b - n * a * c;
  alert('D=' + d);
}
if (d > 0) {
  let x1 = (-b + Math.sqrt(d)) / (two * a);
  let x2 = (-b - Math.sqrt(d)) / (two * a);
  alert('x1 = ' + x1);
  alert('x2 = ' + x2);
} else if (d === 0) {
  let x = -b / (two * a);
  alert('x = ' + x);
} else {
  alert('No solution');
}
