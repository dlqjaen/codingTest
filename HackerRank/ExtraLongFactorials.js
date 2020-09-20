function extraLongFactorials(n) {
  var factorial = 1
  for (var i=n; i>0; i--) {
      factorial = BigInt(factorial) * BigInt(i)
  }
  console.log(factorial.toString())
}

// sample 1
extraLongFactorials(25) // result: 15511210043330985984000000
