import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the structure of the global state
const GlobalContext = createContext(null);

// Define a custom hook for consuming the context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

// GlobalProvider component
const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null, // Store user info or authentication status
    theme: "light", // Example: application theme
    isLoggedIn: false, // Example: login status
  });

  const updateState = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <GlobalContext.Provider value={{ state, updateState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
