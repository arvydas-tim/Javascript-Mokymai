import React from "react";

// šis komponentas turi priimti props
const Zodis = (props) => {
  // turi išvesti gautą žodį,
  // taip pat, turi apskaičiuoti ir parodyti jo
  // ilgį (simbolių kiekį)
  return (
    <div>
      <p>Zodis: {props.text}</p>
      <p>Zodzio ilgis: {(props.text).length}</p>
    </div>
  );
};

export default Zodis;
