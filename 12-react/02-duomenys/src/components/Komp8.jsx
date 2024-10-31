import React from "react";
import "./Komp8.css"
const Komp8 = () => {
  let preke = {
    kodas: "BAK364",
    pavadinimas: "Tusinukas",
    kaina: 2.34,
    savikaina: 1.5,
    nuotrauka: "https://via.placeholder.com/200/",
  };

  // šiame komponente jau turite prekės objektą
  // jį atvaizduokite return dalyje,
  // susikurkite visas reikiamas žymas, kad tą informaciją
  // būtų galima susidėti kažkaip tvarkingai ir aiškiai

  // taip pat, atlikite kažkiek stiliavimo, tam reikės
  // susikurti css failą ir jį prijungti prie šio komponento
  // ir atlikti stiliavims (pvz, blokelio spalva, tarpai, ...)

  return <div className="card">
    <img src={preke.nuotrauka} alt="" />
    <h2>{preke.pavadinimas}</h2>
    <p>Kaina: {preke.kaina}</p>
    <p><sub>Prekes kodas: {preke.kodas}</sub></p>

  </div>;
};

export default Komp8;
