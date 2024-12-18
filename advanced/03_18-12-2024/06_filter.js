// return odd number
var numbers = [1, 5, 33, 25, 22, 56]
var res = numbers.filter(items => items % 2 == 1);
console.log(res);

var res = numbers.filter(items => items % 2 == 0)
console.log(res);

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

allperson.filter(qua => {
    if (qua.qualification == "BCA") {
        console.log(qua.id + " " + qua.pername);
    }
})
