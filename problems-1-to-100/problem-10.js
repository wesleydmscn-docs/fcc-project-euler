function rangePrimes(n) {
  return new Array(n).fill(true)
}

function primeSummation(n) {
  const isPrime = rangePrimes(n)

  isPrime[0] = false
  isPrime[1] = false

  for (let p = 2; p * p < n; p++) {
    if (isPrime[p]) {
      for (let i = p * p; i < n; i += p) {
        isPrime[i] = false
      }
    }
  }

  let sum = 0

  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      sum += i
    }
  }

  return sum
}

primeSummation(2000000)