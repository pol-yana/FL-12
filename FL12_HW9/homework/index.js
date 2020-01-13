// Your code goes here
//task1
function convert(...args) {
  let arr = [];
  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] === "string") {
      arr.push(parseInt(args[i]));
    } else {
      arr.push(args[i].toString());
    }
  }
  return arr;
}
convert("1", 2, 3, "4");

//task2
function executeforEach(arr, callback) {
  arr.forEach(el => callback(el));
}
executeforEach([1, 2, 3], function(el) {
  console.log(el * 2);
});

//task3
function mapArray(arr, callback) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      result.push(callback(Number(arr[i])));
    } else {
      result.push(callback(arr[i]));
    }
  }
  return result;
}
mapArray([2, "5", 8], function(el) {
  return el + 3;
});

//task4
function filterArray(arr, callback) {
  arr.forEach(el => callback(el));
}
filterArray([2, 5, 8], function(el) {
  return el % 2 === 0;
});

//task5
function flipOver(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
flipOver("hey world");
