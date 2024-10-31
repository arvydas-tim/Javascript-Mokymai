import Naujiena1 from "./Naujiena1";
import Naujiena3 from "./Naujiena2";
import Naujiena2 from "./Naujiena3";
import "./Naujienos.css";

const Naujienos = () => {
  return (
    <div className="naujienos-wrapper">
      <h1>Naujienos</h1>
      <div className="naujienu-list">
    <Naujiena1></Naujiena1>
    <Naujiena2/>
    <Naujiena3/>
      </div>
    </div>
  );
};

export default Naujienos;
