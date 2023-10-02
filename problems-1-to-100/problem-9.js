function specialPythagoreanTriplet(n) {
  const triplet = []

  for (let a = 1; a < Math.floor(n / 3); a++) {
    for (let b = a + 1; b < Math.floor((n - a) / 2); b++) {
      let c = n - a - b

      if (a ** 2 + b ** 2 === c ** 2 && triplet.length < 3) {
        triplet.push(a, b, c)
      }
    }
  }

  return triplet.reduce((acc, curr) => curr * acc)
}

specialPythagoreanTriplet(120)
