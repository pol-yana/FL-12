var isBigger = (a, b) => (a > b);
var isSmaller = (a, b) => (!isBigger(a, b));
isSmaller(6,2);
