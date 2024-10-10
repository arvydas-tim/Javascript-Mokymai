// function pirma() {
//   console.log(`Arvydas`);
//   console.log(`Pasirinkau programavima, nes skauda nugara`);
// }
// pirma();
// pirma();
// pirma();

// function antra() {
//   console.log(
//     `Kalnai kelmuoti, pakalnės nuplikę!\nKas jūsų grožei senobinei tiki?\nKur toj puikybė jūsų pasidėjo?\nKur ramus jūsų ūžimas nuo vėjo,\nKai balto miško lapeliai šlamėjo `
//   );
// }
// for (let i = 0; i < 6; i++) {
//   antra();
// }

// function trecia1() {
//   console.log(`Ir senos pušys siūravo, braškėjo?
// Kur jūsų paukščiai, paukšteliai, paukštytės,
// Katrų čilbančių teip ramu klausytis?
// Kur jūsų žvėrys, gyvuliai, žvėreliai?
// Kur žvėrų olos, laužai ir urveliai?`);
// }
// function trecia2() {
//   console.log(`Visa prapuolę; tik ant lauko pliko
// Kelios pušelės apykraivės liko!..
// Skujom, šakelėm ir šiškom nuklotą
// Kepina saulė nenaudingą plotą,`);
// }

// function trecia3() {
//   console.log(`In kurį žiūrint teip neramu regis:
// Lyg tartum rūmas suiręs, nudegęs,
// Lyg kokio miesto išgriuvus pūstynė,
// Lyg kokio raisto apsvilus kimsynė!..`);
// }
// trecia1();
// trecia2();
// trecia3();

// function ketvirta1() {
//   console.log(`Miškan, būdavo, eini - tai net akį veria;`);
// }
// function ketvirta2() {
//   console.log(`Vat teip linksmina dūšią, ažu širdies tveria,`);
// }
// function ketvirta3() {
//   ketvirta1();
//   ketvirta2();
// }
// ketvirta3();

// function penkta1() {
//   a = Math.floor(Math.random() * 10) + 1;
//   b = Math.floor(Math.random() * 10) + 1;
//   console.log(`${a} + ${b} = ` + (a + b));
// }
// penkta1();

// function sesta() {
//   data = {
//     vardas: `Sestas`,
//     pavarde: `Sestauskas`,
//     amzius: 66,
//     alga: 1666,
//     etatas: 0.6,
//     specializacija: `Neapykantos nusikaltimai`,
//   };
//   for (const k in data) {
//     console.log(k.toUpperCase(), `★ `, data[k]);
//   }
// }
// sesta();

// function septinta() {
//   skaiciai = [];
//   for (let i = 0; i < 11; i++) {
//     skaiciai.push(Math.floor(Math.random() * 10) + 1);
//   }
//   console.log(skaiciai.join(` `));
// }
// for (let i = 0; i < 6; i++) {
//   septinta();
// }

// function astunta() {
//   a = Math.floor(Math.random() * 10) + 1;
//   return a;
// }
// for (let i = 0; i < 10; i++) {
//   console.log(astunta());
// }

// let vardas1 = `Arvydas`;
// function devinta(vardas) {
//   console.log(`Labas,`, vardas + `!`);
// }
// function devinta2(vardas) {
//   console.log(`Viso gero,`, vardas + `!`);
// }
// devinta(vardas1);
// devinta2(vardas1);

// let a1 = Math.floor(Math.random() * 10) + 1;
// let b2 = Math.floor(Math.random() * 10) + 1;
// function desimta(num1, num2) {
//   if (num1 > num2) {
//     console.log(`Skaičius ${num1} didesnis už ${num2}`);
//   } else {
//     if (num1 < num2) {
//       console.log(`Skaičius ${num2} didesnis už ${num1}`);
//     } else {
//       console.log(`Skaičiai ${num2} ir ${num1} lygūs`);
//     }
//   }
// }
// desimta(a1, b2);

function venuolikta(marke, modelis, pagaminta, turis) {
  let automobilis = {
    marke: marke,
    modelis: modelis,
    pagaminta: pagaminta,
    turis: turis,
  };
  console.log(`Automobilio duomenys:`);
  for (const k in automobilis) {
    console.log(k.toUpperCase(), ` - `, automobilis[k]);
  }
}
venuolikta(`Seat`, `Ibiza`, 2008, 1.4);
// automobilis2 = { marke: `Seat`, modelis: `Mii`, pagaminta: 2013, turis: 1 };

