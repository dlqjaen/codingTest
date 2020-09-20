function kaprekarNumbers(p, q) {
  var kaprekarNumberList = []

  for(var i=p; i<q+1; i++) {
      var kaprekar = String(i * i)

      var front = kaprekar.substring(0, kaprekar.length/2)
      var back = kaprekar.substring((kaprekar.length/2), kaprekar.length)

      if ((Number(front) + Number(back)) === i) {
          kaprekarNumberList.push(i)
      }
  }
  console.log(kaprekarNumberList.join(' ') || 'INVALID RANGE')
}

// sample 1
kaprekarNumbers(1, 100) // result: 1 9  45 55 99
