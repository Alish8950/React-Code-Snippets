import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  increament,
  increamentByAmount,
} from "./redux/slice/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increament())}>increase</button>
      <button onClick={() => dispatch(decreament())}>decreament</button>
      <button onClick={() => dispatch(increamentByAmount(2))}>inc by 2</button>
    </>
  );
}

export default App;
