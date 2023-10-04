let answer = Math.floor(Math.random() * 100);
let na = 0;
let n2 = 99;
let guess;
console.log(answer);
while (true) {
  guess = Number(prompt("請輸入" + na + "~" + n2 + "範圍的數字"));

  if (guess < na || guess > n2) {
    alert("無效猜測，重新猜測");
    continue;
  }

  if (answer == guess) {
    alert("恭喜猜中");
    break;
  } else if (answer > guess) {
    alert("再大一點");
  } else {
    alert("再小一點");
  }
}
