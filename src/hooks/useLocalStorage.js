import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const keyName = "ENCODE-" + key;
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(keyName);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(keyName, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
