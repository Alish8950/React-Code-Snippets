import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/counterSlice";
import TodoSlice from "./slices/todoSlice";

const store = configureStore({
  reducer: {
    counter: CounterSlice,
    todo: TodoSlice,
  },
});

export default store;
