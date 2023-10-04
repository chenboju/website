// js reference data type
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr1 == arr2);
let arr3 = [1, 2, 3];
console.log(arr1 == arr3);

console.log(arr1.length);

// push() 將一個或多個元素添加到陣列尾端，並return陣列新的長度
arr1.push(6);
console.log(arr1);
let returnValue = arr1.push(7);
console.log(returnValue); //長度
// pop() 從陣列刪除最後一個元素
arr3.pop();
console.log(arr3);
// shift() 從陣列刪除第一個元素
let arr4 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
arr4.shift();
console.log(arr4);
let deleteNm = arr4.shift(); //回傳刪除值
console.log(deleteNm);
// unshift() 將一個或是多的元素添加到陣列的開頭，並return陣列新的長度
let arr5 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
arr5.unshift(10);
console.log(arr5);

let arrs = ["chad", [1, 2, [[], [], [99]]], false, []];
//arr裡還有arr
let myArr = [
  ["name", "address", "age"],
  ["chad", "taiwan", 35],
  ["nic", "usa", 40],
];
console.log(myArr);
console.log(myArr[1][0]);
console.log(myArr[2][2]);
