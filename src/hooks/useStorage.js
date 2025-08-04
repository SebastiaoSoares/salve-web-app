import { useState, useEffect } from "react";

function useStorage(key, initialValue) {
  const isBrowser = typeof window !== "undefined";

  const getInitialValue = () => {
    if (!isBrowser) return typeof initialValue === "function" ? initialValue() : initialValue;
    try {
      const item = localStorage.getItem(key);
      if (item !== null) return JSON.parse(item);
      return typeof initialValue === "function" ? initialValue() : initialValue;
    } catch {
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getInitialValue);

  useEffect(() => {
    if (!isBrowser) return;

    function handleStorageChange(event) {
      if (event.key === key) {
        try {
          const newValue = event.newValue ? JSON.parse(event.newValue) : null;
          setStoredValue(newValue !== null ? newValue : typeof initialValue === "function" ? initialValue() : initialValue);
        } catch {
          // ignore JSON parse error
        }
      }
    }

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, initialValue, isBrowser]);

  const setValue = (value) => {
    try {
      const valueToStore = typeof value === "function" ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (isBrowser) {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  };

  const remove = () => {
    try {
      if (isBrowser) {
        localStorage.removeItem(key);
      }
      setStoredValue(typeof initialValue === "function" ? initialValue() : initialValue);
    } catch (error) {
      console.error("Erro ao remover do localStorage:", error);
    }
  };

  return [storedValue, setValue, remove];
}

export default useStorage;
