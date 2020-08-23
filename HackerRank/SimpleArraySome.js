function simpleArraySum(ar) {
  var value = 0

  ar.forEach(function(v) { value += v })

  return value
}

// sample 1
var inputA = [1, 2, 3, 4, 10, 11]

console.log(simpleArraySum(inputA)) // result: 31
