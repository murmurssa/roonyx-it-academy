/* eslint-disable func-names */
// основа из учебника
function repeat(string, times) {
  let result = '';
  for (let i = 0; i < times; i += 1) {
    result += string;
  }
  return result;
}

function TextCell(text) {
  this.text = text.split('\n');
}

TextCell.prototype.minWidth = function () {
  return this.text.reduce((width, line) => Math.max(width, line.length), 0);
};

TextCell.prototype.minHeight = function () {
  return this.text.length;
};

TextCell.prototype.draw = function (width, height) {
  const result = [];
  for (let i = 0; i < height; i += 1) {
    const line = this.text[i] || '';
    result.push(repeat(' ', width - line.length) + line);
  }
  return result;
};
// моё решение
const StretchCell = function (inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
};

StretchCell.prototype.minWidth = function () {
  return Math.max(this.inner.minWidth(), this.width);
};

StretchCell.prototype.minHeight = function () {
  return Math.max(this.inner.minHeight(), this.height);
};

StretchCell.prototype.draw = function (width, height) {
  return this.inner.draw(width, height);
};

const sc = new StretchCell(new TextCell('abc'), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));
