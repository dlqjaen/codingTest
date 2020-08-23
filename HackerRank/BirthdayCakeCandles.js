function birthdayCakeCandles(ar) {
  var sort = ar.sort(function(a, b) {return a - b})

  return sort.filter(function(v){ return v === sort[sort.length-1] }).length
}

// sample 1
var inputA = [3, 2, 1, 3]

birthdayCakeCandles(inputA) // result: 2