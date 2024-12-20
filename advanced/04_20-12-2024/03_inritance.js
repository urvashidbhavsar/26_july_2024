class currentTime extends Date {
    constructor() {
        super();
    }
}
var c = new currentTime()
console.log(c.toLocaleDateString());
