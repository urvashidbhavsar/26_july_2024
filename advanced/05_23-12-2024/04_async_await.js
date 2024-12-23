const func1 = () => {
    setTimeout(() => {
        console.log("function_1 executed");
    }, 3000);
}
func1()

const func2 = async = new Promise((res) => {
    setTimeout(() => {
        res("Function_2 executed")
    }, 2000);
})
    .then(res => (console.log(res)))
// func2()

const func3 = async = new Promise((res) => {
    setTimeout(async () => {
        console.log("---- function 3 execute ---")
        var wait = await func1()
        res(wait);
    }, 5000);
})
// console.log();
// func3()
