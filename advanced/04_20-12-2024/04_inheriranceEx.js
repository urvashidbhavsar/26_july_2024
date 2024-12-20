class product {
    constructor() {
        this.pname = "Oppo";
        this.price = 25000;
    }
}
class categories extends product {
    constructor(cat) {
        super();
        this.cat = cat;
    }
}
var categ = new categories("Mobile")
console.log(categ.pname + " " + categ.price + " " + categ.cat);
