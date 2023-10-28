def multiples_three_and_five(number: int) -> int:
    sum = 0

    for n in range(3, number):
        if n % 3 == 0 or n % 5 == 0:
            sum += n

    return sum


multiples_three_and_five(1000)  # 233168
