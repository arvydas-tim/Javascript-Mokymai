function spust() {
  alert("nespausk manęs >:(");
  document.getElementById("mygtukas").value = "eik šalin";
}

// //1
// let userInput = prompt("Pasirinkite gėrimą [1-4]");
// userInput = Number(userInput);
// switch (userInput) {
//   case 1:
//     console.log(`Pasirinkote: Vanduo`);
//     console.log(`Iki pasimatymo`);
//     break;
//   case 2:
//     console.log(`Pasirinkote: Cola`);
//     console.log(`Iki pasimatymo`);
//     break;

//   case 3:
//     console.log(`Pasirinkote: Arbata`);
//     console.log(`Iki pasimatymo`);
//     break;

//   case 4:
//     console.log(`Pasirinkote: Kava`);
//     console.log(`Iki pasimatymo`);
//     break;

//   default:
//     console.log(`klaida`);
//     break;
// }

// //2
// let a = 2;
// let b = 5;
// let c = 8;
// switch (a) {
//   case 1:
//     console.log(a + b + c);
//     break;
//   case 2:
//     console.log(b * c);
//     break;
//   case 3:
//     console.log(a ** 2);
//     break;

//   default:
//     console.log(`klaida`);
//     break;
// }

//3
let errorCode = "x007";
let errorCodeEnd = errorCode.slice(errorCode.length - 1, errorCode.length);
console.log(errorCodeEnd);
switch (errorCode.startsWith("x", 0)) {
  case true:
    switch (errorCodeEnd) {
      case "8":
        console.log("Bad argument");
        break;
      case "7":
        console.log("div/0!");
        break;

      default:
        console.log("Unknown logic error. Contact administrator");
        break;
    }
    break;
  case false:
    console.log("Connection error, see network logs.");
    break;

  default:
    console.log("Unknown error. Contact administrator");
    break;
}

//1
for (let i = 0; i < 11; i++) {
  console.log(i);
}
//2
for (let i = 0; i < 15; i += 2) {
  console.log(i);
}

//3
for (let i = 1; i <= 20; i++) {
  console.log(`[${i}]`);
}
//4
for (let i = 1; i <= 20; i++) {
  if (i % 4 == 0) {
    console.log(`[${i}]`);
  }
}

// //5
// let a = 8;
// let b = 85;
// if (a < b) {
//   for (a; a < b; a++) {
//     console.log(`a =`, a, `| a^2 =`, a ** 2);
//   }
// } else {console.log(`prasti reziai`)
// }

// //6
// let a = 8;
// let b = 85;
// if (a < b) {
//   for (a; a < b; a++) {
//     if (a%2!=0 || a%8==0) {
//       console.log(a)
//     }
//   }
// } else {console.log(`prasti reziai`)
// }

// //7
// let a = 8;
// let b = 7;
// let sum = 0
// for ( i = 1; i <= a; i++) {
//   sum += b

// }
// console.log(sum,`!!`)

//8
let sum = 0;
for (i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum, `!!`);

//9
sum = 0;
for (i = 20; i <= 50; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log(sum, `!!`);

//10
sum = 0;
for (i = 30; i <= 60; i++) {
  if (i % 2 != 0) {
    sum += i;
  }
}
console.log(sum, `!!`);

//11
sum = 0;
for (i = 0; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum += i;
  }
}
console.log(sum, `!!`);

//FIZZBUZZ
for (i = 0; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`FizzBuzz`);
    continue;
  }
  if (i % 3 == 0) {
    console.log(`Fizz`);
    continue;
  }
  if (i % 5 == 0) {
    console.log(`Buzz`);
    continue;
  } else {
    console.log(i);
  }
  {
  }
}

//13
let f1 = 1;
let f2 = 1;
console.log(1);
console.log(1);
function fibfib(amt) {
  for (i = 0; i < amt; i++) {
    f3 = f1 + f2;
    console.log(f3);
    f1 = f2;
    f2 = f3;
  }
  f1 = 1;
  f2 = 2;
  f3 = 0;
}

//1
console.log(`1----------------`);
let a = 1;
while (a <= 20) {
  console.log(a);
  a++;
}

//2

a = 1;
while (a <= 50) {
  console.log(a % 2 == 0 ? `${a} lyginis` : `${a} nelyginis`);
  a++;
}

//3

a = 25;
while (a <= 50) {
  console.log(a % 3 == 0 ? `skaicius ${a} dalinasi iš 3` : `${a}`);
  a++;
}

//4
a = 1;
while ((a % 5 == 0 && a % 3 == 0) == false) {
  console.log(a);
  a++;
}
//5
a = 1;
sum = 0;
while (a <= 100) {
  a % 2 == 0 ? (sum += a) : null;
  a++;
  console.log(sum);
}
//6
let skaicius = 1;

while (skaicius < 5) {
  console.log(skaicius + `|` + skaicius ** 2);
  skaicius++;
}
//7
console.log(`7----------------------`);
a = 0;
b = 0;
sum=0
let randomN = Math.floor(Math.random() * 10);
console.log(randomN + `!`);
while (a < randomN) {
  b = Math.floor(Math.random() * 10);
  console.log(b);
  sum +=b
  a++;
}
console.log(sum)
