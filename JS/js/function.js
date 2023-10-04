function circle(r) {
  //   console.log(3.14 * r * r);
  return 3.14 * r * r;
}

// circle(10);
console.log(circle(10) + circle(5));

//攝氏溫度轉華氏溫度
function convertor(c) {
  return c * 1.8 + 32;
}
let input = Number(prompt("請輸入溫度  (。c)"));
let result = convertor(input);
alert("換算後的溫度為:" + result);
