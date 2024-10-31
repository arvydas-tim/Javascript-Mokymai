import React from "react";

// padarykite kad šis komponentas priimtų props (vieno projekto objektą)
const Projektas = ({ data }) => {
  // išveskite visą turimą projekto informaciją
  return (
    <div className="projektas">
      <p>{data.pavadinimas}</p>
      <p>{data.tipas}</p>
      <p>{data.atlikimo_data}</p>
    </div>
  );
};

export default Projektas;
