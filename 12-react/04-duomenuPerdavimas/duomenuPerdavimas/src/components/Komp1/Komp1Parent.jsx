import Komp1Child from "./Komp1Child";

const Komp1Parent = () => {
  return (
    <div>
      Parent
      <Komp1Child tekstas="Pirma eile" />
      <Komp1Child tekstas="Antra eile" />
      <Komp1Child tekstas="Trecia eile" />
    </div>
  );
};

export default Komp1Parent;
