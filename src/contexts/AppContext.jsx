import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [colorTheme, setColorTheme] = useState(
    () => localStorage.getItem("theme") || "default"
  );

  useEffect(() => {
    if (colorTheme === "default") {
      document.body.dataset.theme = "default";
      localStorage.setItem("theme", "default");
    } else {
      document.body.dataset.theme = "dark";
      localStorage.setItem("theme", "dark");
    }
  }, [colorTheme]);

  return (
    <AppContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
}

export { AppProvider, useAppContext };
