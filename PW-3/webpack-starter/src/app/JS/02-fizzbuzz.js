for (let i = 0; i <= 100; i += 1) {
  let foo = '';
  if (i % 3 === 0) {
    foo += 'Fizz';
  }
  if (i % 5 === 0) {
    foo += 'Buzz';
  }
  console.log(foo || i);
}
