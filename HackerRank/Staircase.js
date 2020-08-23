function staircase(n) {
  for(var i=0; i<n; i++) {
      var shape = ''
      for(var j=0; j<n; j++) {
          shape += (j >= n-(i+1)) ? '#' : ' '
      }
      console.log(shape)
  }
}

// sample 1
var inputA =  6

staircase(inputA) // result
//      #
//     ##
//    ###
//   ####
//  #####
// ######