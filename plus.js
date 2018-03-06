let plus = function(a, b) {
  return a + b;
}

const s = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
].reduce(plus)

console.log("0~9を足すと" + s);
