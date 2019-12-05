/* eslint-disable no-restricted-syntax */
function range(start, end, step = 1) {
  const arr = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}
function sum(arr) {
  let total = 0;
  for (const value of arr) {
    total += value;
  }
  return total;
}
console.log(range(10, 3, -2));
console.log(sum(range(5, 10, 2)));
