/* eslint-disable react/prop-types */
import { AppContext } from "./AppContext";

export const ContextProvider = ({ children }) => {
  const value = "";
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
