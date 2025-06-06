import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <Child count={count} />
    </>
  );
};

export default Parent;
