import Komp4child from "./Komp4child";

const Komp4parent = () => {
let skaiciai = [8,6,4,3,8,4,3,2,4,5]
  return (
    <div>
      <h2>Skaiciai</h2>
      <Komp4child skaiciai={skaiciai}/>
    </div>
  );
};

export default Komp4parent;
