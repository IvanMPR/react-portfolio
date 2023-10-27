import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const HeaderContext = createContext();

function HeaderProvider({ children }) {
  const [checked, setChecked] = useState(false);

  const location = useLocation();

  useEffect(() => {
    document.title = `Ivan's Portfolio | ${
      !location.pathname.slice(1)
        ? "Home"
        : location.pathname.slice(1, 2).toUpperCase() +
          location.pathname.slice(2)
    }`;
  }, [location]);

  return (
    <HeaderContext.Provider value={{ checked, setChecked }}>
      {children}
    </HeaderContext.Provider>
  );
}

function useHeaderContext() {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
}

export { HeaderProvider, useHeaderContext };
