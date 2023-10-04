//1
//編寫一個名為reverse的函式，參數為一個String，回傳值為順序反轉的String。
console.log("第一題");
function reverse(arr) {
  /*let j = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    j = j + arr[i];
  }
  return j;*/

  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[arr.length - 1 - i];
  }
  return result;
}
console.log(reverse("abcd"));
console.log(reverse("I am a good guy."));
console.log("\n");
//2
//編寫一個名為swap的函式，參數為一個String，回傳值為大小寫反轉的String。
console.log("第二題");
function swap(arr) {
  let j = "";
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i].toLowerCase()) {
      j = j + arr[i].toUpperCase();
    } else if (arr[i] == arr[i].toUpperCase()) {
      j = j + arr[i].toLowerCase();
    } else {
      return -1;
    }
  }
  return j;
}

console.log(swap("Aloha"));
console.log(swap("Love you."));
console.log("\n");

//3
// 編寫一個名為isPrime的函式，它接受一個整數作為參數，回傳值為一個boolean，告訴我們參數是否為一個質數。
console.log("第三題");
function isPrime(n) {
  if (n == 1) {
    return false;
  }
  let start = 2;
  for (let i = 1; start < n; i = i + 1) {
    if (n % start == 0) {
      return false;
    }
    start++;
  }
  return true;
}
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(13));
console.log(isPrime(7));
console.log(isPrime(4));
console.log(isPrime(91));
console.log("\n");
//4
//回文是指，正著讀或反著讀都一樣的句子。例如:【上海自來水來自海上】是迴文。寫一個名為palindrome的函式，它接受一個String作為參數，回傳值為一個boolean，告訴我們參數是否為回文。
console.log("第四題");
function palindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(palindrome("bearaeb"));
console.log(palindrome("whatever revetahw"));
console.log(palindrome("Aloha, how are you today?"));
console.log("\n");

//5
//編寫一個名為pyramid的函式，功能為按以下模式打印出星星層：
console.log("第五題");

function printStars(space, star) {
  let result = " ";
  for (let i = 0; i < space; i++) {
    result = result + " ";
  }
  for (let i = 0; i < star; i++) {
    result = result + "*";
  }
  console.log(result);
}

console.log("\n");

function pytamid(k) {
  let star = 1;
  let space = k - 1;
  for (let i = 1; i <= k; i++) {
    printStars(space, star);
    star = star + 2;
    space = space - 1;
  }
}
console.log(pytamid(4));
console.log("\n");

//6
//編寫一個名為inversePyramid的函式，功能為按以下模式打印出星星層：
console.log("第六題");
function inversePyramid(k) {
  let star = k * 2 - 1;
  let space = 0;
  for (let i = 0; star > 0; i++) {
    printStars(space, star);
    star = star - 2;
    space = space + 1;
  }
}
console.log(inversePyramid(4));
console.log("\n");

//7
//編寫一個名為factorPrime的函式，唯一的參數是個整數n，回傳值是一個String，表示n的質因數分解結果。
console.log("第七題");
function factorPrime(n) {
  let answer = n + "=";
  let p = 2;
  for (let i = 0; p <= n; i++) {
    if (n % p == 0) {
      n = n / p;
      answer = answer + p + "x";
    } else {
      p = p + 1;
    }
  }
  console.log(answer.length);
  console.log(answer);
  let answer2 = "";
  for (let i = 0; i < answer.length - 1; i++) {
    answer2 = answer2 + answer[i];
  }
  console.log(answer2);
}
console.log(factorPrime(120));
console.log(factorPrime(91));
