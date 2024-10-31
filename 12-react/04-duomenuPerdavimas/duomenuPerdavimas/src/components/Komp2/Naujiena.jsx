const Naujiena = (props) => {
  const lygNelyg = () => {
    return props.skaicius % 2 === 0 ? "Lyginis" : "Nelyginis";
  };
  const teigNeig = (props) => {};
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.tekstas}</p>
      <p>Gautas sk:{props.skaicius}</p>
      <p>
        {props.skaicius >= 0 ? "Teigiamas " : "Neigiamas "}
        {lygNelyg()}
      </p>
    </div>
  );
};

export default Naujiena;
