/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

// let vardas = `Vardenis`;
// let pavarde = `Pavardenis`;
// let dob = 1991;
// let currentYear = 2024;
// console.log(
//   `Aš esu`,
//   vardas,
//   pavarde + `.`,
//   `Man yra`,
//   currentYear - dob,
//   `metai(-ų)`
// );

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

// let a = Math.random() * 4;
// let b = Math.random() * 4;
// if (a > b) {
//   console.log((a / b).toFixed(2));
// } else {
//   console.log((b / a).toFixed(2));
// }

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

// let a = Math.random() * 25;
// let b = Math.random() * 25;
// let c = Math.random() * 25;
// console.log(a, b, c);

// if ((a > b && a < c) || (a < b && a > c)) {
//   console.log(a);
// } else {
//   if ((b > a && b < c) || (b < a && b > c)) {
//     console.log(b);
//   } else {
//     console.log(c);
//   }
// }

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

// let kr1 = Math.floor(Math.random() * 10) + 1;
// let kr2 = Math.floor(Math.random() * 10) + 1;
// let kr3 = Math.floor(Math.random() * 10) + 1;

// console.log(kr1);
// console.log(kr2);
// console.log(kr3);

// if (kr1 < kr2 + kr3 && kr2 < kr1 + kr3 && kr3 < kr1 + kr2) {
//   console.log(`Trikampis galimas`);
// } else {
//   console.log(`Trikampis negalimas`);
// }

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

// let a = Math.floor(Math.random() * 3);
// let b = Math.floor(Math.random() * 3);
// let c = Math.floor(Math.random() * 3);
// let d = Math.floor(Math.random() * 3);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let nuliai = 0;
// let vienetai = 0;
// let dvejetai = 0;

// a == 0 ? nuliai++ : null;
// b == 0 ? nuliai++ : null;
// c == 0 ? nuliai++ : null;
// d == 0 ? nuliai++ : null;
// a == 1 ? vienetai++ : null;
// b == 1 ? vienetai++ : null;
// c == 1 ? vienetai++ : null;
// d == 1 ? vienetai++ : null;
// a == 2 ? dvejetai++ : null;
// b == 2 ? dvejetai++ : null;
// c == 2 ? dvejetai++ : null;
// d == 2 ? dvejetai++ : null;
// console.log(`nuliai:`, nuliai);
// console.log(`vienetai:`, vienetai);
// console.log(`dvejetai:`, dvejetai);

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
// let a = Math.floor(Math.random() * 20) - 10;
// let b = Math.floor(Math.random() * 20) - 10;
// let c = Math.floor(Math.random() * 20) - 10;
// if (a < 0) {
//   console.log(`[${a}]`);
// } else {
//   if (a > 0) {
//     console.log(`{${a}}`);
//   } else {
//     console.log(`(${a})`);
//   }
// }
// if (b < 0) {
//     console.log(`[${b}]`);
//   } else {
//     if (b > 0) {
//       console.log(`{${b}}`);
//     } else {
//       console.log(`(${b})`);
//     }
//   }
//   if (c < 0) {
//     console.log(`[${c}]`);
//   } else {
//     if (c > 0) {
//       console.log(`{${c}}`);
//     } else {
//       console.log(`(${c})`);
//     }
//   }
/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
// let h = Math.floor(Math.random() * 24);
// let m = Math.floor(Math.random() * 60);
// let s = Math.floor(Math.random() * 60);
// let extraTime = Math.floor(Math.random() * 60);
// console.log(h, `h`, m, `m`, s, `s`);
// s = s + extraTime;
// console.log(h, `h`, m, `m`, s, `s`);
// if (s >= 60) {
//   s = s - 60;
//   m = m + 1;
//   if (m >= 60) {
//     m = m - 60;
//     h = h + 1;
//   }
// }
// console.log(h, `h`, m, `m`, s, `s`);

/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
// */
// let a = Math.floor(Math.random() * 8999) + 1000;
// let b = Math.floor(Math.random() * 8999) + 1000;
// let c = Math.floor(Math.random() * 8999) + 1000;
// let d = Math.floor(Math.random() * 8999) + 1000;
// let e = Math.floor(Math.random() * 8999) + 1000;
// let f = Math.floor(Math.random() * 8999) + 1000;
// console.log(a, b, c, d, e, f);
// let skaicius1;
// let skaicius2;
// let skaicius3;
// let skaicius4;
// let skaicius5;
// let skaicius6;

