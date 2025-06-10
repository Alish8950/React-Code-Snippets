import React, { useContext } from "react";
import { useCounterContext } from "./context/CounterContext";

const ContextCounter = () => {
  const { increment, decrement, count } = useCounterContext();
  return (
    <>
      <button onClick={decrement}>dec</button>
      <div>{count}</div>
      <button onClick={increment}>inc</button>
    </>
  );
};

export default ContextCounter;
