class parent {
    display() {
        console.log("Parent class invoke");
    }
}
class child extends parent {
    display() {
        console.log("child class invoke");
    }
}
var methods = [new parent(), new child()]
methods.forEach(e => {
    e.display()
})
