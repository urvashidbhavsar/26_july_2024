function hello(name) {
    return `Hi! ${name}`
}
function welcomeMsg(name, msg, callme) {
    console.log(hello(name), msg);
}
welcomeMsg('Abc', 'Welcome To tops', hello())