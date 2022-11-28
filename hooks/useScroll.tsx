import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useScroll = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw Error("useScroll can be used inside AppContextProvider");
  }
  return context;
};

export default useScroll;
