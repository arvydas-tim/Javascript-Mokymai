let calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function () {
  //   console.log("clickity");
  let employeeCount = document.getElementById("employee-count").valueAsNumber;
  let loavesPerEmp = document.getElementById(
    "loaves-per-employee"
  ).valueAsNumber;
  let orderCount = document.getElementById("order-count").valueAsNumber;

  let loavesTotal = employeeCount * loavesPerEmp;
  let arPavyks = loavesTotal >= orderCount;
  //   let logInfo = {
  //     employeeCount,
  //     loavesPerEmp,
  //     orderCount,
  //     loavesTotal,
  //     arPavyks,
  //   };
  //   console.log(logInfo);

  let result = document.getElementById("results");
  result.innerHTML = `<p><strong>Kepykla per dieną galės pagaminti:</strong>${loavesTotal} kepalų</p>`;
  result.innerHTML += `<p><strong>Reikia pagaminti:</strong>${orderCount} kepalų</p>`;
  result.innerHTML += `<p><strong>Ar spės pagaminti?:</strong>${
    arPavyks ? "Taip" : "Ne"
  }</p>`;
});

document
  .getElementById(`employee-count`)
  .addEventListener("keyup", function (event) {
    let inputValue = event.target.valueAsNumber;
    if (inputValue < 0) {
      event.target.classList.add("error");
      event.target.nextElementSibling.classList.add("show");
    } else {
      event.target.classList.remove("error");
      event.target.nextElementSibling.classList.remove("show");
    }
  });

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("employee-count").valueAsNumber = 0;
  document.getElementById("loaves-per-employee").valueAsNumber = 0;
  document.getElementById("order-count").valueAsNumber = 0;
  document.getElementById("results").innerHTML = "<p>Kol kas nieko</p>";
});
