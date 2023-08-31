function fiboEvenSum(n) {
  let fib1 = 1
  let fib2 = 2

  let sum = 0

  while (fib2 <= n) {
    if (fib2 % 2 === 0) {
      sum += fib2
    }

    let nextFib = fib1 + fib2
    fib1 = fib2
    fib2 = nextFib
  }

  return sum
}

fiboEvenSum(34) // 44
