function gridSearch(G, P) {
  var isMatching = false
  var index = 0
  var matchStartIndex = -1

  for (var i=0, l=G.length; i<l; i++) {
      var findStartIndex = G[i].indexOf(P[0])
      var count = l - i

      if ((!isMatching && (findStartIndex > -1)) && (count >= P.length)) {
          matchStartIndex = findStartIndex
          index = 0
          isMatching = true
      }

      if (isMatching && (index < P.length)) {
          isMatching = G[i].indexOf(P[index]) === matchStartIndex
          index++
      }
  }

  return isMatching ? 'YES' : 'NO'
}


// sample 1
var inputA = [
  '123456',
  '567890',
  '234567',
  '194729'
]
var inputB = [
  '1234',
  '5678',
  '2345',
  '4729'
]

gridSearch(inputA, inputB) // result: NO

