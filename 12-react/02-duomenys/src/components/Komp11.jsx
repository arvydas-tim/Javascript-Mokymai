const Komp11 = () => {
  let students = [
    { id: 1, name: "Jonas Jonaitis", grade: 8 },
    { id: 2, name: "Jonas Petraitis", grade: 6 },
    { id: 3, name: "Petras Petraitis", grade: 5 },
    { id: 4, name: "Petras Jonaitis", grade: 10 },
  ];
  const vidurkis = () => {
    return (
      students.reduce((suma, student) => suma + student.grade, 0) /
      students.length
    );
  };
  return (
    <>
      <h1>Studentai</h1>
      <p>Bendras studentu vidurkis : {vidurkis()}</p>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Vardas ir pavarde</th>
            <th>Vidurkis</th>
            <th>Virs vidurkio?</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.grade}</td>
                <td>{student.grade >= vidurkis() ? "Taip" : "Ne"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Komp11;
