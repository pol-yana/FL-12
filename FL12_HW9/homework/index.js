// Your code goes here
//task1
function convert(args) {
  let arr = [];
  for (let i = 0; i<args.length; i++) {
    console.log(args[i]);
    if (typeof args[i] === 'string') {
      arr.push(parseInt(args[i]));
    } else {
      arr.push(args[i].toString());
    }
  }
  return arr;
}
convert(6, '8', 3, '9');

//task2
function multiply(arr) {
  arr.forEach(element => console.log(element * 2));
}
