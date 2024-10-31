import React from "react";

// šis komponentas turi priimti props
const ZodisRe = ({ text }) => {
  // turi išvesti gautą žodį,
  // taip pat, turi apskaičiuoti ir parodyti jo
  // ilgį (simbolių kiekį)
  return (
    <div>
      <table>
        <tr>
          <th>Zodis</th>
          <th>Jo ilgis</th>
        </tr>
        {text.map((zodis) => {
          return (
            <tr>
              <td>{zodis}</td>
              <td>{zodis.length}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ZodisRe;
