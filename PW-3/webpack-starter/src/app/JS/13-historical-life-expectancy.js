/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const json = require('../../data/ancestry.js');

const ancestry = JSON.parse(json);
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf) {
  const groups = {};
  array.forEach((element) => {
    const groupName = groupOf(element);
    if (groupName in groups) groups[groupName].push(element);
    else groups[groupName] = [element];
  });
  return groups;
}

const byCentury = groupBy(ancestry, (person) => Math.ceil(person.died / 100));

for (const century in byCentury) {
  const ages = byCentury[century].map((person) => person.died - person.born);
  console.log(`${century}: ${average(ages)}`);
}
