import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        count: state.count + 1,
      };
    }

    case "DECREMENT": {
      return {
        count: state.count - 1,
      };
    }

    default: {
      return state.count;
    }
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        dec
      </button>
      <div>{state.count}</div>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        inc
      </button>
    </>
  );
};

export default Counter;
