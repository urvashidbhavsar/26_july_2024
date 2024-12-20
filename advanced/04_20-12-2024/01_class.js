// class declaration
class person {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
    showDetails() {
        return this.firstname + " " + this.lastname
    }
}
var p1 = new person("Rohan", "Patel")
console.log(p1.showDetails());


// class expression 
const student = class {
    
}