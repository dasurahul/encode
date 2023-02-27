import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const keyName = "ENCODE-" + key;
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(keyName);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(storedValue));
  }, [keyName, storedValue]);

  return [storedValue, setStoredValue];
}
