import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserRegistrationForm from "./components/UserRegistrationForm";
import ReactHookForm from "./components/ReactHookForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UserRegistrationForm /> */}
      <ReactHookForm />
    </>
  );
}

export default App;
