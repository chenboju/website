//1
//編寫一個名為“printEvery3()”的函式，它打印出等差數列 1, 4, 7, …, 88。
console.log("第1題");
function printEvery3(n) {
  for (let i = 1; i <= n; i = i + 3) {
    console.log(i);
  }
}
// console.log(printEvery3(88));

//2
//編寫一個名為table9to9的函式，它打印出九九乘法表的內容。
console.log("第2題");
function table9to9() {
  for (i = 1; i <= 9; i = i + 1) {
    for (j = 1; j <= 9; j++) {
      console.log(i + "x" + j + "=" + i * j);
    }
    console.log("\n");
  }
}
// console.log(table9to9(5));

//3
//編寫一個名為isUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的第一個字母是否為大寫。
console.log("第3題");
function isUpperCase(str) {
  // if (str.lenght == 0) {
  //   return false;

  //兩個方法
  //return str[0] == str[0].toUpperCase();

  // } else if (str[0] == str[0].toUpperCase()) {
  //   return true;
  // } else {
  //   return false;
  // }

  //再加一種
  if (str.lenght == 0) {
    return false;
  } else if (str[0].charCodeAt() >= 65) {
    return true;
  } else {
    return false;
  }
}
console.log(isUpperCase("ABCD"));
console.log(isUpperCase(" "));
console.log(isUpperCase("aBCD"));
console.log("\n");

//4
//編寫一個名為isAllUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的所有字母是否為大寫。
console.log("第4題");
function isAllUpperCase(arr) {
  if (arr.length === 0) {
    return false;
  }
  //
  for (i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i].toUpperCase()) {
      return false;
    }
  }
  return true;

  //
  // return str == str.toUpperCase();
}
console.log(isAllUpperCase("ABCD")); // returns true
console.log(isAllUpperCase("")); // returns false
console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false
console.log("\n");
//5
//編寫一個名為position的函式，唯一的參數是一個String，其功能為找到參數String當中的第一個大寫字母，並且回傳大寫字母的值以及其index位置。
console.log("第5題");
function position(str) {
  if (str.length == 0) {
    return -1;
  }
  for (i = 0; i <= str.length - 1; i++) {
    if (str[i] == str[i].toUpperCase()) {
      return str[i] + " " + i;
    }
  }
  return -1;
}
console.log(position("")); // returns false
console.log(position("abcd"));
console.log(position("AbcD"));
console.log(position("abCD"));
console.log("\n");
//6
//編寫一個名為findSmallCount的函式，其參數為一個整數的array以及另一個整數，功能是回傳一個整數，來表示array中有多少元素小於第二個參數。
console.log("第6題");
function findSmallCount(arr, n) {
  let count = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < n) {
      count++;
    }
  }
  // console.log(count);
  return count;
}
console.log(findSmallCount([1, 2, 3], 2)); // returns 1
console.log(findSmallCount([1, 2, 3, 4, 5], 0)); // returns 0
console.log(findSmallCount([1, 2, 3, 4, 5], 6)); // returns 5

console.log("\n");

//7
//編寫一個名為findSmallerTotal的函式，其參數為一個整數的array以及另一個整數，回傳值為array中小於第二個參數的所有元素的總和。
console.log("第7題");

function findSmallerTotal(arr, n) {
  let count = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < n) {
      count = count + arr[i];
    }
  }
  return count;
}
console.log(findSmallerTotal([1, 2, 3], 3));
console.log(findSmallerTotal([1, 2, 3], 1));
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999));
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0));
console.log("\n");

//8
// 編寫一個名為stars的函式，功能為按以下模式打印出星星層：
console.log("第8題");
function start(n) {
  let j = "";
  for (let i = 1; i <= n; i++) {
    j = j + "*";
    console.log(j);
  }

  // for (let i = 1; i <= n; i++) {
  //   let sar = "";
  //   for (let k = 1; k <= i; k++) {
  //     sar = sar + "*";
  //   }
  //   console.log(sar);
  // }
}
console.log(start(4));
console.log("\n");
console.log(start(10));

//9
// 編寫一個名為stars2的函式，功能為按以下模式打印出星星層：
console.log("第9題");
function start2(n) {
  let j = "";
  for (let i = 1; i <= n; i++) {
    j = j + "*";
    console.log(j);
  }

  for (let i = n - 1; i >= 1; i--) {
    let k = "";
    for (let l = 1; l <= i; l++) {
      k = k + "*";
    }
    console.log(k);
  }

  // for (let i = 1; i <= n; i++) {
  //   let star = "";
  //   for (let j = 1; j <= i; j++) {
  //     star = star + "*";
  //   }
  //   console.log(star);
  // }
  // for (let i = n - 1; i >= 1; i--) {
  //   let star = "";
  //   for (let j = 1; j <= i; j++) {
  //     star = star + "*";
  //   }
  //   console.log(star);
  // }
}
console.log(start2(4));
console.log("=============");
console.log(start2(10));
console.log("\n");
//10
//費氏數
console.log("第十題");
function fib(n) {
  if (n == 0) {
    console.log(0);
    return 0;
  } else if (n == 1) {
    console.log(1);
    return 1;
  }

  let fib_sequence = [0, 1];
  for (let i = 0; fib_sequence.length <= n; i++) {
    let last_fib = fib_sequence[fib_sequence.length - 1];
    let second_fib = fib_sequence[fib_sequence.length - 2];
    fib_sequence.push(last_fib + second_fib);
  }
  console.log(fib_sequence);
  return fib_sequence[fib_sequence.length - 1];
}
console.log(fib(3));
console.log(fib(8));
console.log(fib(10));
console.log("\n");
