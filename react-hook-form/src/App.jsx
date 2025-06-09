import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserRegistrationForm from "./components/UserRegistrationForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserRegistrationForm />
    </>
  );
}

export default App;
