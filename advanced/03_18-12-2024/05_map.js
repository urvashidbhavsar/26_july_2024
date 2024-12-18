var menu = ["Home", "About", "Contact"]
for (let i = 0; i < menu.length; i++) {
    console.log(menu[i]);
}
console.log("--- using map ---");
menu.map(items => console.log(items))

// -------------------------------------- 
console.log("--- another example of map ---");
var num = [10, 20, 30, 40, 50]
num.map(items => console.log(items + 100))
