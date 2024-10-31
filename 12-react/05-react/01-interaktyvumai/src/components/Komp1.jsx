import { useState } from "react";

const Komp1 = () => {
  const buttonHandler = (event) => {
    alert("Paspaustas: " + event.target.textContent);
  };
  let [counter, setCounter] = useState(0);
  const counterHandler = () => {
    setCounter(counter + 1);
  };
  const newCounterHandler = (changeValue) => {
    if (changeValue === 0) {
      setCounter(0);
    } else {
      setCounter(counter + changeValue);
    }
  };
  return (
    <div>
      <h2>Komp1</h2>
      <button onClick={buttonHandler}>Pirmas</button>
      <button onClick={buttonHandler}>Antras</button>
      <button onClick={buttonHandler}>Trecias</button>
      <button onClick={buttonHandler}>Ketvirtas</button>
      <button onClick={buttonHandler}>Penktas</button>
      <div>
        <h2>Couinter</h2>
        <button onClick={counterHandler}>Spausti</button>
        <p>Buvo paspausta: {counter}</p>
      </div>
      <div>
        <h2>Turbo Counter</h2>
        <button onClick={() => newCounterHandler(1)}>+1</button>
        <button onClick={() => newCounterHandler(-1)}>-1</button>
        <button onClick={() => newCounterHandler(5)}>+5</button>
        <button onClick={() => newCounterHandler(-5)}>-5</button>
        <button onClick={() => newCounterHandler(0)}>= 0</button>
        <p>Counter reiksme: {counter}</p>
      </div>
    </div>
  );
};

export default Komp1;
