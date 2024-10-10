// //1
// let student = {
//   name: "Vardenis",
//   surnasme: "Paardenis",
//   major: "Matematika Bakalauras",
//   credits: { required: 480, completed: 320 },
//   grades: [8, 6, 7, 5, 10],
//   age: 31,
//   height: 168,
//   course: 3,
//   faculty: "MF",
// };
// console.log(student);
// console.log(student.major);
// console.log(student.grades);
// console.log(student.credits);

// //2
// let movie1 = {
//   name: `The Lord of the Rings : The Fellowship of the Ring`,
//   director: `Peter Jackson`,
//   budget: 93000000,
//   boxOffice: 887400000,
//   genre: `fantasy`,
//   runningTime: `178 minutes`,
//   releaseDate: 2001,
//   starring: [
//     "Elijah Wood",
//     "Ian McKellen",
//     "Liv Tyler",
//     "Viggo Mortensen",
//     "Sean Astin",
//     "Cate Blanchett",
//     "John Rhys-Davies",
//     "Billy Boyd",
//     "Dominic Monaghan",
//     "Orlando Bloom",
//     "Christopher Lee",
//     "Hugo Weaving",
//     "Sean Bean",
//     "Ian Holm",
//     "Andy Serkis",
//   ],
// };
// console.log(movie1);
// console.log(`Profits: $` + (movie1.boxOffice - movie1.budget));
// console.log(`Notable actors:`, movie1.starring.length);
// new Date(Date.now()).getFullYear();
// console.log(
//   `Movie age:`,
//   new Date(Date.now()).getFullYear() - movie1.releaseDate
// );

// //3
// let book1 = {
//   pavadinimas: `Berniukas, kurmis, lapė ir arklys`,
//   autorius: `Charlie Mackesy`,
//   žanras: `grožinė`,
//   kaina: 14.99,
//   puslapiuKiekis: 128,
//   skyriai: [`įžanga`, `destymas`, `pabaiga`],
//   isleidimoMetai: 2020,
//   knygynuose: true,
// };

// let book2 = {
//   pavadinimas: `Žemas slėgis`,
//   autorius: `Sandra Brown`,
//   žanras: `detektyvas`,
//   kaina: 12.49,
//   puslapiuKiekis: 128,
//   skyriai: [`įžanga`, `dėstymas`, `dar dėstymo`, `pabaiga`],
//   isleidimoMetai: 2020,
//   knygynuose: true,
// };
// if (book1.puslapiuKiekis > book2.puslapiuKiekis) {
//   console.log(`Pirma knyga storesnė`);
// } else {
//   console.log(`Antra knyga storesnė`);
// }
// if (book1.skyriai.length > book2.skyriai.length) {
//     console.log(`Pirma knyga turi daugiau skyrių`);
//   } else {
//     console.log(`Antra knyga turi daugiau skyrių`);
//   }
//   if (book1.kaina >(book2.kaina*2)) {
//     console.log(`Pirma knyga yra bent dvigubai brangesnė už antrą`);
//   } else {
//     console.log(`Pirma knyga nėra dvigubai brangesnė už antrą`);
//   }

// //4
// let preke1 = {
//   retailPrice: 10,
//   price: 5.5,
//   itemId: 25558,
//   inStock: 20,
//   minBoxSize: { x: 180, y: 180, z: 250 },
// };
// let preke2 = {
//   retailPrice: 25,
//   price: 8,
//   itemId: 25559,
//   inStock: 2,
//   minBoxSize: { x: 250, y: 250, z: 1800 },
// };

// let preke3 = {
//   retailPrice: 5,
//   price: 2,
//   itemId: 25560,
//   inStock: 600,
//   minBoxSize: { x: 80, y: 80, z: 150 },
// };

// //   Raskite ir išveskite atskirose eilutėse kiekvienos
// //   prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės
// //   pelningumą ((kaina - savikaina) * kiekis sandėlyje).
// console.log(`Prekės ${preke1.itemId} dėžės dydis:`, preke1.minBoxSize);
// console.log(`Prekės ${preke2.itemId} dėžės dydis:`, preke2.minBoxSize);
// console.log(`Prekės ${preke3.itemId} dėžės dydis:`, preke3.minBoxSize);

// console.log(
//   `Prekės ${preke1.itemId} numatomas pelnas:`,
//   (preke1.retailPrice - preke1.price) * preke1.inStock
// );
// console.log(
//   `Prekės ${preke2.itemId} numatomas pelnas:`,
//   (preke2.retailPrice - preke2.price) * preke2.inStock
// );
// console.log(
//   `Prekės ${preke3.itemId} numatomas pelnas:`,
//   (preke3.retailPrice - preke3.price) * preke3.inStock
// );

