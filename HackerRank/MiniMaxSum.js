function miniMaxSum(arr) {
  var sort = arr.sort(function(a, b){return a-b})
  var some = 0

  sort.forEach(function(v) { some += v })

  console.log((some - sort[sort.length-1]), (some - sort[0]))
}

// sample 1
var inputA =  [1, 2, 3, 4, 5]

plusMinus(inputA) // result: 10, 14