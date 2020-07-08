import { addTodo, toggleTodo, deleteAll } from "./types";

export const addTodoitem = (_title) => {
  return {
    type: addTodo,
    title: _title,
  };
};

export const toggleTodoItem = (_id) => {
  return {
    type: toggleTodo,
    id: _id,
  };
};

export const deleteAllItems = () => {
  return {
    type: deleteAll,
  };
};
