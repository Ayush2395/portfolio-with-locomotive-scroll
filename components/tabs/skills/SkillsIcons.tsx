import { RiReactjsFill, RiHtml5Fill } from "react-icons/ri";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import { TbBrandTailwind, TbBrandNextjs } from "react-icons/tb";

const SkillsIcons = () => {
  return (
    <>
      <div className="skills-icons">
        <div
          className="icon-1"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="4"
        >
          <RiReactjsFill
            className="text-5xl bg-white text-dark p-1 rounded-full"
            id="react"
          />
        </div>

        <div
          className="icon-1"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="4"
        >
          <RiHtml5Fill
            className="text-5xl bg-white text-dark p-1 rounded-full"
            id="react"
          />
        </div>

        <div
          className="icon-1"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="-4"
        >
          <DiCss3
            className="text-5xl bg-white text-dark p-1 rounded-full"
            id="react"
          />
        </div>

        <div
          className="icon-1"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-9"
        >
          <DiJavascript1
            className="text-5xl bg-white text-dark p-1 rounded-full"
            id="react"
          />
        </div>

        <div
          className="icon-1"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="-9"
        >
          <TbBrandTailwind
            className="text-5xl bg-white text-dark p-1 rounded-full"
            id="react"
          />
        </div>

        <div
          className="icon-1"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-6"
        >
          <TbBrandNextjs
            className="text-5xl bg-white text-dark p-1 rounded-full"
            id="react"
          />
        </div>
      </div>
    </>
  );
};

export default SkillsIcons;
