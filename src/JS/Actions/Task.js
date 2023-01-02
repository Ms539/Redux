// Import Constants

import {ADD, DELETE, DONE, EDIT} from "../Types.js/Types";

// Action ADD

export const addTask = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

// Delete action

export const deleteTask = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};

// Done action

export const doneTask = (payload) => {
  return {
    type: DONE,
    payload,
  };
};

// Edit action

export const editTask = (payload) => {
  return {
    type: EDIT,
    payload,
  };
};
