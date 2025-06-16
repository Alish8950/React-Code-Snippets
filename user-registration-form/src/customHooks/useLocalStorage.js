import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const getValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error fetching local storage");
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getValue);

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error while setting local storage");
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
