/* eslint-disable no-param-reassign */
function reverseArray(array) {
  const output = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    output.push(array[i]);
  }
  return output;
}
function reverseArrayInPlace(array) {
  const temp = [];
  for (let i = 0; i <= array.length - 1; i += 1) {
    temp.push(array[array.length - 1 - i]);
  }
  for (let i = 0; i <= array.length - 1; i += 1) {
    array[i] = temp[i];
  }
}
console.log(reverseArray(['A', 'B', 'C']));
const arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
