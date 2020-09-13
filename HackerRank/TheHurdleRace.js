function hurdleRace(k, height) {
  var sorting = height.sort(function(a, b) {
      return a - b
  })
  var diff = sorting[sorting.length - 1] - k
  if (diff < 0) { diff = 0 }

  return diff
}

// sample 1
var inputA =  4
var inputB = [1, 6, 3, 5, 2]

hurdleRace(inputA, inputB) // result: 2