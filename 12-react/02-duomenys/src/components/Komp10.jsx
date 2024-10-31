const Komp10 = () => {
  let skaicius = 57;
  let num1 = 15;
  let num2 = 54;

  const kurisDidesnis = () => {
    return Math.max(num1, num2);
  };
  return (
    <>
      <h1>SKaiciai ir skaiciavimai</h1>
      <p>{skaicius}</p>
      <p>{4 + 5}</p>
      <p>{skaicius + 10}</p>
      <p>{skaicius % 2 === 0 ? "lyginis" : "nelyginis"}</p>
      <p>
        Mano skaiciai : {num2} {num1}
      </p>
      <p>Didesnis: {kurisDidesnis()}</p>
    </>
  );
};

export default Komp10;
