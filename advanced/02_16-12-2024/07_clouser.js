const counter = (() => {
    // declaration
    let count = 1;
    return function () {
        console.log(count);
        // access outer function variable
        count = count + 1
    }
})();
counter()
counter()



// const call = () => { }