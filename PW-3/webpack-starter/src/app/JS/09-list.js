/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
function arrayToList(array) {
  let getValue = array.shift();
  if (getValue === undefined) {
    return null;
  }
  return {
    value: getValue,
    rest: arrayToList(array),
  };
}
function listToArray(list, array) {
  array = array || [];
  array.push(list.value);
  if (list.rest != null) {
    list = list.rest;
    return listToArray(list, array);
  }
  return array;
}
function prepend(value, list) {
  return { value, rest: list };
}
function nth(list, n) {
  if (!list) return undefined;
  if (n === 0) return list.value;
  return nth(list.rest, n - 1);
}
let someValue = arrayToList([10, 20, 30]);
console.log(someValue);
console.log(listToArray(someValue));
console.log(prepend(10, prepend(20, null)));
console.log(nth(someValue, 2));
