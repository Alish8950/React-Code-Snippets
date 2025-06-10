import { createContext, useContext, useState } from "react";

export const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () =>  useContext(CounterContext);

export default CounterContextProvider;
