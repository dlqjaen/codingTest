/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNegative = x < 0
  const a = String(isNegative ? (x * -1) : x).split('')

  let b = 0
  for (let i=a.length-1; -1<i; i--) {
    b += a[i]
  }
  if (Number(b) > Math.pow(2,31)) {
    return 0
  } else {
    return b * (isNegative ? -1 : 1)
  }
};


// sample 1
const inputA = 123

console.log(twoSum(inputA)) // result: 321

// sample 2
const inputA = 1563847412

console.log(twoSum(inputA)) // result: 0