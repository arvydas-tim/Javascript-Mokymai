import "./App.css";
import Komp1Parent from "./components/Komp1/Komp1Parent";
import Projektai from "./components/Komp10/Projektai";
import Navbar from "./components/Komp11/Navbar";
import Naujienos from "./components/Komp2/Naujienos";
import Komp3parent from "./components/Komp3/Komp3parent";
import Komp4parent from "./components/Komp4/Komp4parent";
import Komp5parent from "./components/Komp5/Komp5parent";
import Komp6Parent from "./components/Komp6/Komp6Parent";
import Zodziai from "./components/Komp7/Zodziai";
import Knygynas from "./components/Komp8/Knygynas";
import ZodziaiRe from "./components/Komp9/ZodziaiRe";

function App() {
  return (
    <>
          <Navbar/>
      {/* <h2>Komp1</h2>
      <Komp1Parent />
      <Naujienos />
      <Komp3parent />
      <Komp4parent />
      <Komp5parent /> */}
      <Komp6Parent />
      <Zodziai />
      <Knygynas/>
      <ZodziaiRe/>
      <Projektai/>

      
    </>
  );
}

export default App;
