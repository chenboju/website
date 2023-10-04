console.log(3 == 3); //是否等於
console.log(3 == 5);

console.log(3 != 10); //不等於
console.log(3 == 3);

console.log(3 == "3"); //==代表去檢查operands值
console.log(3 === "3"); //===代表去檢查operands值+data type
console.log(3 !== "3");

// Bitwisw Operators
// bit = binary digit，wise=每兩個
let a = 10;
let b = 9;
console.log(a & b); //1010、1001做and
console.log(a | b); //1010、1001做or
console.log(a ^ b); //1010、1001做xor 相同為0相異為1
console.log(~a); //反轉bit
console.log(a << b); //a向左移動b 1010000000000
console.log(a >> b); //a向右移動b

/*用於
1.編碼運算
2.資料傳出 sockets programming ports 
3.資料加密、SHA函數
4.作業系統、cpu 
5.finit state machine 
6.graphics 另如影像處理、人工智能*/
