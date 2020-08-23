function simpleArraySum(ar) {
  var value = 0
  ar.forEach(function(v) { value += v })
  return value
}

// sampple 1
var input1 =  [1, 2, 3, 4, 10, 11]
console.log(simpleArraySum(input1)) // result: 31