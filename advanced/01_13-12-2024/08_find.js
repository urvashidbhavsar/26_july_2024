function isPrime(val) {
    var start = 2;
    // 2  <= 2.82
    while (start <= Math.sqrt(val)) {
        if (val % start++ < 1) {
            return false;
        }
    }
    return val > 1;
}
console.log([8, 11, 9, 10, 13].find(isPrime));
// if find index
console.log([8, 11, 9, 10, 13].findIndex(isPrime));