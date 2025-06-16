import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../customHooks/useLocalStorage";

const UserContext = createContext();


const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useLocalStorage("user", "");
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
export default UserContextProvider;
