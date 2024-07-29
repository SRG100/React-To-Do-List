import '../App.css'; 

const Task = function (props) {
  return (
    <div className="Lists">
      <div className="list">{props.item}</div>
    </div>
  );
}

export default Task;
