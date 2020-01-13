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
function executeforEach(arr, func) {
  arr.forEach(el => func(el));
}
executeforEach([1, 2, 3], function(el) {
  console.log(el * 2);
});

//task3
function mapArray(arr, func) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      result.push(func(Number(arr[i])));
    } else {
      result.push(func(arr[i]));
    }
  }
  return result;
}
mapArray([2, "5", 8], function(el) {
  return el + 3;
});

//task4
function filterArray(arr, callback) {
  let filteredArr = [];
  executeforEach(arr, elem => callback(elem) ? filteredArr.push(elem) : "");
  return filteredArr;
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

//task6
function makeListFromRange(arr) {
  var n = arr[0];
  var result = [];
  while (n <= arr[1]) {
    result.push(n);
    n++;
  }
  return result;
}
makeListFromRange([2, 7]);

//task7
const actors = [
  { name: "tommy", age: 36 },
  { name: "lee", age: 28 }
];

function getArrayOfKeys(arr, key) {
  let arrOfKeys = [];
  executeforEach(arr, elem => {
    arrOfKeys.push(elem[key]);
  });
  return arrOfKeys;
}
getArrayOfKeys(actors, "name");

//task8
function substitute(arr) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 30) {
      result.push(arr[i]);
    } else {
      result.push("*");
    }
  }
  return result;
}
substitute([58, 14, 48, 2, 31, 29]);

//task9
const date = new Date(2019, 0, 2);
function getPastDay(date, n) {
  return (Date.parse(date) - n * 24 * 60 * 60 * 1000)
    .toISOString()
    .getDate();
}
getPastDay(date, 1); // 1,

//task10
//function formatDate() {}
// formatDate(new Date("6/15/2018 09:15:00"));
