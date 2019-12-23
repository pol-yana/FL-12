// Your code goes here
var a = parseInt(prompt('a=', a));
var b = parseInt(prompt('b=', b));
var c = parseInt(prompt('c=', c));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('Input values should be ONLY numbers ');
} else {
  if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length ');
  } else {
    if (a + b <= c || a + c <= b || b + c <= a) {
      console.log('Triangle doesn’t exist');
    } else if (a === b && a === c) {
      console.log('Equilateral triangle');
    } else if (a === b || a === c || b === c) {
      console.log('Isosceles triangle');
    } else if (a !== b && a !== c && b !== c) {
      console.log('Scalene triangle');
    }
  }
}
