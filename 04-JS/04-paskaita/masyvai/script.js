// let skaiciai = [];
// skaiciai.push(4);
// skaiciai.push(5, 6, 7);
// skaiciai.push(8);
// console.log(skaiciai);
// //1
// console.log(skaiciai[0], skaiciai[skaiciai.length - 1]);
// console.log(skaiciai[2], skaiciai[3]);
// console.log(skaiciai.length);
// //2
// let desimt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(desimt);
// desimt[0] = 11;
// desimt[1] = 12;
// desimt[4] = 55;
// console.log(desimt);

// //3

// let penki = [];
// penki.push(1, 2, 3, 4, 5);
// console.log(penki);

// //4

// let randomNumbers = [];
// let a;
// console.log(a);
// for (i = 0; i < 10; i++) {
//   a = Math.floor(Math.random() * 10 + 1);
//   randomNumbers.push(a);
// }
// console.log(randomNumbers);

// // 5

// let studentGrades = [];
// let student2Grades = [];
// let sum = 0;
// let result = 0;

// for (i = 0; i < 8; i++) {
//   a = Math.floor(Math.random() * 10 + 1);
//   studentGrades.push(a);
//   a = Math.floor(Math.random() * 10 + 1);
//   student2Grades.push(a);
// }
// console.log(studentGrades);
// console.log(student2Grades);

// function avarage(array) {
//   array.forEach((element) => {
//     sum += element;
//   });
//   result = sum / array.length;
//   console.log(result);
//   sum = 0;
//   return result;
// }

// console.log(
//   avarage(studentGrades) > avarage(student2Grades)
//     ? "pirmas studentas mokosi geriau"
//     : "antras studentas mokosi geriau"
// );

//17

// let daiktai = [];
// daiktai.push(
//   "Lorem",
//   "ipsum",
//   "dolor",
//   "sit",
//   "amet",
//   "consectetur",
//   "adipisicing",
//   "elit",
//   "Possimus",
//   "nobis"
// );
// console.log(daiktai);
// for (const daiktas of daiktai) {
//   console.log(daiktas);
//   console.log(daiktas.length)
// }

// 21.Susikurkite masyvą failų pavadinimams saugoti, užpildykite jį duomenimis.
// Jums reikės nuskaityti šiuos failus, todėl pirma norėsite patikrinti su kuriais
// galite dirbti. Išveskite į ekraną tik tuos failus, kurių galūnė yra .txt
// arba .json tipo.

let files = [
  "startup.json",
  "unins000.dat",
  "unins000.exe",
  "default.json",
  "readme.txt",
];
for (const file of files) {
  if (file.endsWith(".json") || file.endsWith(".txt")) {
    console.log(file);
  }
}

// 25.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą atsitiktinai
// sugeneruotais pažymiais. Raskite vidurkį. Raskite kiek neigiamų pažymių studentas
// gavo (mažesnių nei 5). Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų
// pažymių kiekį.

// let grades1 = [];
// let grades2 = [];
// neigiamiPaz = [];
// teigiamiPaz = [];
// neigiamiPaz2 = [];
// teigiamiPaz2 = [];
// let a;
// let sum = 0;
// let avg;
// for (i = 0; i < 10; i++) {
//   a = Math.floor(Math.random() * 10 + 1);
//   grades1.push(a);
//   a = Math.floor(Math.random() * 10 + 1);
//   grades2.push(a);
// }

// console.log(grades1);
// console.log(grades2);
// for (const grade of grades1) {
//   sum += grade;
// }
// avg = sum / grades1.length;
// for (const grade of grades1) {
//   if (grade <= 5) {
//     neigiamiPaz.push(grade);
//   }
//     if (grade > 5) {
//     teigiamiPaz.push(grade);
//   }
// }
// console.log(`Pirmo studento`);
// console.log(`Vidurkis:`, avg);
// console.log(`Neigiamų pažymių skaičius:`, neigiamiPaz.length);
// console.log(`Teigiami pažymiai: `, teigiamiPaz);
// sum=0

// for (const grade of grades2) {
//   sum += grade;
// }
// avg = sum / grades2.length;

// for (const grade of grades2) {
//   if (grade <= 5) {
//     neigiamiPaz2.push(grade);
//   }
//     if (grade > 5) {
//     teigiamiPaz2.push(grade);
//   }
// }
// console.log(`Antro studento`);
// console.log(`Vidurkis:`, avg);
// console.log(`Neigiamų pažymių skaičius:`, neigiamiPaz2.length);
// console.log(`Teigiami pažymiai: `, teigiamiPaz2);

// 27.Susikurkite masyvą norimiems žodžiams saugoti. Užpildykite šį masyvą
// duomenimis. Į kitą masyvą atrinkite tuos žodžius, kurie yra trumpi (sudaro
// mažiau nei 5 raidės). Išveskite pradinius duomenis ir atrinktus.

let words = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
  "Dolor",
  "alias",
  "nostrum",
  "ut?",
  "Perspiciatis",
  "officiis",
  "provident",
  "aspernatur",
  "ea",
  "labore",
  "ab",
  "velit",
  "quo",
  "temporibus",
  "dolorum",
  "id",
  "ad",
  "laborum",
  "consequatur",
  "atque",
  "minima",
  "aperiam",
  "deserunt",
  "iste",
  "eum",
  "iusto",
  "pariatur",
  "adipisci!",
  "Quis",
  "similique",
  "veritatis",
  "officiis",
  "ullam",
  "eaque",
  "quod",
  "ad",
  "modi",
  "quia",
  "quas",
  "repellendus",
  "odio",
  "quae",
];
console.log(words);
let smallWords = [];
for (const word of words) {
  if (word.length < 5) {
    smallWords.push(word);
  }
}
console.log(smallWords);
