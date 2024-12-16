// const decrement = (num) => {
//     if (num == 0) return;
//     console.log(num);
//     decrement(num - 1)
// }
// decrement(10);

// console.log("==================");
// const increment = (num) => {
//     if (num == 11) return
//     console.log(num);
//     increment(num + 1)
// }
// increment(1)

console.log("==================");
const evenNumber = (start, end) => {
    if (start >= end) return
    if (start % 2 == 0) {
        console.log(start);
    }
    evenNumber(start + 1, end)
}
evenNumber(11, 20)
evenNumber(51, 70)


