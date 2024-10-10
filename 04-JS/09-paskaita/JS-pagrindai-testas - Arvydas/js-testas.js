/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
console.log(`-------------------------------------------------`);

function euraiBaksai(euraiInt) {
  let baksai = (euraiInt * 1.1).toFixed(2);
  return baksai;
}
function randomNumber(min, max) {
  let x = Math.floor(Math.random() * (max - min) + min);
  return x;
}
let eurai = randomNumber(1, 1000);

console.log(`${eurai} EUR = ${euraiBaksai(eurai)} USD`);
/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
console.log(`-------------------------------------------------`);

function baksaiEurai(baksaiInt) {
  let eurai = (baksaiInt * 0.91).toFixed(2);
  return eurai;
}

let baksai = randomNumber(1, 1000);

console.log(`${baksai} USD = ${baksaiEurai(baksai)} EUR`);

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
console.log(`-------------------------------------------------`);

function calculateBMI(weightKg, heightM) {
  if (heightM) {
    bmi = (weightKg / heightM ** 2).toFixed(2);
    return bmi;
  } else {
    console.log(`Dalyba iš 0 negalima`);
  }
}
let manoBMI = calculateBMI(78, 1.9);
if (manoBMI > 25) {
  console.log(`BMI:${manoBMI} - Storas`);
} else {
  if (manoBMI < 25 && manoBMI > 18.5) {
    console.log(`BMI:${manoBMI} - Normalus`);
  } else {
    console.log(`BMI:${manoBMI} - Plonas`);
  }
}
/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
console.log(`-------------------------------------------------`);
let amziusMetais = 25;

let amziusDienomis = amziusMetais * 365;
let amziusValandomis = amziusDienomis * 24;
let amziusMinutemis = amziusValandomis * 60;
let amziusSekundemis = amziusMinutemis * 60;

console.log(`
Amžius metais - ${amziusMetais}
Amžius dienomis - ${amziusDienomis}
Amžius valandomis - ${amziusValandomis}
Amžius minutemis - ${amziusMinutemis}
Amžius sekundemis - ${amziusSekundemis}`);

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
console.log(`-------------------------------------------------`);
function convertTemp(temp, units) {
  if (units == `F` || units == `f`) {
    convertedTemp = (((temp - 32) * 5) / 9).toFixed(2);
    console.log(`${temp}F = ${convertedTemp}C`);
  } else {
    if (units == `C` || units == `c`) {
      convertedTemp = ((temp * 9) / 5 + 32).toFixed(2);
      console.log(`${temp}C = ${convertedTemp}F`);
    } else {
      console.log(`Neatpažinti temperatūros vienetai`);
    }
  }
}

temperatura = 100;
skale = `c`;

convertTemp(temperatura, skale);
/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
console.log(`-------------------------------------------------`);
let skaiciai = [];
for (let i = 1; i <= 10; i++) {
  skaiciai.push(i);
}
console.log(skaiciai.join(`-`));
// console.log(skaiciai.toString().replaceAll(`,`, `-`));

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
console.log(`-------------------------------------------------`);
let star = ``;
for (let i = 0; i < 5; i++) {
  star = star + `*`;
  console.log(star);
}
/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
console.log(`-------------------------------------------------`);
let now = new Date();
let kaledos = new Date();
kaledos.setMonth(11);
kaledos.setDate(25);
console.log(`Šiandien yra :`, now);
console.log(`Kalėdos bus:`, kaledos);
let skirtumas = (kaledos - now) / (1000 * 60 * 60 * 24);
console.log(`Iki Kalėdų liko ${Math.floor(skirtumas)} dienos!`);
/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
console.log(`-------------------------------------------------`);
let vardai = [`Tomas`, `Dainius`, `Paulius`, `Jonas`];
console.log(vardai);
console.log(vardai.toString());
// console.log(vardai.toString().replaceAll(`,`, `+`));
console.log(vardai.join(`+`));

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
console.log(`-------------------------------------------------`);

function generatePassword() {
  let passwordArray = [];
  let yraDidziuju = false;
  let yraMazuju = false;
  let yraSkaiciu = false;
  let yraSpec = false;
  while (
    yraDidziuju == false ||
    yraMazuju == false ||
    yraSkaiciu == false ||
    yraSpec == false
  ) {
    //generuojame ASCII skaicius
    passwordArray.length = 0;
    for (let i = 0; i < 12; i++) {
      passwordArray.push(randomNumber(33, 126));
    }
    //tikrinam didzioji raide? "65" "90"
    yraDidziuju = passwordArray.some(function (char) {
      return char >= 65 && char <= 90;
    });
    //tikrinam mazoji raide? "97" "122"
    yraMazuju = passwordArray.some(function (char) {
      return char >= 97 && char <= 122;
    });
    //tikrinam skaicius "48" "57"
    yraSkaiciu = passwordArray.some(function (char) {
      return char >= 48 && char <= 57;
    });
    //tikrinam specialus? "34" "47" ; "91" "96";  "123" "126"
    yraSpec = passwordArray.some(function (char) {
      return (
        (char >= 34 && char <= 47) ||
        (char >= 91 && char <= 96) ||
        (char >= 123 && char <= 126)
      );
    });
  }

  let pass = passwordArray.map((char) => String.fromCharCode(char));
  pass = pass.join(``);
  return pass;
}

let password = generatePassword();
console.log(password);

// let pass = password.forEach((char) => (char = String.fromCharCode(char)));
// let pass = password.map(char => String.fromCharCode(char));
// console.log(pass);
