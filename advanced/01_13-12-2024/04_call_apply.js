let person = {
    firstname: "Abc",
    lastname: "Xyz"
}
let details = {
    // here personDetails create as a key but assign function
    personDetails: function () {
        // arrow function does not return any value so used always function keyword
        return this.firstname + " " + this.lastname
    }
}
var d1 = details.personDetails.call(person)
var d2 = details.personDetails.apply(person)
console.log(d1);
console.log(d2);


