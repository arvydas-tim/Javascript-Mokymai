import React from "react";
import Knyga from "./Knyga";

const Knygynas = () => {
  let knygos = [
    { id: 1, pavadinimas: "Idomi knyga", autorius: "Benas Rastis", kaina: 35 },
    {
      id: 2,
      pavadinimas: "Siaip sau knyga",
      autorius: "Parkeris Penas",
      kaina: 5,
    },
    {
      id: 3,
      pavadinimas: "Paprasta knyga",
      autorius: "Manas Skriptas",
      kaina: 15,
    },
    { id: 4, pavadinimas: "Gera knyga", autorius: "Turner Page", kaina: 50 },
  ];
  // susikurkite tris atskirus knygų objektus
  // su informacija

  // kvieskite komponentą Knyga kelis kartus,
  // kiekvieną kartą perduodant skirtingus
  // knygų objektus
  return (
    <div>
      {knygos.map((knyg) => {
        return (
          <Knyga
            key={knyg.id}
            book={knyg}
          />
        );
      })}
    </div>
  );
};

export default Knygynas;
