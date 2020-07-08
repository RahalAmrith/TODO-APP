import { addTodo, toggleTodo, deleteAll } from "../actions/types";

const todos = (state = [], action) => {
  switch (action.type) {
    case addTodo:
      return [
        ...state,
        {
          id: state.length,
          title: action.title,
          completed: false,
        },
      ];
    case toggleTodo:
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case deleteAll:
      return [];
    default:
      return state;
  }
};

export default todos;
