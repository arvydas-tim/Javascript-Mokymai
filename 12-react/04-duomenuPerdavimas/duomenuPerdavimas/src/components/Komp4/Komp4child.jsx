const Komp4child = (props) => {
  let data = props.skaiciai;
  return (
    <div>
      <p>{data.join(', ')}</p>
    </div>
  );
};

export default Komp4child;
