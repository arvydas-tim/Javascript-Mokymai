import Komp3child from "./Komp3child";

const Komp3parent = () => {
  let student1 = { name: "Jonas Jonaitis", grade: 8, school: "VCS" };
  let student2 = { name: "Jonas Jonauskas", grade: 9, school: "KTU" };
  let student3 = { name: "Jonas Jonanas", grade: 7, school: "VU" };

  return (
    <div>
      <h2>Studentai</h2>
      <Komp3child student={student1}/>
      <Komp3child student={student2}/>
      <Komp3child student={student3}/>
    </div>
  );
};

export default Komp3parent;
