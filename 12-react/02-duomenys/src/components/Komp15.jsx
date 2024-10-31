const Komp15 = () => {
  let myArray1 = [];
  let myArray2 = [];
  for (let i = 0; i <= 10; i++) {
    myArray1.push(Math.floor((Math.random() - 0.5) * 200 + 1));
    myArray2.push(Math.floor((Math.random() - 0.5) * 200 + 1));
  }
  const tableFill = () => {
    for (const key in myArray1) {
      return (
        <tr>
          <td>{myArray1[key]}</td>
          <td>{myArray1[key] > myArray2[key] ? ">" : "<"}</td>
          <td>{myArray2[key]}</td>
        </tr>
      );
    }
  };
  return (
    <>
      <h1>{myArray1.join(", ")}</h1>
      <h1>{myArray2.join(", ")}</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Skaicius a</th>
            <th>Lyginimas</th>
            <th>Skaicius b</th>
          </tr>
        </thead>
        <tbody>{tableFill()}</tbody>
      </table>
    </>
  );
};

export default Komp15;
