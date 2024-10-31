import React from "react";
import Zodis from "./Zodis";

const Zodziai = () => {
  let pirmas = "Kriause";
  let antras = "Obelis";
  let trecias = "Medis";
  let ketvirtas = "Kalnas";

  // turi iškviesti komponentą Zodis kelis kartus,
  // kiekvieną kartą jam perduodant vis skirtingą
  // kintamąjį (pirmas, antras, ...)
  return (
    <div>
      <h2>Zodziai</h2>
      <Zodis text={pirmas} />
      <Zodis text={antras} />
      <Zodis text={trecias} />
      <Zodis text={ketvirtas} />
    </div>
  );
};

export default Zodziai;
