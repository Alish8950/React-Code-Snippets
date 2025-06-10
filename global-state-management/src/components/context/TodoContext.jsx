import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/todoRecuder";

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
export default TodoContextProvider;
