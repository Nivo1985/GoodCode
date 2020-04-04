function daysThisMonth() {
  var date = new Date(), // secret paramater // hard to test
    y = date.getFullYear(),
    m = date.getMonth(),
    start = new Date(y, m, 1),
    end = new Date(y, m + 1, 1);
  return (end - start) / (1000 * 60 * 60 * 24);
}

function daysInMonth(y, m) {
  // no sercert parameters // easy to test
  var start = new Date(y, m - 1, 1),
    end = new Date(y, m, 1);
  return (end - start) / (1000 * 60 * 60 * 24);
}

console.log(daysThisMonth());
console.log(daysInMonth(2020, 2));
console.log(daysInMonth(2020, 3));
console.log(daysInMonth(2020, 4));
