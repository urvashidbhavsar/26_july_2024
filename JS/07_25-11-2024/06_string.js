var str = new String("Hello World, Welcome");

console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.codePointAt(0));
console.log(str.concat("!!!!!!!!!!!"));
// 5 is start position
console.log(str.indexOf("l", 5));
console.log(str.lastIndexOf("l"));
// search full word or single character
console.log(str.search("l"));
console.log(str.match("Hello"));
console.log(str.replace("Hello", "Welcome"));
console.log(str.substring(2, 9));
console.log(str.slice(2, 9));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.split(","));
str = "            user            "
console.log(str.valueOf());
console.log(str.trim());


