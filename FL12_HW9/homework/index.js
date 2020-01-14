// Your code goes here
//task1
function convert(...args) {
  let arr = [];
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'string') {
      arr.push(parseInt(args[i]));
    } else {
      arr.push(args[i].toString());
    }
  }
  return arr;
}
convert('1', 2, 3, '4');

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
  executeforEach(arr, el =>
    typeof el === 'string'
      ? result.push(func(Number(el)))
      : result.push(func(el))
  );
  return result;
}
mapArray([2, '5', 8], function(el) {
  return el + 3;
});

//task4
function filterArray(arr, func) {
  let filteredArr = [];
  executeforEach(arr, elem => func(elem) ? filteredArr.push(elem) : '');
  return filteredArr;
}
filterArray([2, 5, 8], function(el) {
  return el % 2 === 0;
});

//task5
function flipOver(str) {
  return str
    .split('')
    .reverse()
    .join('');
}
flipOver('hey world');

//task6
function makeListFromRange(arr) {
  let n = arr[0];
  let result = [];
  while (n <= arr[1]) {
    result.push(n);
    n++;
  }
  return result;
}
makeListFromRange([2, 7]);

//task7
const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

function getArrayOfKeys(arr, key) {
  let arrOfKeys = [];
  executeforEach(arr, elem => {
    arrOfKeys.push(elem[key]);
  });
  return arrOfKeys;
}
getArrayOfKeys(actors, 'name');

//task8
function substitute(arr) {
  let result = [];
  mapArray(arr, el => el >= 30 ? result.push(el) : result.push('*'));
  return result;
}
substitute([58, 14, 48, 2, 31, 29]);

//task9
var date = new Date(2019, 0, 2);
function getPastDay(date, n) {
  return new Date(date.setDate(date.getDate() - n)).getDate();
}
getPastDay(date, 1); // 1,

//task10
function formatDate(date) {
  let todayTime = new Date(date);
  let month = todayTime.getMonth() + 1;
  let day = todayTime.getDate();
  let year = todayTime.getFullYear();
  let hour = todayTime.getHours();
  let minute = todayTime.getMinutes();
  return year + '/' + month + '/' + day + ' ' + hour + ':' + minute;
}
formatDate(new Date('6/15/2018 09:15:00'));
