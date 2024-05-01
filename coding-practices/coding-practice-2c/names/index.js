const getFirstNames = require("../utilities/utils/index.js");
const peopleList = require("../country/state/city/index.js");

const getPeopleInCity = (peopleList) => {
  return getFirstNames(peopleList);
};

module.exports = getPeopleInCity;
