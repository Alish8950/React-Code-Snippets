import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreament, increament, increamentByAmount } from "../redux/slices/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increament())}>increase</button>
      <button onClick={() => dispatch(decreament())}>decreament</button>
      <button onClick={() => dispatch(increamentByAmount(2))}>inc by 2</button>
    </>
  );
};

export default Counter;
