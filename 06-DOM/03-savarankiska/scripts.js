//pirmas div

document.getElementById("pirma-antraste").innerHTML =
  "Naujas pirmos antraštės tekstas";
document.getElementById("pirmas-paragrafas").innerHTML =
  "Naujas pirmos paragrafo tekstas";

//antras div
console.log("ANTRAS DIV");

let tekstasIsParagrafo = document.getElementById("paragrafo-tekstas").innerHTML;
console.log("paimtas su innerHTML tekstas:", tekstasIsParagrafo);

let tekstasIsParagrafo2 =
  document.getElementById("paragrafo-tekstas").innerText;
console.log("paimtas su innerText tekstas:", tekstasIsParagrafo2);

//trecias div

console.log("TRECIAS DIV");

console.log("innerHTML turinys:", document.getElementById("trecias").innerHTML);
console.log("innerText turinys:", document.getElementById("trecias").innerText);

console.log();

//septintas div
function pakeisti() {
  document.getElementById("septinto-tekstas").innerHTML = "Naujas tekstas";
}

//astuntas div

function pakeisti2(id, text) {
  document.getElementById(id).innerHTML = text;
}

//devintas div

function pakeisti3(id, text) {
  document.getElementById(id).innerHTML = text;
}
function kitaSpalva(id, color) {
  document.getElementById(id).style.color = color;
}
//desimtas dyv

var a = 8;
var b = 9;

var suma = a + b;
var skirtumas = a - b;
var sandauga = a * b;
var dalmuo = a / b;

document.getElementById("suma").innerHTML = a + `+` + b + `=` + suma;
document.getElementById("skirtumas").innerHTML = a + `-` + b + `=` + skirtumas;
document.getElementById("sandauga").innerHTML = a + `*` + b + `=` + sandauga;
document.getElementById("dalmuo").innerHTML = a + `/` + b + `=` + dalmuo;

//vienuoliktas div

a = 7;
b = 5;

let isvedimui = `<p>${a}+${b}=${a + b}</p>
<p>${a}-${b}=${a - b}</p>
<p>${a}*${b}=${a * b}</p>
<p>${a}/${b}=${a / b}</p>`;

document.getElementById("vienuolikto-turinys").innerHTML = isvedimui;

//dvyliktas div
function keistiSpalva(id, color) {
  document.getElementById(id).style.color = color;
}
function keistiDydi(id, sizepx) {
  document.getElementById(id).style.fontSize = sizepx + "px";
}

//tryliktas div
let divKeitimui = document.getElementById("div-keitimui");

let plocioSlider = document.getElementById("plocio-slider");
let aukscioSlider = document.getElementById("aukscio-slider");

plocioSlider.oninput = function () {
  divKeitimui.style.width = this.value + "px";
};

aukscioSlider.oninput = function () {
  divKeitimui.style.height = this.value + "px";
};

let spalvosPasirinkimas = document.getElementById("spalvos-pasirinkimas");

spalvosPasirinkimas.oninput = function () {
  divKeitimui.style.backgroundColor = this.value;
};
let tekstasDivui = document.getElementById("tekstas-divui");
tekstasDivui.oninput = function () {
  divKeitimui.innerHTML = this.value;
};

//keturioliktas dyv

function pridetiZodi(elementas, zodis) {
  document.getElementById(elementas).value += zodis + " ";
}

//penkioliktas div
let penkioliktoTekstas = document.getElementById("penkiolikto-tekstas");
function zodziuKiekis() {
  let tekstas = penkioliktoTekstas.value;
  let zodziai = tekstas.trim().split(" ");
  document.getElementById(
    "penkiolikto-atsakymai"
  ).innerHTML = `<p>Zodziu kiekis: ${zodziai.length}</p>`;
}

function ilgiausiasZodis() {
  let tekstas = penkioliktoTekstas.value;
  let zodziai = tekstas.trim().split(" ");
  let ilgiausias = "";

  for (let zodis of zodziai) {
    if (zodis.length > ilgiausias.length) ilgiausias = zodis;
  }
  console.log(ilgiausias);

  document.getElementById(
    "penkiolikto-atsakymai"
  ).innerHTML = `<p>Ilgiausias zodis: ${ilgiausias}</p>
  <p>Jo ilgis: ${ilgiausias.length}</p>`;
}

//sesioliktas div
let pirmoSkirtukoTurinys = document.getElementById("pirmas-skirtukas");
let antroSkirtukoTurinys = document.getElementById("antras-skirtukas");

function pirmasSkirtukas() {
  pirmoSkirtukoTurinys.style.display = "block";
  antroSkirtukoTurinys.style.display = "none";
}
function antrasSkirtukas() {
  pirmoSkirtukoTurinys.style.display = "none";
  antroSkirtukoTurinys.style.display = "block";
}
//septinioliktas

let perjungtiMygtukas = document.getElementById("perjungti-mygtukas");
let perjungtiTekstas = document.getElementById("perjungti-tekstas");
perjungtiMygtukas.onclick = function () {
  if (this.innerText == "Rodyti") {
    this.innerText = "Nerodyti";
    perjungtiTekstas.style.display = "block";
  } else {
    this.innerText = "Rodyti";
    perjungtiTekstas.style.display = "none";
  }
};

//astuonioliktas div

let kitasPerjungtiTekstas = document.getElementById("kitas-perjungti-tekstas");
document.getElementById("kitas-perjungti-mygtukas").onclick = function () {
  if (kitasPerjungtiTekstas.style.display == "block") {
    this.innerText = "Rodyti";
    kitasPerjungtiTekstas.style.display = "none";
  } else {
    this.innerText = "Nerodyti";
    kitasPerjungtiTekstas.style.display = "block";
  }
};
// devynioliktas div

document.getElementById("devyniolikto-tekstas").onclick = function () {
  this.style.display = "none";
};

//1
function trumpiausiasZodis() {
  let tekstas = penkioliktoTekstas.value;
  let zodziai = tekstas.trim().split(" ");
  let trumpiausias = zodziai[0];

  for (let zodis of zodziai) {
    if (zodis.length < trumpiausias.length) trumpiausias = zodis;
  }
  console.log(trumpiausias);

  document.getElementById(
    "penkiolikto-atsakymai"
  ).innerHTML = `<p>Trumpiausias zodis: ${trumpiausias}</p>
    <p>Jo ilgis: ${trumpiausias.length}</p>`;
}
//2

let tekstoSpalvosPasirinkimas = document.getElementById(
  "teksto-spalvos-pasirinkimas"
);

tekstoSpalvosPasirinkimas.oninput = function () {
  divKeitimui.style.color = this.value;
};

//3
let spalvintiVirs100 = document.getElementById("nuspalvinti-virs100");
spalvintiVirs100.onclick = function () {
  let paragraphs = [];
  paragraphs = document.getElementById("spalvinamas-tekstas").children;
  console.log(paragraphs);
  for (let paragraph of paragraphs) {
    if (paragraph.innerText.length > 100) {
      paragraph.style.color = "red";
    }
  }
};

//4
