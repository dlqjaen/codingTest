function compareTriplets(a, b) {
  var c = 0
  var d = 0

  a.forEach(function(v, i) {
      if (v > b[i]) {++c}
      else if (v < b[i]) {++d}
  })

  return [c, d]
}

// sample 1
var inputA = [17, 28, 30]
var inputB = [99, 16, 8]

compareTriplets(inputA, inputB) // result: [2, 1]