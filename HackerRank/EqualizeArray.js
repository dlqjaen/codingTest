function equalizeArray(arr) {
  var mostLength = 0
  for (var i=0, l=arr.length; i<l; i++) {
      var length = arr.filter(function(v) {
          return v === arr[i]
      }).length

      if (mostLength < length) {
          mostLength = length
      }
  }
  return  arr.length - mostLength
}

// sample 1
var inputA = [3, 3, 2, 1, 3]
equalizeArray(inputA) // result: 2