import { createContext, useRef } from "react";

export const AppContext = createContext<any>(null);

export const AppContextProvider = ({ children }: any) => {
  const ref = useRef<any>(null);

  const options: { smooth: boolean } = {
    smooth: true,
  };
  return (
    <>
      <AppContext.Provider value={{options,ref}}>{children}</AppContext.Provider>
    </>
  );
};
