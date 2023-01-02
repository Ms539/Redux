import React, {useState} from "react";
import "./AddTask.css";
import {useDispatch} from "react-redux";
import {addTask} from "../../JS/Actions/Task";
//add task
const AddTask = () => {
  const dispatch = useDispatch();
  const [Taskvalue, setTaskvalue] = useState("");
  return (
    <div className="ADD">
      <h3>Add Task</h3>
      <input onChange={(e) => setTaskvalue(e.target.value)} value={Taskvalue} />
      <button
        onClick={() => {
          if (Taskvalue) {
            dispatch(
              addTask({
                id: Math.random(),
                description: Taskvalue,
                isDone: false,
              })
            );
            setTaskvalue("");
          } else {
            //Alert when there is empty task
            alert("  Please Write Task ");
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;









