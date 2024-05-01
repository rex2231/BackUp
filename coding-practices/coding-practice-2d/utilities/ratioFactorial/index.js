const findFactorial = require("../factorial/index.js");
const findRatio = require("../ratio/index.js");

const ratioAndFactorial = (firstNum, secondNum, thirdNum) => {
  let ratio = findRatio(firstNum, secondNum);
  let factorial = findFactorial(thirdNum);

  return {
    ratio: ratio,
    factorial: factorial,
  };
};

module.exports = ratioAndFactorial;
console.log(ratioAndFactorial(1, 2, 3));
