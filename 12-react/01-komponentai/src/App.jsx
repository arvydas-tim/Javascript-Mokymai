import "./App.css";
import Komp1 from "./components/komp1";
import Komp2 from "./components/Komp2";
import Komp3 from "./components/Komp3";
import Naujienos from "./components/Naujienos";

function App() {
  return (
    <>
      <div className="App">
        <h1>Naujas puslapis</h1>
        <Komp1 />
        <Komp2 />
        <Komp3 />
        <Naujienos></Naujienos>
      </div>
    </>
  );
}

export default App;
