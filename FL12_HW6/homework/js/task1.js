// Your code goes here
var a = parseInt(prompt("a=", a));
var b = parseInt(prompt("b=", b));
var c = parseInt(prompt("c=", c));

if (isNaN(a)|| isNaN (b)|| isNaN (c)) {
  alert("Invalid input data");
}else{
var d = b * b - 4 * a * c;
alert("D=" + d);
}
if (d > 0) {
  var x1 = (-b + Math.sqrt(d)) / (2 * a);
  var x2 = (-b - Math.sqrt(d)) / (2 * a);
  alert("x1 = " + x1);
  alert("x2 = " + x2);
}else if(d == 0) {
  var x = -b / (2 * a);
  alert("x = " + x);
}else{
  alert ("No solution");
}
