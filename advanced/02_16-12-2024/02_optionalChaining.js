var per = {
    firstname: "Abc",
    lastname: "Xyz",
    address: {
        town: "Udhana",
        city: "Surat"
    }
}
console.log(per.firstname);
console.log(per.address);

// if (per.address && per.address.city) {
if (per.address?.city) {
    console.log("Included");
} else {
    console.log("not included");
}

