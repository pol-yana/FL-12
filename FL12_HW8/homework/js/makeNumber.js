function makeNumber(str) {
  let matches = str.match(/\d+/g).toString().split(",").join("");
  return matches;
}
makeNumber();