// //5
// dateNow=2024
// let automobilis = {};
// automobilis.marke = `Seat`;
// automobilis.modelis = `Mii`;
// automobilis.rida = 118700;
// automobilis.gamybosMetai = 2011;
// automobilis.spalva = `Balta`;
// automobilis.darbinisTuris = `1.0l`;
// automobilis.dazta = false;
// automobilis.parduodama = true;

// console.log(`Vidutinė metinė eksplotacija:`,Math.floor(automobilis.rida/(2024-automobilis.gamybosMetai)) + `km`)

// //6
// let kauliukas1 = { sides: 6, value: 2 };
// let kauliukas2 = { sides: 20, value: 15 };
// let kauliukas3 = { sides: 12, value: 6 };

// function riduridu(kauliukas) {
//   let sides = kauliukas.sides;
//   newValue = Math.floor(Math.random() * sides) + 1;
//   kauliukas.value = newValue;
//   console.log(`Nauja d${sides} reikšmė:`, kauliukas.value);
// }
// riduridu(kauliukas1)
// riduridu(kauliukas2)
// riduridu(kauliukas3)

// //7
// // Susikurkite objektą informacijai apie knygyną saugoti. Į šį objektą sudėkite
// // tokias savybes su reikšmėmis: pavadinimas, adresas, plotas (kv. m.), kiek
// // turi knygų, darbo valandos, ar atidarytas. Išveskite šio knygyno objekto
// // raktus su reikšmėmis. Tuomet išveskite visas knygyno savybes, kurių
// // reikšmės yra ne string tipo (plotas, kiek turi knygų ir pan.).

// let knygynas = {
//   pavadinimas: `Pegasas`,
//   adresas: `Rašytojo g. 15, Vilnius`,
//   plotas: 255,
//   knyguSk: 1500,
//   darboVal: [`8-17`, `8-17`, `8-17`, `8-17`, `8-17`, `8-15`, `8-15`],
//   atidarytas: true,
// };
// for (const k in knygynas) {
//   console.log(k, `:`, knygynas[k]);
// }
// console.log(`______________________`)
// for (const k in knygynas) {
//   if (typeof knygynas[k] != "string") {
//     console.log(k, `:`, knygynas[k]);
//   }
// }

// //8
// // Susikurkite du objektus, dviejų studentų informacijai saugoti. Abiejuose
// // objektuose sudėkite šias savybes su reikšmėmis: vardas ir pavardė, studijų
// // programos pavadinimas, pažymiai. Raskite abiejų studentų pažymių
// // vidurkius. Išveskite abiejų studentų informaciją, bei pažymių vidurkius.
// // Raskite ir išveskite, kurio studento pažymių vidurkis yra didesnis ir
// išveskite jo vardą su pavarde.

let sum = 0;

let student1 = {
  name: "Namas",
  surname: "Surnamas",
  major: "Matematika Bakalauras",
  credits: { required: 480, completed: 320 },
  grades: [8, 6, 7, 5, 10],
};
let student2 = {
  name: "Vardenis",
  surname: "Pavardenis",
  major: "Fizika Bakalauras",
  credits: { required: 480, completed: 240 },
  grades: [4, 8, 10, 6, 6],
};
for (const grade of student1.grades) {
  sum += grade;
  vidurkis1 = sum / student1.grades.length;
}
sum=0
for (const grade of student2.grades) {
    sum += grade;
    vidurkis2 = sum / student2.grades.length;
  }
console.log(student1);
console.log(student2);
console.log(vidurkis1);
console.log(vidurkis2);
if (vidurkis1>vidurkis2) {
    console.log(`Studento`,student1.name,student1.surname, `pažymiai geresni`)

}else{  console.log(`Studento`,student2.name,student2.surname, `pažymiai geresni`)}

// //9+10
// let kauliukas1 = {
//   sides: 6,
//   value: 2,
//   riduridu: function () {
//     newValue = Math.floor(Math.random() * this.sides) + 1;
//     this.value = newValue;
//     console.log(`Nauja d${this.sides} reikšmė:`, this.value);
//   },
// };
// let kauliukas2 = {
//   sides: 20,
//   value: 15,
//   riduridu: function () {
//     newValue = Math.floor(Math.random() * this.sides) + 1;
//     this.value = newValue;
//     console.log(`Nauja d${this.sides} reikšmė:`, this.value);
//   },
// };
// let kauliukas3 = {
//   sides: 12,
//   value: 6,
//   riduridu: function () {
//     newValue = Math.floor(Math.random() * this.sides) + 1;
//     this.value = newValue;
//     console.log(`Nauja d${this.sides} reikšmė:`, this.value);
//   },
// };


// kauliukas1.riduridu();
// kauliukas2.riduridu();
// kauliukas3.riduridu();
