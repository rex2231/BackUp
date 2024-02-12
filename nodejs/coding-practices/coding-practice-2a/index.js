const addDays = require("./node_modules/date-fns/addDays");

function returnDate(num) {
  let date = addDays(new Date(2020, 7, 22), num);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

module.exports = returnDate;
console.log(returnDate(1));
