if (true) {
  console.log(5);
}

let age = prompt("請輸入年齡");
age = Number(age);
if (age >= 0 && age <= 12) {
  alert("兒童票");
} else if ((age > 12) & (age <= 65)) {
  alert("成人票");
} else if (age > 65 && age <= 125) {
  alert("老年票");
}

if ("我今天心情不錯") {
  //true
  console.log(5);
}

let x = 10;
if (x) {
  console.log("x is true");
} else {
  console.log("x is false");
}

console.log(3 && 10);
console.log(0 && 10); //第一個為true則顯示後面，反之第一個為false則顯示

console.log(0 || 10);

let name = "chad";
console.log(name || 100);
let data = "";
console.log(data || "資料讀取失敗");
