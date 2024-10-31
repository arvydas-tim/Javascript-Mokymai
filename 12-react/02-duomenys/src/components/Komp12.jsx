const Komp12 = () => {
  let students = [
    { id: 1, name: "Jonas Jonaitis", grades: [5, 6, 8, 7, 9], age: 21 },
    { id: 2, name: "Jonas Petraitis", grades: [8, 7, 8, 7, 8], age: 27 },
    { id: 3, name: "Petras Petraitis", grades: [9, 2, 5, 8, 2], age: 24 },
    { id: 4, name: "Petras Jonaitis", grades: [10, 8, 9, 10], age: 18 },
  ];


  const vyresnis = (id1, id2) => {
    return students[id1 - 1].age > students[id2 - 1].age ? `${students[id1 - 1].name} is older than ${students[id2 - 1].name}  `  : `${students[id2 - 1].name} is older ${students[id1 - 1].name}`;
  };
  const vidurkioLyg = (id1, id2) => {
    let vid1 = students[id1 - 1].grades.reduce((sum, grade) => sum + grade, 0);
    let vid2 = students[id2 - 1].grades.reduce((sum, grade) => sum + grade, 0);
    return vid1 > vid2   ? `${students[id1 - 1].name} has better grades than ${       students[id2 - 1].name    }  `  : `${students[id2 - 1].name} has better grades than ${       students[id1 - 1].name       }`;
  };

  return (
    <>
      <h1>Studentai</h1>
      <p></p>
      <p>{vyresnis(1, 2)}</p>
      <p>{vidurkioLyg(1, 2)}</p>
    </>
  );
};

export default Komp12;
