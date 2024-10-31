import Naujiena from "./Naujiena"

const Naujienos = () => {
    let num1 =25
    let num2 =78
    let num3 =-12
    let num4 =68
  return (
    <div>
      <h2>Naujienos</h2>
      <Naujiena title="Naujiena 1" skaicius={num1} tekstas="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis?"/>
      <Naujiena title="Naujiena 2" skaicius={num2} tekstas="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis?"/>
      <Naujiena title="Naujiena 3" skaicius={num3} tekstas="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis?"/>
      <Naujiena title="Naujiena 4" skaicius={num4} tekstas="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis?"/>
    </div>
  )
}

export default Naujienos
