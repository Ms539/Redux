// Initialisation

import {ADD, DELETE, DONE, EDIT} from "../Types.js/Types";
const Initialisation = {
  TaskList: [],
};

// PURE FUNCTION
//These three dots are called the spread syntax or spread operator. The spread syntax is a feature of ES6, and it's also used in React.
const TaskReducer = (state = Initialisation, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        TaskList: [...state.TaskList, action.payload],
      };

    case DELETE:
      return {
        ...state,
        TaskList: state.TaskList.filter((el) => el.id !== action.payload),
      };

    case DONE:
      return {
        ...state,
        TaskList: state.TaskList.map((el) =>
          el.id === action.payload ? {...el, isDone: !el.isDone} : el
        ),
      };

    case EDIT:
      return {
        ...state,
        TaskList: state.TaskList.map((el) =>
          el.id === action.payload.id
            ? {...el, description: action.payload.description}
            : el
        ),
      };
    default:
      return state;
  }
};

export default TaskReducer;
