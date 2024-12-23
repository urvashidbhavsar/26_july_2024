var mypro = new Promise((resolve, reject) => {
    let res = 10 + 12;
    if (res == 20) {
        resolve("Task done")
    } else {
        reject("Task not done")
    }
})
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject))