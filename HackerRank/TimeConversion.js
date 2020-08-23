function timeConversion(s) {
  var split = []

  if (s.indexOf('PM') > -1) {
    split = s.replace('PM', '').split(':')
    if (split[0] !== '12') { split[0] = Number(split[0]) + 12 }
  } else if (s.indexOf('AM') > -1) {
    split = s.replace('AM', '').split(':')
    if (split[0] === '12') { split[0] = '00' }
  }

  return split.join(':')
}

// sample 1
var inputA =  '07:05:45PM'

timeConversion(inputA) // result: '19:05:45'