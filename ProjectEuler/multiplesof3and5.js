function multiplesOf3and5(number) {
  // Good luck!
  var total = 0

  for (let i = 0; i < number; i++ ) {
    if ((i % 3 === 0) || i % 5 === 0 ) {
      total += i
    }
  }
  // console.log(total)
  return total;
}

multiplesOf3and5(1000)
multiplesOf3and5(49)
multiplesOf3and5(19564)
multiplesOf3and5(8456)
