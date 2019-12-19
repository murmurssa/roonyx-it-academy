const json = require('../../data/ancestry.js');

const ancestry = JSON.parse(json);
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
const byName = {};
ancestry.forEach((person) => {
  byName[person.name] = person;
});
const difference = ancestry.filter(
  (person) => byName[person.mother] != null,
).map((person) => person.born - byName[person.mother].born);
console.log(average(difference));
