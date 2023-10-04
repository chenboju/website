for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("\n");

let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

console.log("\n");

let k = 0;
do {
  console.log(k);
  k++;
} while (k < 10);

console.log("\n");

function print100() {
  for (let a = 1; a <= 100; a++) {
    console.log(a);
    if (a == 5) {
      return;
    }
  }
}

print100();
console.log("\n");

for (let b = 0; b < 3; b++) {
  for (let c = 0; c < 15; c++) {
    // console.log(c);
    console.log(b, c);
  }
  //   console.log(b);
  console.log("\n");
}

let cunter = 0;
for (let d = 0; d < 10; d++) {
  let cunter1 = 0;
  for (let e = 0; e < 50; e++) {
    cunter++;
    cunter1++;
  }
  console.log(cunter1);
}

console.log(cunter);

console.log("\n");

for (let f = 0; f < 10; f++) {
  //   console.log(f);
  //   if (f == 5) {
  //     break;
  //   }

  for (let g = 0; g < 10; g++) {
    console.log(g);
    if (g == 5) {
      break;
    }
  }
  console.log("\n");
}

function myFunc() {
  for (let h = 0; h < 10; h++) {
    for (let l = 0; l < 10; l++) {
      console.log(l);
      if (l == 5) {
        return;
      }
    }
  }
}

myFunc();
console.log("\n");

for (let f = 0; f < 10; f++) {
  if (f == 5) {
    continue;
  }
  console.log(f);
}

for (let f = 0; f < 10; f++) {
  //   console.log(f);
  //   if (f == 5) {
  //     continue;
  //   }

  for (let g = 0; g < 10; g++) {
    console.log(g);
    if (g == 5) {
      continue;
    }
  }
  console.log("\n");
}
