// use must be function when create prototype
function Employee(id, ename) {
    this.id = id;
    this.ename = ename;
}
Employee.prototype.showData = function () {
    return this.id + " " + this.ename
}
function Emp_Des(des, post) {
    this.des = des;
    this.post = post;
}
var emp = new Employee(1, "Dipak")
Emp_Des.prototype = emp
var emp1 = new Emp_Des("Developer", "Senior")
console.log(emp1.showData());
console.log(emp1.des);
console.log(emp1.post);