// function dvylikta1(num1, num2) {
//   console.log(`${num1} + ${num2} = ` + (num1 + num2));
// }
// function dvylikta2(num1, num2) {
//   console.log(`${num1} - ${num2} = ` + (num1 - num2));
// }
// function dvylikta3(num1, num2) {
//   console.log(`${num1} * ${num2} = ` + num1 * num2);
// }
// function dvylikta4(num1, num2) {
//   console.log(`${num1} / ${num2} = ` + num1 / num2);
// }

// function dvylikta5() {
//   a = Math.floor(Math.random() * 10) + 1;
//   b = Math.floor(Math.random() * 10) + 1;
//   dvylikta1(a, b);
//   dvylikta2(a, b);
//   dvylikta3(a, b);
//   dvylikta4(a, b);
// }
// dvylikta5();
// dvylikta5();
// dvylikta5();

// //13
// function zodziai(strings) {
//   for (const string of strings) {
//     console.log(`Žodžio ${string} ilgis: `, string.length);
//   }
// }
// skaiciaiZodziais = [`vienas`, `du`, `trys`, `keturi`, `penki`];
// zodziai(skaiciaiZodziais);

// 14

// function kvadratai(integers) {
//   for (const int of integers) {
//     sq = int * int;
//     console.log(int + `^2 = ` + sq + ` | ` + int + `^2/2 = ` + sq / 2);
//   }
// }
// let skaiciai1 = [1, 2, 3, 4, 5];
// let skaiciai2 = [9, 8, 7, 6, 5];
// kvadratai(skaiciai1);
// kvadratai(skaiciai2);

//15

// function vidurkis(grades, name, surname) {
//   sum = 0;
//   for (const grade of grades) {
//     sum = sum + grade;
//     avg = sum / grades.length;
//   }
//   console.log(`Studento ${name} ${surname} pažymių ${grades} vidurkis: ${avg}`)
// }
// let vardas=`Studas`
// let pavarde=`Studauskas`
// let pazymiai =[5,6,7,8,9,10,8,6,4]
// vidurkis(pazymiai,vardas,pavarde)

//16

// function didziausias(integers) {
//   max = Math.max(...integers);
//   return max;
// }
// function uzpildymas(emptyArr,reps) {
//   for (let i = 0; i < reps; i++) {
//     a = Math.floor(Math.random() * 99) + 1;
//     emptyArr.push(a);
//   }
// }
// let skaiciai1 = [];
// let skaiciai2 = [];
// let skaiciai3 = [];

// uzpildymas(skaiciai1,10);
// console.log(skaiciai1);
// console.log(`Didziausias skaicius: ` + didziausias(skaiciai1));

// uzpildymas(skaiciai2,10);
// console.log(skaiciai2);
// console.log(`Didziausias skaicius: ` + didziausias(skaiciai2));

// uzpildymas(skaiciai3,10);
// console.log(skaiciai3);
// console.log(`Didziausias skaicius: ` + didziausias(skaiciai3));

//17

// let sakinys = `Mano batai buvo du`;

// function spausdinu(string) {
//   console.log(sakinys);
// }
// spausdinu(sakinys)

//18

// function atsitiktinisSkaicius(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// //19
// function vidurkis(grades) {
//   sum = 0;
//   for (const grade of grades) {
//     sum = sum + grade;
//     avg = sum / grades.length;
//   }
//   return avg;
// }
// let vardas = `Studas`;
// let vardas2 = `Budas`;
// let vardas3 = `Kudas`;
// let pazymiai = [5, 6, 7, 8, 9, 10, 8, 6, 4];
// let pazymiai2 = [10, 10, 10, 5, 8, 1, 6, 8, 5, 8];
// let pazymiai3 = [1, 2, 3, 5, 4, 2, 3, 1, 2];

// function studentoAtaskaita(avarage, name) {
//   console.log(`Studento ${name} pažymių vidurkis: ${avarage}`);
// }

// studentoAtaskaita(vidurkis(pazymiai), vardas);
// studentoAtaskaita(vidurkis(pazymiai2), vardas2);
// studentoAtaskaita(vidurkis(pazymiai3), vardas3);
// //20
// function maziausiasDaliklis(integer) {
//   for (let i = 2; i <= integer; i++) {
//     if (integer % i == 0) {
//       return i;
//     }
//   }
// }

// for (let i = 10; i < 30; i++) {
//   console.log(i, `|`, maziausiasDaliklis(i));
// }
// //21
// function arPirminis(integer) {
//   if (maziausiasDaliklis(integer) == integer) {
//     return true;
//   }
//   return false;
// }
// // console.log(integer, `yra pirminis skaičius.`);
// console.log(arPirminis(12));
// for (let i = 2; i < 15; i++) {
//   if (arPirminis(i)) {
//     console.log(i, `yra pirminis`);
//   }
// }

// //22

