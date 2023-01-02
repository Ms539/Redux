import React, {useState} from "react";
import "./Task.css";
import {useDispatch} from "react-redux";
import {deleteTask, doneTask, editTask} from "../../JS/Actions/Task";

const Task = ({description, id, isDone}) => {
  const dispatch = useDispatch();
  // Hook to verif if edit button has been clicked or no
  const [open_edit, setopen_verif_edit] = useState(false);
  // Hook to store the input value
  const [edit_desc, setedit_desc] = useState("");

  return (
    <div className="Task">
      {!open_edit ? (
        <textarea
          className={isDone ? "done desc" : "undone desc"}
          rows="10"
          cols="33"
          value={description}
          readOnly={true}
        ></textarea>

      ) : (
        //  user choose edit task
        <input
          className="desc"
          defaultValue={description}
          type="text"
          onChange={(e) => {
            setedit_desc(e.target.value);
          }}
          autoFocus
        />
      )}
      <button
        onClick={() => {
          if (!open_edit) {
            setopen_verif_edit(!open_edit);

            setedit_desc(description);
          } else {
            if (!edit_desc) {
              alert("Warning !! Empty modification");
              setopen_verif_edit(!open_edit);
            } else {
              dispatch(editTask({id, description: edit_desc}));
              setedit_desc("");
              setopen_verif_edit(!open_edit);
            }
          }
        }}
      >
        Edit Task
      </button>
      <button onClick={() => dispatch(deleteTask(id))}>Delete Task</button>
      <button onClick={() => dispatch(doneTask(id))}>
        {isDone ? "UnDone task" : "Done Task"}
      </button>
    </div>
  );
};

export default Task;
