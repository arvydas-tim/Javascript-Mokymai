let payments = [
  { id: 1, type: "income", amount: 900, when: "2024-10-01 10:30:24" },
  { id: 2, type: "expense", amount: -15, when: "2024-10-02 10:32:24" },
  { id: 3, type: "income", amount: 200, when: "2024-10-04 14:15:00" },
  { id: 4, type: "expense", amount: -155, when: "2024-10-04 14:22:10" },
  { id: 5, type: "income", amount: 50, when: "2024-10-04 14:44:58" },
  { id: 6, type: "expense", amount: -440, when: "2024-10-04 15:10:10" },
  { id: 7, type: "expense", amount: -200, when: "2024-10-07 10:28:12" },
  { id: 8, type: "income", amount: 100, when: "2024-10-010 10:41:50" },
];

function load_data(
  data_wrapper_selector,
  data_array,
  balance_wrapper_selector
) {
  let data_wrapper = document.querySelector(data_wrapper_selector);
  let balance_wrapper = document.querySelector(balance_wrapper_selector);

  for (const item of data_array) {
    data_wrapper.innerHTML += `
<div class="item-wrapper">
    <p class="id">ID: ${item.id}</p>
    <p class="type ${item.type}">${
      item.type == "income" ? "Pajamos" : "Išlaidos"
    }</p>
    <p class="amount ${item.type}">${item.amount}€</p>
    <p class="when">${item.when}</p>
</div>
    `;
  }

  balance_wrapper.innerHTML = `
  <h3>Galutinis likutis:
    <span class="${
      calculateBalance(data_array) > 0 ? "income" : "expense"
    }">${calculateBalance(data_array)}€</span>
</h3>
<p>Pajamos: <span class="income">${calculateIncome(data_array)} €</span></p>
<p>Išlaidos: <span class="expense">${calculateExpense(data_array)} €</span></p>
  `;
}
load_data(".payments-wrapper", payments, ".balance-wrapper");

function calculateBalance(payments_data) {
  let sum = 0;
  for (const item of payments_data) {
    sum += item.amount;
  }
  return sum;
}

function calculateIncome(payments_data) {
  let sum = 0;
  for (const item of payments_data) {
    if (item.type == "income") {
      sum += item.amount;
    }
  }
  return sum;
}

// function calculateExpense(payments_data) {
//   let sum = 0;
//   for (const item of payments_data) {
//     if (item.type == "expense") {
//       sum += item.amount;
//     }
//   }
//   return sum;
// }

function calculateExpense(payments_data) {
  return payments_data
    .filter((item) => item.type == "expense")
    .reduce((sum, item) => sum + item.amount, 0);
}

function newBalanceRow(id, type, amount, when) {
  return { id: id, type: type, amount: amount, when: when };
}

// document.getElementById("addData").addEventListener("submit", function (event) {event.preventDefault()

document.getElementById("addData").addEventListener("click", function () {
  let id = payments.length + 1;
  let amount = parseFloat(document.getElementById("newAmount").value);
  let type = amount >= 0 ? `income` : "expense";
  let when = new Date().toLocaleString().slice(0, 25);
  let row = newBalanceRow(id, type, amount, when);
  payments.push(row);
  const dataWrapper = document.querySelector(".payments-wrapper");
  const balanceWrapper = document.querySelector(".balance-wrapper");
  dataWrapper.innerHTML = ``;
  balanceWrapper.innerHTML = ``;

  load_data(".payments-wrapper", payments, ".balance-wrapper");
  document.getElementById("newAmount").value = ``;
});
