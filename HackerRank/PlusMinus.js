function plusMinus(arr) {
  var plus = 0, zero = 0, minus = 0, length = arr.length

  arr.forEach(function(v) {
      if (v > 0) {++plus}
      else if (v < 0) {++zero}
      else {++minus}
  })

  console.log((plus/length).toFixed(6))
  console.log((zero/length).toFixed(6))
  console.log((minus/length).toFixed(6))
}

// sample 1
var inputA =  [0, 0, -1, 1, 1]

plusMinus(inputA) // result
// 0.400000
// 0.200000
// 0.400000