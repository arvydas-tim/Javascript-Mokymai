import React from "react";

// priima props (knygos objektą)
const Knyga = ({ book }) => {
  // išspausdina visą turimą apie knygą informaciją,
  // taip pat išveda "knyga brangi" jei jos kaina
  // yra didesnė nei 30 eurų, "knyga kainuoja vidutiniškai",
  // jei jos kaina yra tarp 10 ir 30 eurų, bei
  // "knyga pigi", jei jos kaina iki 10 eurų
  // arBrang = ({book}) => {
  //   if (book.kaina < 10) {
  //     return "Pigi knyga";
  //   } else if (book.kaina < 30) {
  //     return "Knyga kainuoja vidutiniskai";
  //   } else {
  //     return "Brangi knyga";
  //   }
  // };
  return (
    <div>
      <h3>{book.pavadinimas}</h3>
      <p>{book.autorius}</p>
      <p>{book.kaina}Eur</p>
      <p>{book.kaina <=10? "knyga pigi":""}
      {book.kaina >10&&book.kaina <30? "knyga kainuoja vidutiniskai":""}
      {book.kaina >=30? "knyga brangi":""}</p>
    </div>
  );
};

export default Knyga;
