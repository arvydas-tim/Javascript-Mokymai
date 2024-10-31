import React from "react";
import ZodisRe from "./ZodisRe";

const ZodziaiRe = () => {
  let pirmas = ["Kriause", "Obelis", "Medis", "Kalnas"];
  let antras = ["pirmas", "antras", "trecias", "ketvirtas"];

  // turi iškviesti komponentą Zodis kelis kartus,
  // kiekvieną kartą jam perduodant vis skirtingą
  // kintamąjį (pirmas, antras, ...)
  return (
    <div>
      <h2>Zodziai</h2>

      <ZodisRe text={pirmas} />
      <ZodisRe text={antras} />
    </div>
  );
};

export default ZodziaiRe;
