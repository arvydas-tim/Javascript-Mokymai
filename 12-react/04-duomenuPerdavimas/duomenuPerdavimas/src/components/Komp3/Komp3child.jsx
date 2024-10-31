const Komp3child = (props) => {
  return (
    <div>
      {props.student && (
        <div>
          <h3>{props.student.name}</h3>
          <h3>{props.student.grade}</h3>
          <h3>{props.student.school}</h3>
        </div>
      )}
    </div>
  );
};

export default Komp3child;
