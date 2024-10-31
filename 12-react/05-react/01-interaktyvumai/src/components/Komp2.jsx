import { useState } from "react";

const Komp2 = () => {
  const [vardas, setVardas] = useState("");
  const [pirmasZodis, setPirmasZodis] = useState("-");
  const [antrasZodis, setAntrasZodis] = useState("-");
  const inputHandler = (event) => {
    setVardas(event.target.value);
  };
  const pirmasHandler = (event) => {
    setPirmasZodis(event.target.value);
  };
  const antrasHandler = (event) => {
    setAntrasZodis(event.target.value);
  };
  return (
    <div>
      <h2>Komp2</h2>
      <label htmlFor="nameInput">Vardas:</label>
      <input onChange={inputHandler} type="text" id="nameInput" />
      <p>Jus ivedete: {vardas}</p>
      <p>Simboliu kiekis: {vardas.length}</p>
      <div>
        <label htmlFor="">Pirmas zodis :</label>
        <input type="text" onChange={pirmasHandler} />
      </div>
      <div>
        <label htmlFor="">Antras zodis :</label>
        <input type="text" onChange={antrasHandler} />
      </div>
      <p>
        <strong>Ivesti zodziai: </strong>
        {pirmasZodis} ir {antrasZodis}
      </p>
    </div>
  );
};

export default Komp2;
