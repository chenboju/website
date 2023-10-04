let chad = {
  first_name: "chad",
  age: 25,
  last_name: "bob",

  sayHi() {
    // console.log("hello word");
    console.log(this.first_name + "" + "hello woed");
    //this 指的是現在正在執行sayHi的物件
    //更改資料時也很方便
  },

  walk() {
    console.log("chad is waking");
  },

  speak(word) {
    console.log("chad says" + word);
  },
};

console.log(chad.age);
console.log(chad["age"]);
chad.sayHi();
chad.walk();
chad.speak(" 心情不錯");

function hello() {
  console.log("hello");
  console.log(this); //window object
}

hello();

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);

console.log(typeof hello);

let arr2 = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr2));
