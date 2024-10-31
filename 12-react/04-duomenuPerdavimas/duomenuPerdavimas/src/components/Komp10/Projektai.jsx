import React from "react";
import Projektas from "./Projektas";
import "./projektai.css";
// susikurkite ir prijunkite stiliaus failą, bent minimaliai pastiliuokite šių komponentų kodą

const Projektai = () => {
  let projektai = [
    {
      id: 1,
      pavadinimas: "Batsiuvio web",
      tipas: "tinklalapis",
      atlikimo_data: "2022-01-10",
    },
    {
      id: 2,
      pavadinimas: "Maisto šefo receptų web",
      tipas: "tinklalapis",
      atlikimo_data: "2022-05-28",
    },
    {
      id: 3,
      pavadinimas: "Logotipas tapkių gamintojams",
      tipas: "logotipas",
      atlikimo_data: "2022-04-25",
    },
  ];

  return (
    <div className="projektai">
      <h2>Projektai</h2>
      <div className="projektu-list">
        {projektai.map((projektas) => {
          return <Projektas key={projektas.id} data={projektas} />;
        })}
      </div>
    </div>
  );
};

export default Projektai;
