import React, { useState } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { addTodoitem, toggleTodoItem, deleteAllItems } from "./actions/todos";

function App() {
  // list state
  const [filter, setFilter] = useState("all");

  // get redux state
  const todos = useSelector((state) => state.todos);
  // get redux actions
  const dispatch = useDispatch();

  // todo items List
  const getTodoItems = () => {
    switch (filter) {
      case "all":
        // return all todo items
        return todos.map((data, i) => {
          return (
            <li onClick={() => dispatch(toggleTodoItem(data.id))}>
              <span className={data.completed ? "comp" : ""}>{data.title}</span>
              {/* display green tick if todo item completed */}
              {data.completed ? (
                <i style={{ color: "#2ecc71" }} className="fas fa-check"></i>
              ) : null}
            </li>
          );
        });
      case "todo":
        // return todo items whcih completed sate is false
        return todos.map((data, i) => {
          if (!data.completed) {
            return (
              <li onClick={() => dispatch(toggleTodoItem(data.id))}>
                <span className={data.completed ? "comp" : ""}>
                  {data.title}
                </span>
                {/* display green tick if todo item completed */}
                {data.completed ? (
                  <i style={{ color: "#2ecc71" }} className="fas fa-check"></i>
                ) : null}
              </li>
            );
          } else {
            return false;
          }
        });
      case "completed":
        // return todo items whcih completed sate is false
        return todos.map((data, i) => {
          if (data.completed) {
            return (
              <li onClick={() => dispatch(toggleTodoItem(data.id))}>
                <span className={data.completed ? "comp" : ""}>
                  {data.title}
                </span>

                {/* display green tick if todo item completed */}
                {data.completed ? (
                  <i style={{ color: "#2ecc71" }} className="fas fa-check"></i>
                ) : null}
              </li>
            );
          } else {
            return false;
          }
        });

      default:
        return todos.map((data, i) => {
          return (
            <li onClick={() => dispatch(toggleTodoItem(data.id))}>
              <span className={data.completed ? "comp" : ""}>{data.title}</span>
              {data.completed ? (
                <i style={{ color: "#2ecc71" }} className="fas fa-check"></i>
              ) : null}
            </li>
          );
        });
    }
  };

  return (
    <div className="App">
      <div className="todos">
        {/* ================================ */}
        {/* ========== Todo Title ========== */}
        {/* ================================ */}
        <h1>Todos</h1>

        {/* ========================================= */}
        {/* ========== Todo Item container ========== */}
        {/* ========================================= */}
        <div className="todo_container">
          <ul>{getTodoItems("all")}</ul>
        </div>

        {/* ===================================== */}
        {/* ========== Todo Input Form ========== */}
        {/* ===================================== */}
        <div className="todo_input">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(addTodoitem(e.target.title.value));
              e.target.reset();
            }}
          >
            <input required name="title" type="text" />
            <button type="submit">
              <i className="fas fa-plus"></i>
            </button>
          </form>
        </div>

        {/* ================================= */}
        {/* ========== Todo Footer ========== */}
        {/* ================================= */}
        <div className="todo_footer">
          <button
            style={filter === "todo" ? { backgroundColor: "#2ecc7122" } : {}}
            onClick={() =>
              filter === "todo" ? setFilter("all") : setFilter("todo")
            }
          >
            <i style={{ color: "#3498db" }} className="fas fa-list"></i>
          </button>
          <button onClick={() => dispatch(deleteAllItems())}>
            <i style={{ color: "#e74c3c" }} className="fas fa-times"></i>
          </button>
          <button
            style={
              filter === "completed" ? { backgroundColor: "#2ecc7122" } : {}
            }
            onClick={() =>
              filter === "completed" ? setFilter("all") : setFilter("completed")
            }
          >
            <i style={{ color: "#2ecc71" }} className="fas fa-check"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
