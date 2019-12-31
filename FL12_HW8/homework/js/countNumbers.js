function makeNumber(str) {
  let matches = "";
  if (str.match(/\d+/g) !== null) {
    matches = str
      .match(/\d+/g)
      .toString()
      .split(",")
      .join("");
  }
  return matches;
}
function countNumbers(str) {
  var t1 = makeNumber(str).split("");
  var t2 = t1.map(Number);
  var t3 = t2.reduce(function(allNumbers, number) {
    if (number in allNumbers) {
      allNumbers[number]++;
    } else {
      allNumbers[number] = 1;
    }
    return allNumbers;
  }, []);
  let result = {};
  for (let i = 0; i < t3.length; i++) {
    if (t3[i]) {
      result[i] = t3[i];
    }
  }
  return result;
}

countNumbers("");
