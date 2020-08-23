function diagonalDifference(arr) {
  var first = 0
  var second = 0

  arr.forEach(function(a, i) {
      first += a[i]
      second += a[arr.length - (i+1)]
  })

  return Math.abs(first - second)
}

// sample 1
var inputA = [
  [11, 2, 4]
  [4, 5, 6]
  [10, 8, -12]
]

diagonalDifference(inputA) // result: 15