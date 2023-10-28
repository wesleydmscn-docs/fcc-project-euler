function isPrime(num) {
  if (num <= 1) return false
  if (num <= 3) return true
  if (num % 2 === 0 || num % 3 === 0) return false

  let i = 5

  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false
    }

    i += 6
  }

  return true
}

function nthPrime(n) {
  if (n === 1) return 2

  let count = 1
  let num = 3

  while (count < n) {
    if (isPrime(num)) {
      count++

      if (count === n) {
        return num
      }
    }

    num += 2
  }

  return
}

nthPrime(10001)
