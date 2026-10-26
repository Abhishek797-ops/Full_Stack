function calculateFactorial(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (number == 0) {
        return 1;
    }
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}