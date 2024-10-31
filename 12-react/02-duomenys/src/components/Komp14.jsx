const Komp14 = () => {
  let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const biggest = () => {
    return Math.max(...myArray);
  };
  const smallest = () => {
    return Math.min(...myArray);
  };
  const avarage = () => {
    let avg = myArray.reduce((sum, cv) => sum + cv, 0) / myArray.length;
    return avg.toFixed(2);
  };
  const isEven = (arr) => {
    let newArr = [];
    arr.map((int) => {
      int % 2 === 0 ? newArr.push(int) : "";
    });
    return newArr
  };

  return (
    <>
      <p>{biggest()}</p>
      <p>{smallest()}</p>
      <p>{avarage()}</p>
      <p>{isEven(myArray).join(', ')}</p>
    </>
  );
};

export default Komp14;