// if (a > b && a > c && a > d && a > e && a > f) {
//   skaicius1 = a;
//   a = 0;
// } else {
//   if (b > a && b > c && b > d && b > e && b > f) {
//     skaicius1 = b;
//     b = 0;
//   } else {
//     if (c > a && c > b && c > d && c > e && c > f) {
//       skaicius1 = c;
//       c = 0;
//     } else {
//       if (d > a && d > b && d > c && d > e && d > f) {
//         skaicius1 = d;
//         d = 0;
//       } else {
//         if (e > a && e > b && e > c && e > d && e > f) {
//           skaicius1 = e;
//           e = 0;
//         } else {
//           skaicius1 = f;
//           f = 0;
//         }
//       }
//     }
//   }
// }
// console.log(a, b, c, d, e, f);
// if (a > b && a > c && a > d && a > e && a > f && a != skaicius1) {
//   skaicius2 = a;
//   a = 0;
// } else {
//   if (b > a && b > c && b > d && b > e && b > f && b != skaicius1) {
//     skaicius2 = b;
//     b = 0;
//   } else {
//     if (c > a && c > b && c > d && c > e && c > f && c != skaicius1) {
//       skaicius2 = c;
//       c = 0;
//     } else {
//       if (
//         d > a &&
//         d > b &&
//         d > c &&
//         d > e &&
//         d > f &&
//         d != skaicius1
//       ) {
//         skaicius2 = d;
//         d = 0;
//       } else {
//         if (
//           e > a &&
//           e > b &&
//           e > c &&
//           e > d &&
//           e > f &&
//           e != skaicius1
//         ) {
//           skaicius2 = e;
//           e = 0;
//         } else {
//           skaicius2 = f;
//           f = 0;
//         }
//       }
//     }
//   }
// }
// console.log(a, b, c, d, e, f);
// if (
//   a > b &&
//   a > c &&
//   a > d &&
//   a > e &&
//   a > f &&
//   a != skaicius1 &&
//   a != skaicius2
// ) {
//   skaicius3 = a;
//   a = 0;
// } else {
//   if (
//     b > a &&
//     b > c &&
//     b > d &&
//     b > e &&
//     b > f &&
//     b != skaicius1 &&
//     b != skaicius2
//   ) {
//     skaicius3 = b;
//     b = 0;
//   } else {
//     if (
//       c > a &&
//       c > b &&
//       c > d &&
//       c > e &&
//       c > f &&
//       c != skaicius1 &&
//       c != skaicius2
//     ) {
//       skaicius3 = c;
//       c = 0;
//     } else {
//       if (
//         d > a &&
//         d > b &&
//         d > c &&
//         d > e &&
//         d > f &&
//         d != skaicius1 &&
//         d != skaicius2
//       ) {
//         skaicius3 = d;
//         d = 0;
//       } else {
//         if (
//           e > a &&
//           e > b &&
//           e > c &&
//           e > d &&
//           e > f &&
//           e != skaicius1 &&
//           e != skaicius2
//         ) {
//           skaicius3 = e;
//           e = 0;
//         } else {
//           skaicius3 = f;
//           f = 0;
//         }
//       }
//     }
//   }
// }
// console.log(a, b, c, d, e, f);
// if (
//   a > b &&
//   a > c &&
//   a > d &&
//   a > e &&
//   a > f &&
//   a != skaicius1 &&
//   a != skaicius2 &&
//   a != skaicius3
// ) {
//   skaicius4 = a;
//   a = 0;
// } else {
//   if (
//     b > a &&
//     b > c &&
//     b > d &&
//     b > e &&
//     b > f &&
//     b != skaicius1 &&
//     b != skaicius2 &&
//     b != skaicius3
//   ) {
//     skaicius4 = b;
//     b = 0;
//   } else {
//     if (
//       c > a &&
//       c > b &&
//       c > d &&
//       c > e &&
//       c > f &&
//       c != skaicius1 &&
//       c != skaicius2 &&
//       c != skaicius3
//     ) {
//       skaicius4 = c;
//       c = 0;
//     } else {
//       if (
//         d > a &&
//         d > b &&
//         d > c &&
//         d > e &&
//         d > f &&
//         d != skaicius1 &&
//         d != skaicius2 &&
//         d != skaicius3
//       ) {
//         skaicius4 = d;
//         d = 0;
//       } else {
//         if (
//           e > a &&
//           e > b &&
//           e > c &&
//           e > d &&
//           e > f &&
//           e != skaicius1 &&
//           e != skaicius2 &&
//           e != skaicius3
//         ) {
//           skaicius4 = e;
//           e = 0;
//         } else {
//           skaicius4 = f;
//           f = 0;
//         }
//       }
//     }
//   }
// }
// console.log(a, b, c, d, e, f);
// if (
//   a > b &&
//   a > c &&
//   a > d &&
//   a > e &&
//   a > f &&
//   a != skaicius1 &&
//   a != skaicius2 &&
//   a != skaicius3 &&
//   a != skaicius4
// ) {
//   skaicius5 = a;
//   a = 0;
// } else {
//   if (
//     b > a &&
//     b > c &&
//     b > d &&
//     b > e &&
//     b > f &&
//     b != skaicius1 &&
//     b != skaicius2 &&
//     b != skaicius3 &&
//     b != skaicius4
//   ) {
//     skaicius5 = b;
//     b = 0;
//   } else {
//     if (
//       c > a &&
//       c > b &&
//       c > d &&
//       c > e &&
//       c > f &&
//       c != skaicius1 &&
//       c != skaicius2 &&
//       c != skaicius3 &&
//       c != skaicius4
//     ) {
//       skaicius5 = c;
//       c = 0;
//     } else {
//       if (
//         d > a &&
//         d > b &&
//         d > c &&
//         d > e &&
//         d > f &&
//         d != skaicius1 &&
//         d != skaicius2 &&
//         d != skaicius3 &&
//         d != skaicius4
//       ) {
//         skaicius5 = d;
//         d = 0;
//       } else {
//         if (
//           e > a &&
//           e > b &&
//           e > c &&
//           e > d &&
//           e > f &&
//           e != skaicius1 &&
//           e != skaicius2 &&
//           e != skaicius3 &&
//           e != skaicius4
//         ) {
//           skaicius5 = e;
//           e = 0;
//         } else {
//           skaicius5 = f;
//           f = 0;
//         }
//       }
//     }
//   }
// }
// console.log(a, b, c, d, e, f);
// if (
//   a > b &&
//   a > c &&
//   a > d &&
//   a > e &&
//   a > f &&
//   a != skaicius1 &&
//   a != skaicius2 &&
//   a != skaicius3 &&
//   a != skaicius4 &&
//   a != skaicius5
// ) {
//   skaicius6 = a;
//   a = 0;
// } else {
//   if (
//     b > a &&
//     b > c &&
//     b > d &&
//     b > e &&
//     b > f &&
//     b != skaicius1 &&
//     b != skaicius2 &&
//     b != skaicius3 &&
//     b != skaicius4 &&
//     b != skaicius5
//   ) {
//     skaicius6 = b;
//     b = 0;
//   } else {
//     if (
//       c > a &&
//       c > b &&
//       c > d &&
//       c > e &&
//       c > f &&
//       c != skaicius1 &&
//       c != skaicius2 &&
//       c != skaicius3 &&
//       c != skaicius4 &&
//       c != skaicius5
//     ) {
//       skaicius6 = c;
//       c = 0;
//     } else {
//       if (
//         d > a &&
//         d > b &&
//         d > c &&
//         d > d &&
//         d > e &&
//         d > f &&
//         d != skaicius1 &&
//         d != skaicius2 &&
//         d != skaicius3 &&
//         d != skaicius4 &&
//         d != skaicius5
//       ) {
//         skaicius6 = d;
//         d = 0;
//       } else {
//         if (
//           e > a &&
//           e > b &&
//           e > c &&
//           e > d &&
//           e > e &&
//           e > f &&
//           e != skaicius1 &&
//           e != skaicius2 &&
//           e != skaicius3 &&
//           e != skaicius4 &&
//           e != skaicius5
//         ) {
//           skaicius6 = e;
//           e = 0;
//         } else {
//           skaicius6 = f;
//           f = 0;
//         }
//       }
//     }
//   }
// }
// console.log(skaicius1, skaicius2, skaicius3, skaicius4, skaicius5, skaicius6);
