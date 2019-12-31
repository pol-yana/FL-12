function isLeapYear(date) {
  var newDate = new Date(date);
  if (isNaN(newDate)) {
    return "Invalid Date";
  } else {
    var year = newDate.getFullYear();
    if (year % 4 === 0) {
      return year + " is a leap year";
    } else {
      return year + " is not a leap year";
    }
  }
}
isLeapYear();