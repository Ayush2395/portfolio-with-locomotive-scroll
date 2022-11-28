import About from "./About/about";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import useScroll from "../hooks/useScroll";
import { AppContextProvider } from "../context/AppContext";
import { useRef } from "react";
import Project from "./Projects/project";
import { library } from "@fortawesome/fontawesome-svg-core";

const Layout = ({ children }: any): any => {
  const ref = useRef<any>(null);
  const options = {
    smooth: true,
  };
  return (
    <>
      <AppContextProvider>
        <LocomotiveScrollProvider
          multiplier="3"
          options={options}
          containerRef={ref}
          watch={[options]}
        >
          <main data-scroll-container ref={ref}>
            {children}
            <About />
            <Project />
          </main>
        </LocomotiveScrollProvider>
      </AppContextProvider>
    </>
  );
};

export default Layout;
