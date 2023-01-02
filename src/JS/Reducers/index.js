import {combineReducers} from "redux";
import TaskReducer from "./TaskReducer";
//is the constant that I create to  combine my reducers.
const rootReducer = combineReducers({TaskReducer});

export default rootReducer;
