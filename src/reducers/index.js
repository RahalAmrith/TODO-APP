import { combineReducers } from "redux";
import todos from "./todos";


const reducers = combineReducers({
  todos: todos,
});


export default reducers;