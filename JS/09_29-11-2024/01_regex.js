var str = "Hello World";
// quantifiers are used after breckets, and modifiers are used after /
// i use for case insensitive
// var ptn = /^[a-z]*$/i

// metacharacters are used in breckets which is start with \.
// test method match all string and numbers
var ptn = /^[a-zA-Z\s]*$/

if (ptn.test(str)) {
    console.log("Match");
} else {
    console.log("Not Match");
}

// ====================================================== 
// match method only check string values. if we check num use test
var num = 9856659856;
var newptn = /^[0-9]*$/
// if (num.match(newptn)) {
if (newptn.test(num)) {
    console.log("Number Match");
} else {
    console.log("Number not Match");
}
// ========================================= 

var sen = "This is JS language";
// var word = "TS"
var res = sen.replace(/[a]/g, "___")
console.log(sen);
console.log(res);

