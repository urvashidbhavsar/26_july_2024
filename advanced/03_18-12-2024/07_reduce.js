var arr = [1, 2, 3, 4, 5, 6]
var initval = 100;
var res = arr.reduce((total, current) => {
    return total + current
}, initval)
console.log(res);

// ============== 
var allperson = [
    {
        id: 1,
        pername: "Aman",
        qualification: "BCA"
    },
    {
        id: 2,
        pername: "Pooja",
        qualification: "B.tech"
    },
    {
        id: 3,
        pername: "Raj",
        qualification: "BCA"
    }
]

var allres = allperson.reduce((tdata, curr) => {
    return tdata + curr;
}, 0)
console.log(Number(allres));
