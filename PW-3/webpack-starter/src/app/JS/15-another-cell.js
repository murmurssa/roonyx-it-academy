/* eslint-disable max-classes-per-file */
function repeat(string, times) {
  let result = '';
  for (let i = 0; i < times; i += 1) {
    result += string;
  }
  return result;
}

class TextCell {
  constructor(text) {
    this.text = text.split('\n');
  }

  minWidth() {
    return this.text.reduce((width, line) => Math.max(width, line.length), 0);
  }

  minHeight() {
    return this.text.length;
  }

  draw(width, height) {
    const result = [];
    for (let i = 0; i < height; i += 1) {
      const line = this.text[i] || '';
      result.push(repeat(' ', width - line.length) + line);
    }
    return result;
  }
}

class StretchCell {
  constructor(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
  }

  minWidth() {
    return Math.max(this.inner.minWidth(), this.width);
  }

  minHeight() {
    return Math.max(this.inner.minHeight(), this.height);
  }

  draw(width, height) {
    return this.inner.draw(width, height);
  }
}

const sc = new StretchCell(new TextCell('abc'), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));
