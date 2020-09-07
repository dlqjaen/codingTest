function Pairs(k, arr) {
  var n = arr.sort(function(a, b) { return a - b })
  var i = 0
  var j = 1
  var count = 0

  while(j < n.length) {
    if (n[i] - n[j] < k) {
        j++
    }
    if (n[i] - n[j] > k) {
        i++
    }
    if (n[i] - n[j] === k) {
        count++
        j++
    }
  }
}

// sample 1
var inputK =  3
var inputArr = [1, 5, 3, 4, 2]

Pairs(inputA) // result 3