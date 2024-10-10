function spust() {
  alert("nespausk manęs >:(");
  document.getElementById("mygtukas").value = "eik šalin";
}

// uzduotys
// 1;
// let a = 2;
// let b = 8;
// let c = 4;
// if (a == b) {
//   console.log("a == b?");
// }
// if (b == c) {
//   console.log("b == c?");
// }
// if (a > b) {
//   console.log("a > b? ");
// }
// if (b > 2 * c) {
//   console.log("b > 2*c");
// }
// if (a % 2 == 0) {
//   console.log("a/2=0");
// }
// if (b % 2 != 0) {
//   console.log("b/2!=0");
// }
// if (c > 0) {
//   console.log("c > 0? ");
// }
// if (a < 0) {
//   console.log("a < 0? ");
// }
// if (b % 4 == 0) {
//   console.log("b/4==0");
// }
// if (c % 8 == 0) {
//   console.log("c/8==0");
// }

//2

// let userAge = prompt("Įveskite savo amžių");
// if (Number.isInteger(parseInt(userAge))) {
//   if (userAge >= 18) {
//     console.log("jūs galite balsuoti");
//   } else {
//     console.log("balsuoti negalite");
//   }
// } else {
//   console.log("Netinkamai įvestas amžius");
// }

//3

// let j = 8;
// let k = 2;
// let l = 4;
// let m = 4;
// let n =1;
// let grades = [j, k, l, m, n];
// console.log(grades);
// let sum = grades.reduce((acc, c) => acc + c, 0);
// let avg = sum / grades.length;
// console.log(avg);
// if (avg<5) {
//   console.log('vidurkis neigiamas');
// }

//4

// let userInput = prompt("Įveskite skaičių");

// console.log(userInput);
// console.log("x/5==0? :", userInput % 5 == 0);
// if (userInput % 5 == 0) {
//   console.log("------------------------");
//   for (let i = 1; i < 6; i++) {
//     console.log(userInput, "x", i, "=", userInput * i);
//   }
//   console.log("------------------------");
// }
// if (userInput % 2 == 0) {
//   console.log(userInput + "^2/2 =", userInput ** 2 / 2);
// }
// if (userInput % 7 != 0) {
//   let userInput2 = prompt("Įveskite antrą skaičių");
//   console.log(userInput, "+", userInput2, '=', (Number(userInput)+Number(userInput2)));
//   console.log(userInput, "-", userInput2, '=', userInput-userInput2);
//   console.log(userInput, "*", userInput2, '=', userInput*userInput2);
//   console.log(userInput, "/", userInput2, '=', userInput/userInput2);
// }

//5

// let a = 2;
// let b = 8;
// let c = 4;
// console.log(a);
// console.log(b);
// console.log(c);

// if (a == b) {
//   console.log("a==b");
// } else {
//   console.log("a!=b");
// }
// if (b == c) {
//   console.log("b==c");
// } else {
//   console.log("b!=c");
// }
// if (a > b) {
//   console.log("a>b");
// } else {
//   console.log("a<b");
// }
// if (b > c * 2) {
//   console.log("b>c*2");
// } else {
//   console.log("b<c*2");
// }
// if (a % 2 == 0) {
//   console.log("a%2==0");
// } else {
//   console.log("a%2!=0");
// }
// if (b % 2 != 0) {
//   console.log("b%2!=0");
// } else {
//   console.log("b%2==0");
// }
// if (c > 0) {
//   console.log("c>0");
// } else {
//   console.log("c<0");
// }
// if (a < 0) {
//   console.log("a<0");
// } else {
//   console.log("a>0");
// }
// if (b % 4 == 0) {
//   console.log("(b%4==0");
// } else {
//   console.log("(b%4!=0");
// }
// if (c % 8 == 0) {
//   console.log("c%8==0");
// } else {
//   console.log("c%8!=0");
// }
//6

