const arrays = [[1, 2, 3], [4, 5], [6], [7, 8, 9, 10]];
const arraysFlattening = arrays.reduce((flat, current) => flat.concat(current));
console.log(arraysFlattening);
