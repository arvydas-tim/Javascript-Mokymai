/* 
Užduotis 1
Naudodami while loop, konsolėje parašykite nuo 10 iki 1. 
*/
// let x=0
// while (x<=10) {
//     console.log(x)
//     x++
// }

/* 
Užduotis 2
Naudodami for loop, konsolėje parašykite nuo 10 iki 1.
*/
// let x = 10;
// while (x >= 0) {
//   console.log(x);
//   x--;
// }

/*
Užduotis 3
Per mėnesį avių skaičius išauga 4 kartais. Naudodami while loop ir tris nurodytus kintamuosius, išveskite avių skaičių 12 mėnesių.

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

Štai kaip atrodys pirmos dvi eilutės:

Po 1 mėnesio(-ių) bus 16 avių!
Po 2 mėnesio(-ių) bus 64 avių!
*/

// let numAvys = 4;
// let numMenuo = 1;
// let kiekMenSpausdinti = 12;
// while (numMenuo <= kiekMenSpausdinti) {
//   numAvys = numAvys * 4;

//   console.log(`Po ${numMenuo} mėnesio(-ių) bus`, numAvys, `avių!`);
//   numMenuo++;
// }

/*
Užduotis 4
Atlikite užduotį JS 03 su for loop
*/
// let numAvys = 4;
// let numMenuo = 1;
// let kiekMenSpausdinti = 12;
// for (numMenuo; numMenuo <= kiekMenSpausdinti; numMenuo++) {
//   numAvys = numAvys * 4;
//   console.log(`Po ${numMenuo} mėnesio(-ių) bus`, numAvys, `avių!`);
// }

/*
Užduotis 5
Hidroeleketrinėje yra 19 generatorių. Pirmi 4 gamina po 62 MW, likusieji 15 - po 124 MW. Inžinieriai paprašė tavęs sukurti du ciklus (loops), kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių. Pirmiems 4 generatoriams panaudok while loop, likusiems 15 - for loop. Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):

Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

Naudokis tokiais kintamaisiais:
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;
*/

// let currentGen = 1;
// let totalGen = 19;
// let totalMW = 0;
// while (currentGen <= 4) {
//   totalMW += 62;
//   currentGen++;
//   console.log(
//     `Generatorius #${currentGen} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW}MW!`
//   );
// }
// for (currentGen; currentGen <= totalGen; currentGen++) {

//   totalMW += 124;
//   currentGen++;
//   console.log(
//     `Generatorius #${currentGen} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW}MW!`
//   );
// }
/*
Užduotis 6
Keli pakeitimai JS 05 užduočiai. Veikia tik lyginiai generatoriai. Panaudok tik vieną for loop. Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, o likusieji 15 - po 124 MW.

Konsolės formatas:

Generatorius #1 išjungtas.
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!

Naudojami kintamieji:
let totalGen = 19;
let totalMW = 0;
*/

// let totalGen = 19;
// let totalMW = 0;
// for (i = 1; i <= totalGen; i++) {
//   if (i % 2 == 0) {
//     if (i < 5) {
//       totalMW += 62;
//       console.log(
//         `Generatorius #${i} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW}MW!`
//       );
//     } else {
//       totalMW += 124;
//       console.log(
//         `Generatorius #${i} įjungtas, pridėjo 124 MW, viso generuojama ${totalMW}MW!`
//       );
//     }
//   } else {
//     console.log(`Generatorius #${i} įšjungtas!`);
//   }
// }

/*
Užduotis 7
Papildyk while loop taip, kad tik lyginiai skaičiai būtų spausdinami. Tavo rezultatas turėtų būti lyginiai skaičiai nuo 10 iki 2 žemėjančia tvarka.

let num=10;
while (num > 0) {

console.log(num);

num--;
}
*/
// let num = 10;
// while (num > 0) {
//   if (num % 2 == 0) {
//     console.log(num);
//   }

//   num--;
// }

/*
Užduotis 8
Sukurk funkciją maxOf2, kuri priima du skaičius ir gražina didesnį skaičių. Nepamiršk galimybės, kad skaičiai bus lygūs. Tuo atveju gražink vieną iš skaičių.
*/
// let a = Math.floor(Math.random() * 24);
// let b = Math.floor(Math.random() * 24);
// function didesnisIs2(a, b) {
//   return a > b ? a : b;
// }
// console.log(a)
// console.log(b)
// console.log(`Didesnis:`, didesnisIs2(a, b));
