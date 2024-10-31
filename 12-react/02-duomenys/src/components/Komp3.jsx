import React from "react";

const Komp3 = () => {
  let pazymiai = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <p>{pazymiai}</p>
      <p>{pazymiai.join(',')}</p>
    </div>
  );
};

export default Komp3;
