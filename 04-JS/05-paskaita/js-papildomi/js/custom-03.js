/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/

// for (let i=0; i <= 10; i++) {
//   console.log(`labas`);
// }

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
// for (let i = 10; i <= 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
// for (let i = 10; i <= 50; i++) {
//     if (i % 10 == 0) {
//        continue
//       }
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
// sum = 0;
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     sum += 1;
//   }
// }
// console.log(sum);
/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
// let a;
// let sum = 0;
// for (let i = 0; i <= 300; i++) {
//   a = Math.floor(Math.random() * 301);
//   if (a > 150) {
//     sum += 1;
//   }
//   if (a > 275) {
//     console.log(`[${a}]`);
//     continue;
//   }
//   console.log(a);
// }
// console.log(`daugiau nei 150:`, sum);
/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

// let manoSkaiciai = ``;
// for (let i = 1; i < 3001; i++) {
//   if (i % 77 == 0) manoSkaiciai = manoSkaiciai + i + `,`;
// }
// manoSkaiciai = manoSkaiciai.slice(0, -1);
// console.log(manoSkaiciai);

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/
a = 10;
eilute = ``;
for (let k = 0; k <= a; k++) {
  eilute = eilute + ` * `;
}
for (let i = 0; i <= a; i++) {
  console.log(eilute);
}
