let arr = [1, 2, 3, 4];

console.log(arr[0] + "is nember");
console.log(arr[1] + "is nember");
console.log(arr[2] + "is nember");
console.log(arr[3] + "is nember");
console.log("\n");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] + "is nember");
}

const friends = ["Harry", "Ron", "Snap", "Mike", "Grace"];

console.log(friends);

for (let i = friends.length - 1; i >= 0; i--) {
  console.log(friends[i]);
}

const friends2 = ["Harry", "Ron", "Snap", "Mike", "Grace"];
let reserse_friends = [];
reserse_friends = friends2.reverse();
console.log(reserse_friends);

function findBiggest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findBiggest([15, 20, 22, 16, 7]));

let a = [15, 20, 22, 16, 7];
let b = a[0];
for (let i = 1; i < a.length; i++) {
  if (a[i] > b) {
    b = a[i];
  }
}
console.log(b);

function count(n) {
  let result = 0;
  for (i = 1; i <= n; i++) {
    result = result + i;
  }
  return result;
  //time:O(n)
}
console.log(count(10));

function count2(n) {
  return ((1 + n) * n) / 2;
  //time:O(1)
}
let start = performance.now();
console.log(count2(100000000000));
let end = performance.now();
console.log(start);
console.log(end);
console.log(end - start);
