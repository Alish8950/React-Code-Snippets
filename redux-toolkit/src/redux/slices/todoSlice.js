import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    ADD_TODO: (state, action) => {
      state.todos.push(action.payload);
    },
    EDIT_TODO: (state, action) => {
      const todo = state.todos.find((item) => item.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
      //   const updatedTodos = state.todos.map((item) => {
      //     if (item.id === action.payload.id) {
      //       return { ...item, text: action.payload.text };
      //     } else return item;
      //   });
      //   console.log(updatedTodos);
      //   state.todos = updatedTodos;
    },
    TOGGLE_COMPLETE: (state, action) => {
      const todo = state.todos.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { ADD_TODO, EDIT_TODO, TOGGLE_COMPLETE } = todoSlice.actions;

export default todoSlice.reducer;