// function sudetis(num1, num2) {
//   return num1 + num2;
// }
// function atimtis(num1, num2) {
//   return num1 - num2;
// }
// function daugyba(num1, num2, num3) {
//   return num1 * num2 * num3;
// }
// function skaiciuUzpildymas(amount, integers) {
//   for (let i = 0; i < amount; i++) {
//     integers.push(atsitiktinisSkaicius(1, 100));
//   }
// }
// skaiciukai1 = [];
// skaiciukai2 = [];
// skaiciuUzpildymas(2, skaiciukai1);
// skaiciuUzpildymas(3, skaiciukai2);

// function spausdinimas(integers) {
//   console.log(
//     `Sudets: `,
//     integers[0],
//     `+`,
//     integers[1],
//     `=`,
//     sudetis(integers[0], integers[1])
//   );
//   console.log(
//     `Atimtis: `,
//     integers[0],
//     `-`,
//     integers[1],
//     `=`,
//     atimtis(integers[0], integers[1])
//   );
//   console.log(
//     `Daugyba: `,
//     integers[0],
//     `*`,
//     integers[1],
//     `*`,
//     integers[2],
//     `=`,
//     daugyba(integers[0], integers[1], integers[2])
//   );
// }
// spausdinimas(skaiciukai2);

// //23
// function suma(integers) {
//   sum = 0;
//   for (const integer of integers) {
//     sum = sum + integer;
//   }
//   return sum;
// }
// console.log(suma(skaiciukai1));
// console.log(suma(skaiciukai2));
// if (suma(skaiciukai1) > suma(skaiciukai2)) {
//   console.log(`Pirmo rinkinio ${skaiciukai1} suma didesnė`);
// } else {
//   console.log(`Antro rinkinio ${skaiciukai2} suma didesnė`);
// }

// //24
// function ilgiausias(zodziai) {
//   max = "";
//   for (const zodis of zodziai) {
//     if (zodis.length > max.length) {
//       max = zodis;
//     }
//   }
//   return max;
// }
// let zodeliai = [
//   `vienas`,
//   `du`,
//   `trys`,
//   `keturi`,
//   `penki`,
//   `sesi`,
//   `septyni`,
//   `astuoniolika`,
// ];

// console.log(
//   `Ilgiausias žodis ${ilgiausias(zodeliai)} - jo ilgis  ${
//     ilgiausias(zodeliai).length
//   }`
// );

//25

function skaiciuMasyvas(kiekis, min, max, intmasyvas) {
  for (let i = 0; i < kiekis; i++) {
    intmasyvas.push(Math.floor(Math.random() * (max - min) + min));
  }
  return intmasyvas;
}
function skolos(integers) {
  for (const integer of integers) {
    if (integer < 5) {
      return false;
    }
  }
  return true;
}
function spausd(bool) {
  if (bool) {
    console.log(`Skolų nėra`);
  } else {
    console.log(`Sudentas turi skolų`);
  }
}

let pazymeliai = [];
let pazymeliai2 = [];

pazymeliai = skaiciuMasyvas(10, 1, 10, pazymeliai);
pazymeliai2 = skaiciuMasyvas(10, 1, 10, pazymeliai2);

console.log(pazymeliai);
console.log(pazymeliai2);

spausd(skolos(pazymeliai));
spausd(skolos(pazymeliai2));

//funkcijos objektuose

let gerasDarbuotojas = {
  vardas: "Valerijus",
  pavarde: `Gerasimovas`,
  atlyginimas: 1000,
  etatas: 1.5,
  keistiEetata: function (int) {
    this.etatas = int;
    console.log(
      `Naujas etatas ${this.etatas}. Mėnesinė alga: ${
        this.atlyginimas * this.etatas
      }Rub`
    );
  },
  keistiAlga: function (proc) {
    this.atlyginimas = this.atlyginimas * (proc / 100 + 1);
  },
};
gerasDarbuotojas.keistiEetata(1);
gerasDarbuotojas.keistiAlga(-20);
gerasDarbuotojas.keistiEetata(1.2);

//fabrikas
function darbuotojas_factory(vardas, pavarde, atlyginimas, etatas = 1) {
  return {
    vardas,
    pavarde,
    atlyginimas,
    etatas,
    keistiEetata: function (int) {
      this.etatas = int;
      console.log(
        `Naujas etatas ${this.etatas}. Mėnesinė alga: ${
          this.atlyginimas * this.etatas
        }Eur`
      );
    },
    keistiAlga: function (proc) {
      this.atlyginimas = this.atlyginimas * (proc / 100 + 1);
    },
  };
}
let darbuotojas1 = darbuotojas_factory(`Vardenis`, `Pavardenis`, 1500);
console.log(darbuotojas1);

darbuotojas1.keistiEetata(1.2);
darbuotojas1.keistiEetata(`5`);


