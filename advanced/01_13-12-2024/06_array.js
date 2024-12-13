var language = ['react', 'html', 'css', 'js', 'bootstrap']
// console.log(language[0]);

language.forEach((e, key) => {
    console.log(`${key} => ${e}`);
});

var lang = language.keys()
for (const e of lang) {
    console.log(`${e} => ${language[e]}`);
}
for (let i = 0; i < language.length; i++) {
    console.log(`${i} => ${language[i]}`);
}