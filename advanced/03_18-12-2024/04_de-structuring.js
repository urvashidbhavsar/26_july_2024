var furniture = ["table", "chair", "bat", "cupboard"]
console.log(furniture[0]);
console.log(furniture[1]);

console.log("----- de-strucuting of array ----");
// give any name
var [tbl, chair, bat, cupboard] = furniture
console.log(tbl);

console.log("----- object ----");
let person = {
    firstname: "Aman",
    lastname: "Patel",
    address: "Surat"
}
console.log(person);

console.log("----- de-strucuting of object ----");
var { firstname, lastname, address } = person
console.log(firstname);
console.log(lastname);
console.log(address);