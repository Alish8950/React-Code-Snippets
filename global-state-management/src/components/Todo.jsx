import React, { useEffect, useState } from "react";
import { useTodoContext } from "./context/TodoContext";
import { actionTypes } from "./reducer/todoRecuder";

const Todo = () => {
  const { state, dispatch } = useTodoContext();
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [updateId, setUpdateId] = useState("");

  const addTodo = () => {
    if (input === "") {
      return;
    }
    dispatch({ type: actionTypes.ADD_TODO, payload: input });
    setInput("");
  };
  const handleEdit = (id) => {
    setIsEdit(true);
    const filteredItem = state.todos.find((item) => item.id === id);
    console.log(filteredItem);
    setInput(filteredItem.text);
    setUpdateId(filteredItem.id);
  };

  const updateTodo = () => {
    dispatch({
      type: actionTypes.UPDATE_TODO,
      payload: { id: updateId, text: input },
    });

    setInput("");
    setIsEdit(false);
  };
  return (
    <>
      <div>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={isEdit ? updateTodo : addTodo}>
            {isEdit ? "Update" : "Add"} Todo
          </button>
        </div>
        <div className="hello">
          {state.todos.map((item) => {
            return (
              <div key={item.id}>
                <p>Note: {item.text}</p>
                <p>Completed: {item.completed ? "Yes" : "No"}</p>
                <p onClick={() => handleEdit(item.id)}>Edit</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
