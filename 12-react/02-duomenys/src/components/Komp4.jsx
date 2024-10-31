import React from "react";

const Komp4 = () => {
  let school = `VU`;
  let avarage = 8.7;
  let course = 3;
  return (
    <div className="student-details">
      <h2>Studento vardas ir pavardė</h2>
      <p>
        <strong>Mokosi:</strong>
        {school}
      </p>
      <p>
        <strong>Vidurkis:</strong>
        {avarage}
      </p>
      <p>
        <strong>Kursas:</strong>
        {course}
      </p>
    </div>
  );
};

export default Komp4;
