
function pow(a, b) {
    let result = 1;
    const isNegative = b < 0;
    b = Math.abs(b);

    for (let i = 0; i < b; i++) {
        result *= a;
    }

    return isNegative ? 1 / result : result;
}
console.log(pow(2,3));


