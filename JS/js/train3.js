//1
// 編寫一個名為mySort的函式，參數為一個array of numbers，回傳值為一個將元素由小到大排序的array。

function mySort(arr) {
  let swap = 0;
  let workingIndex = arr.length - 1; //3-1=2
  console.log(workingIndex);
  for (let i = 0; 0 <= workingIndex; i++) {
    console.log(arr);
    let large = arr[0];
    let largeIndex = 0;
    for (let j = 0; j <= workingIndex; j++) {
      if (arr[j] > large) {
        //找到最大值
        large = arr[j];
        largeIndex = j;
      }
    }
    swap = arr[largeIndex];
    console.log("swap=" + swap);
    console.log("arr[largeIndex]=" + arr[largeIndex]);
    console.log("\n");
    arr[largeIndex] = arr[workingIndex];
    console.log("arr[largeIndex]=" + arr[largeIndex]);
    console.log("arr[workingIndex]=" + arr[workingIndex]);
    console.log("\n");
    arr[workingIndex] = swap;
    console.log("arr[workingIndex]=" + arr[workingIndex]);
    console.log("swap=" + swap);
    console.log("\n");
    workingIndex--;
    console.log(workingIndex);
    console.log(arr);
    console.log("\n");
  }
}
console.log(mySort([17, 0, 5, 20, 18]));
console.log("===================");
console.log("\n");
function bubbleSort(arr) {
  console.log(arr);
  let length = arr.length - 1;
  for (let j = 0; j < length; j++) {
    if (arr[j] > arr[j + 1]) {
      console.log("\n");
      console.log(arr);
      let temp = arr[j];
      console.log("temp=" + temp);
      console.log("arr[j]=" + arr[j]);
      arr[j] = arr[j + 1];
      console.log("arr[j]=" + arr[j]);
      console.log("arr[j]+1=" + arr[j + 1]);
      arr[j + 1] = temp;
      console.log("arr[j]+1=" + arr[j + 1]);
      console.log("temp=" + temp);
      console.log(arr);
    }
  }
}
console.log(bubbleSort([17, 0, 5, 20, 18]));

//2
//落地問題: 一球從h米高度自由落下，每次落地後反跳回原高度的一半，再落下。求小球在第n次落地時，
//總共經過多少公尺？編寫一個名為distance的函式，參數為h與n，回傳值為小球經過的總距離。
console.log("第二題");
function distance(h, n) {
  //第一種
  /*let total = 0 + h; //或total=h
  let avg = 2;
  for (let i = 1; i <= n - 1; i++) {
    //n-1因為先把一開始的高度加進去了
    if (h > 0) {
      h = h / avg;
      total = total + h * 2;
    }
  }
  console.log(total);*/

  //第二種
  let result = h;
  for (let i = 2; i <= n; i++) {
    result = result + 2 * (h / Math.pow(2, i - 1));
  }
  return result;
}
console.log(distance(100, 4));
console.log(distance(500, 7));
console.log("\n");
//3
//打印出所有的"水仙花數"。所謂"水仙花數"是指一個三位數，其各位數字立方和等於該數本身。
//例如：153是一個"水仙花數"，因為$153=1^3+5^3+3^3$，或370也是水仙花數，因為$370=3^3+7^3+0^3$。
function PPDI() {
  let result = 0;
  for (let i = 100; i <= 999; i++) {
    let unit = i % 10;
    let unit2 = Math.floor(i / 10) % 10;
    let unit3 = Math.floor(i / 100) % 10;
    let total = Math.pow(unit, 3) + Math.pow(unit2, 3) + Math.pow(unit3, 3);
    if (i == total) {
      console.log(i);
    }
  }
}
console.log(PPDI());

//4
//求s=a+aa+aaa+aaaa+aa...a的值，其中a是小於10的數字，相加的項數為n。例如，當a = 2，n=5時，s=2+22+222+2222+22222。
//若a  =2, n = 3，則輸出結果的形式如：2+22+222 = 246。編寫一個名為calc的函式，參數為a與n，回傳值為s。

function calc(a, n) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      result = result + a * Math.pow(10, j);
    }
  }
  return result;
}
console.log(calc(2, 3));
console.log(calc(10, 6));

//5
//編寫一個名為"shuffle()”的函數，唯一的參數為一個array of integers，return
//type也是array of integers，返回的array與參數array的元素相同，但元素順序為隨機排序的結果。

function shuffle(arr) {
  let curremtIndex = arr.length;
  let ramdonIndex;

  while (curremtIndex != 0) {
    ramdonIndex = Math.floor(Math.random() * curremtIndex);
    curremtIndex--;

    let tmp = arr[curremtIndex];
    arr[curremtIndex] == arr[ramdonIndex];
    arr[ramdonIndex] = tmp;
  }
  console.log(arr);
  return arr;
}
for (let i = 0; i <= 5; i++) {
  console.log(shuffle([10, 20, 55, 80, 11]));
}
