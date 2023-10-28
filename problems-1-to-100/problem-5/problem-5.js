function smallestMult(n) {
  let smallest = 1

  for (let i = 1; i <= n; i++) {
    smallest = (smallest * i) / mdc(smallest, i)
  }

  return smallest
}

function mdc(a, b) {
  return b === 0 ? a : mdc(b, a % b)
}

smallestMult(20) // 232792560
