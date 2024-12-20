function employee(id, ename) {
    this.id = id;
    this.ename = ename;

    Object.defineProperty(employee, "id", {
        get: function (id) {
            return id
        },
        set: function (id) {
            this.id = id;
        }
    })
    Object.defineProperty(employee, "ename", {
        get: function (ename) {
            return ename
        },
        set: function (ename) {
            this.ename = ename;
        }
    })
}
var e1 = new employee(1, "Abc")
console.log(e1);
