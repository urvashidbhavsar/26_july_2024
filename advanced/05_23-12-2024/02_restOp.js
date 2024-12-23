function addition(...numbers) {
    var res = numbers.reduce((tot, curr) => { return tot += curr }, 0)
    console.log(res);
}
addition(2, 3, 4);
addition(2, 3, 4, 5);
addition(1, 2, 33, 2)


