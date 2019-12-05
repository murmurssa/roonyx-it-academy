function countBs(str) {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'B') {
      count += 1;
    }
  }
  return count;
}
function countChar(str, n) {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === n) {
      count += 1;
    }
  }
  return count;
}
console.log(countBs('BBQ'));
console.log(countChar('Honorificabilitudinitatibus', 'i'));
