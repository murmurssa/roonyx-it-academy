/* eslint-disable func-names */
function logFive(sequence) {
  for (let i = 0; i < 5; i += 1) {
    if (!sequence.next()) {
      break;
    }
    console.log(sequence.current());
  }
}

function ArraySeq(array) {
  this.index = -1;
  this.array = array;
}

ArraySeq.prototype.next = function () {
  if (this.index >= this.array.length - 1) {
    return false;
  }
  this.index += 1;
  return true;
};

ArraySeq.prototype.current = function () {
  return this.array[this.index];
};

function RangeSeq(from, to) {
  this.from = from;
  this.to = to;
  this.index = -1;
}

RangeSeq.prototype.next = function () {
  if (this.from + this.index >= this.to) {
    return false;
  }
  this.index += 1;
  return true;
};

RangeSeq.prototype.current = function () {
  return this.from + this.index;
};

logFive(new ArraySeq([1, 6, 2, 3, 4, 5, 7, 6]));
logFive(new RangeSeq(100, 1000));