let h = 7.5;
if (h == 10) {
  console.log("puiku");
} else if (h < 10 && h >= 9) {
  console.log("labai gerai");
} else if (h < 9 && h >= 7) {
  console.log("gerai");
} else if (h < 7 && h >= 5) {
  console.log("patenkinamai");
} else {
  console.log("egzaminas neišlaikytas");
}
//7
let coinToss = Math.floor(Math.random() * 2) + 1;
console.log(coinToss);

console.log(coinToss % 2 == 0 ? "skaičius" : "herbas");
// if (coinToss % 2 == 0) {
//   console.log("skaičius");
// } else {
//   console.log("herbas");
// }

//8
let dalus7 = Math.floor(Math.random() * 100) + 1;
console.log(dalus7);
if (dalus7 % 7 == 0) {
  console.log("dalinasi iš 7");
} else {
  console.log("nesidalina iš 7");
}
//9
let filePath = `C:/Users/Arvydas/Desktop/VCS/Javascript Mokymai/04-JS/03-paskaita/script.js`;

if (filePath.endsWith(".js")) {
  console.log("javascript!");
} else {
  console.log(":(");
}

//10
let skaic10 = 17;

if (skaic10 % 2 == 0) {
  console.log("lyginis");
} else if (skaic10 % 5 == 0) {
  console.log("dalus iš 5");
} else if (skaic10 == 3) {
  console.log("tai 3");
} else {
  console.log("prastas skaičius");
}
{
}
// //11
// let a = 17;
// let b = 8;
// let c = 5;
// console.log(a);
// console.log(b);
// console.log(c);

// if (a == b) {
//   console.log("a==b");
// } else if (c > a) {
//   console.log("c>a");
// } else if (b == c * 2) {
//   console.log("b==c*2");
// } else if (a % 3 == 0) {
//   console.log("a%3==0");
// } else {
//   console.log("klaida");
// }
// {
// }
// {
// }
// {
// }

// //12
// let a = 17;
// let b = 8;
// let c = 5;
// console.log(a);
// console.log(b);
// console.log(c);
// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }
// {
// }

// //13
// let a = 17;
// let b = 8;
// let c = 5;
// console.log(a);
// console.log(b);
// console.log(c);
// if (a < b && a < c) {
//   console.log(a);
// } else if (b < c && b < a) {
//   console.log(b);
// } else {
//   console.log(c);
// }
// {
// }

// //14
// let a = 1;
// let b = 8;
// let c = 5;
// console.log(a);
// console.log(b);
// console.log(c);
// let h = (a + b +c)/3

// if (h < 10 && h >= 8) {
//   console.log("puiku");
// } else if (h < 8 && h >= 5) {
//   console.log(" patenkinamai");
// } else if (h < 5) {
//   console.log("egzaminas neišlaikytas");
// } else {
//   console.log("klaida");
// }

//15
// let a = 20;
// let b = 11;

// console.log(a);
// console.log(b);

// console.log(`ar pirmas skaičius yra didesnis už antrąjį arba yra lygus 0`);
// console.log(a > b || a == 0);

// console.log(`ar antras skaičius yra didesnis už pirmąjį arba yra lygus 5`);
// console.log(a < b || b == 5);

// console.log(`ar pirmas skaičius yra didesnis už antrąjį ir yra lygus 20`);
// console.log(a > b && a == 20);

// console.log(
//   `ar antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100`
// );
// console.log(a < b && b < 100);

// ziniu uztvirtinimas

let dayH = 8;

let workerEff = 12;
let workers = 6;
let basePrice = 0.8;
let retailPrice = 2.2;

let order = 600;

let dailyOutput = workerEff * workers * dayH;
let profit = dailyOutput * (retailPrice - basePrice);
console.log(profit)
let orderState = dailyOutput > order;
profit = dailyOutput > order ? profit : 0;

console.log(dailyOutput)
console.log(orderState)
console.log(profit)
