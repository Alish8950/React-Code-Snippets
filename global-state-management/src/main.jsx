import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CounterContextProvider from "./components/context/CounterContext.jsx";
import TodoContextProvider from "./components/context/TodoContext.jsx";

createRoot(document.getElementById("root")).render(
  <TodoContextProvider>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </TodoContextProvider>
);
