function makeNumber(str) {
  let matches = "";
  if (str.match(/\d+/g) !== null){
    matches = str.match(/\d+/g).toString() .split(",") .join("");
  }
  return matches;
}

makeNumber();
