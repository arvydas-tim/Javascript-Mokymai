const Komp13 = () => {
  let a = 5;
  let b = 8;
  let c = 9;
  // let myArray = [];
  // const arrayify = (...args) => {
  //   for (let i = 0; i < args.length; i++) {
  //     myArray = myArray.push(args);
  //   }
  //   return myArray;
  // };
  const biggest = () => {
    return Math.max(a, b, c);
  };
  const smallest = () => {
    return Math.min(a, b, c);
  };
  const avarage = () => {
    let avg = (a + b + c) / 3;
    return avg.toFixed(2);
  };
  return (
    <>
      <p>
        {a} {b} {c}
      </p>
      <p>{biggest()}</p>
      <p>{smallest()}</p>
      <p>{avarage()}</p>
      {/* <p>{avarage()}</p> */}
    </>
  );
};

export default Komp13;
