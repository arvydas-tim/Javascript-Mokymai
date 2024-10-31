let recipie1 = [
  { amount: 400, unit: `g`, pav: `vištienos šlaunelių mėsos` },
  { amount: 1, unit: `vnt.`, pav: `kiaušinių` },
  { amount: 60, unit: `g`, pav: `maltų džiūvėsėlių` },
  { amount: 50, unit: `g`, pav: `kietojo sūrio (tarkuoto)` },
  { amount: 1, unit: `šaukšt.`, pav: `alyvuogių aliejaus` },
  { amount: 1, unit: `šaukšt.`, pav: `česnako granulės` },
  { amount: 0.5, unit: `šaukšt.`, pav: `prieskoninių žolelių` },
  { amount: 0.5, unit: `šaukšt.`, pav: `druskos` },
  { amount: 0.5, unit: `šaukšt.`, pav: `maltų juodųjų pipirų` },
];

let recipie3 = [
  { amount: 600, unit: `g`, pav: `moliūgų (gryno svorio)` },
  { amount: 400, unit: `vnt.`, pav: `kokosų pieno` },
  { amount: 1, unit: `stikl.`, pav: `vandens (arba sultinio)` },
  { amount: 100, unit: `g`, pav: `rūkytos lašišos filė` },
  { amount: 1, unit: `vnt.`, pav: `svogūnų` },
  { amount: 2, unit: `šaukšt.`, pav: `aliejaus (kepimui)` },
];

let recipie2 = [
  { amount: 300, unit: `g`, pav: `vištienos filė` },
  { amount: 1, unit: `vnt.`, pav: `avokadų` },
  { amount: 2, unit: `stikl.`, pav: `pomidorų` },
  { amount: 1, unit: `g`, pav: `agurkų` },
  { amount: 2, unit: `vnt.`, pav: `salotų galvos` },
  { amount: 0.5, unit: `vnt.`, pav: `rausvųjų svogūnų` },
  { amount: 1, unit: `šaukšt.`, pav: `aliejaus (kepimui)` },
];
let recipies = [recipie1, recipie2, recipie3];

///////////////////////////////////

var slider = document.getElementById("porciju-kiekis");
var output = document.getElementById("sliderIndicator");
output.innerHTML = slider.value;
output.style = `left: ${((slider.value - 1) * 94) / 8 + 1.5}%;`;

slider.oninput = function () {
  output.innerHTML = this.value;
  output.style = `left: ${((this.value - 1) * 94) / 8 + 1.5}%;`;
  for (let card of cards) {
    if (!card.querySelector(`span`).classList.contains("hidden")) {
      loadRecipies(card);
    }
  }
};
///////////////////////////////////

let cards = [];
cards = document.getElementsByClassName("card");

for (let card of cards) {
  card.onclick = function () {
    for (let card of cards) {
      if (!card.querySelector(`span`).classList.contains("hidden")) {
        card.querySelector(`span`).classList.add("hidden");
        card.classList.remove("selected");
      }
    }
    card.querySelector(`span`).classList.remove("hidden");
    card.classList.add("selected");
    loadRecipies(card);
  };
}

function loadRecipies(card) {
  let recipieNumber = card.id;
  recipieNumber = recipieNumber.slice(
    recipieNumber.length - 1,
    recipieNumber.length
  );

  document.getElementById("results").innerHTML = ``;

  let ingridientsList = recipies[recipieNumber - 1];
  let multiplier = slider.value;

  ingridientsList.forEach((ingridient) => {
    const results1 = document.createElement("p");
    const results2 = document.createElement("strong");
    results1.textContent = `${ingridient.pav} : `;
    results2.textContent = `${ingridient.amount * multiplier} ${
      ingridient.unit
    }`;
    console.log(results1);
    // document.getElementById("results").innerText += results1.textContent;
    // document.getElementById("results").innerText += results2.textContent;
    // document.getElementById("results").innerHTML += document.createElement('br');
    results1.appendChild(results2);
    document.getElementById("results").appendChild(results1);
  });
  //   console.log(results)
}
