console.log(document.getElementById("pirmas"));

let pirmoAntras = document.querySelector("#pirmo-antras");
console.log(pirmoAntras);

console.log(document.querySelector(`#antras article`));
console.log(document.querySelectorAll(`#antras article`));

let antro_pirmas_str = document.querySelector("#antras article");
let antro_pirmas_str_p = antro_pirmas_str.querySelector("p");
console.log(antro_pirmas_str);
console.log(antro_pirmas_str_p);

let trecioKetvirtas = document.getElementById(`trecio-ketvirtas`);
trecioKetvirtas.innerHTML += "<p class='raudonas'>naujas paragrafas</p>";

let pirmasBtn = document.getElementById(`pirmas-btn`);
let antrasBtn = document.getElementById(`antras-btn`);
let treciasBtn = document.getElementById(`trecias-btn`);

pirmasBtn.addEventListener("click", (e) => {
  alert("Paspaustas pirmas mygtukas");
});

antrasBtn.addEventListener("click", (e) => {
  e.target.disabled = true;
});
treciasBtn.addEventListener("keyup", (e) => {
  let norimasTekstas = e.target.value;
  document.querySelector("#penktas #paragrafas").innerHTML = norimasTekstas;
});

/*
UZDUOTIS:
- sukurti HTML elementa su klase ir id, prideti dvi naujas klases per JS, panaikinti viena klase per JS, prideti CSS stiliu
- sukurti nauja div su id, jame JS pagalba sukurti nauja html elementa, tam naujam elementui ideti nauja tekstas ir bent viena klase, klases stiliu aprasyti css'e
*/

let naujasDiv1 = document.createElement("div");
naujasDiv1.innerText = "tekstastekstastekstas";
document.querySelector("#septintas").appendChild(naujasDiv1);
naujasDiv1.classList.add("pirmas", "antras");
naujasDiv1.classList.remove("pirmas");
naujasDiv1.style.color = `#45f545`;

let naujasDiv2 = document.createElement("div");
naujasDiv2.innerText = "tekstastekstastekstas2";
document.querySelector("#septintas").appendChild(naujasDiv2);
naujasDiv2.id = "unikalus";

let naujasSpan = document.createElement("span");
document.querySelector("#unikalus").appendChild(naujasSpan);
naujasSpan.innerText = `slaptas tekstas`;
naujasSpan.classList.add("slaptas");
