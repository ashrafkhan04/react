import { createContext } from "react";
import { Food_List } from "../../../../../assets/assets";

export const StoreContext = createContext(null);
const StoreContextProvider = ({ children }) => {
  const ContextValue = {
    Food_List,
  };
  return (
    <StoreContext.Provider value={ContextValue}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
