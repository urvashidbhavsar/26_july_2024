var product = {
    brands: "cello",
    price: 56,

    fullDetails: function () {
        return this.brands + "  " + this.price
    }
}
console.log(product.fullDetails());
