function aVeryBigSum(ar) {
  var result = 0

  ar.forEach(function(v) { result += v })

  return result
}

// sample 1
var inputA =  [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

console.log(aVeryBigSum(inputA)) // result: 5000000015