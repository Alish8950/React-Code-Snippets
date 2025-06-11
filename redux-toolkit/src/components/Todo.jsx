import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_COMPLETE,
} from "../redux/slices/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  function generateRandom10DigitNumber() {
    const min = 1000000000; // Smallest 10-digit number
    const max = 9999999999; // Largest 10-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!input) {
      return;
    }
    dispatch(
      ADD_TODO({
        id: generateRandom10DigitNumber(),
        text: input,
        completed: false,
      })
    );
    setInput("");
  };

  const handleEditTodo = (id) => {
    let singleTodo = todos.find((item) => item.id === id);
    setInput(singleTodo.text);
    setUpdateId(singleTodo.id);
    setIsEdit(true);
  };

  const handleUpdateTodo = () => {
    dispatch(
      EDIT_TODO({
        id: updateId,
        text: input,
      })
    );
    setIsEdit(false);
    setUpdateId(null);
    setInput("");
  };

  const handleToggle = (id) => {
    dispatch(TOGGLE_COMPLETE(id));
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <>
      <div>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={isEdit ? handleUpdateTodo : handleAddTodo}>
            {isEdit ? "Update" : "Add"} Todo
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {todos.map((item) => {
            return (
              <div
                style={{ background: "green", padding: "10px" }}
                key={item.id}
              >
                <p>Task: {item.text}</p>
                <p>Completed: {item.completed ? "Yes" : "No"}</p>
                <button
                  style={{ padding: 10 }}
                  onClick={() => handleEditTodo(item.id)}
                >
                  Edit
                </button>
                <button
                  style={{ padding: 10 }}
                  onClick={() => handleToggle(item.id)}
                >
                  {item.completed ? "Not Complete" : "Complete"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
