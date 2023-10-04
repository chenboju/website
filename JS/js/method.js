let age = 27;
console.log(age.toString()); //數字轉字串
console.log(typeof age.toString()); //typeof 檢查data type

const pi = 3.1415926535;
console.log(pi.toFixed(2)); //數字轉字串+限制小數位數

let x = 10; //x is a number (x is an obkect)
console.log(x.toString); //對x來說。tostring是一個method or function所以要加括號

// length String長度
let str = "chad";
console.log(str.length);

// 第n項的字(index從0開始)
//str長度為6但index=5
console.log(str[0]);
console.log(str[3]);
console.log(str[str.length - 1]);

console.log(str.slice(2)); //a的index為3
console.log(str.slice(0, 2)); //c為起點，a為終點(不會顯示a) 0~1

console.log(str.indexOf("c"));
console.log(str.indexOf("ad"));

//全部大小寫轉換
let str1 = "HELLO word";
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());

str = str.toUpperCase();
console.log(str);

let sentence = "Today is a good day";
let result = sentence.split(" "); //遇到空白就切
console.log(result);

console.log(sentence.startsWith("Today")); //確認string是否以Today開頭，回傳true或flase
console.log(sentence.endsWith("day")); //確認string是否以day結尾，回傳true或flase

console.log(sentence.includes("good")); //確認string有包含good嗎?回傳true或flase

console.log(sentence.charCodeAt(0)); //查看字串對印的ascil碼
