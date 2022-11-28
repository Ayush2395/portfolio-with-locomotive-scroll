import { useState } from "react";
import Button from "../Button";
import EducationTab from "./education/educationTab";
import EduIcons from "./education/EduIcons";
import Experience from "./Experience/experience";
import SkillsIcons from "./skills/SkillsIcons";
import Skills from "./skills/skillstab";

const Tabs = () => {
  const [tabs, setTabs] = useState<string>("skills");
  return (
    <>
      <div className="btn-group">
        <Button
          title="Skills"
          onClickEvent={() => setTabs("skills")}
          className={tabs === "skills" && "text-dark bg-warning"}
        />
        <Button
          title="Education"
          onClickEvent={() => setTabs("education")}
          className={tabs === "education" && "text-dark bg-warning"}
        />
        <Button
          title="Experience"
          onClickEvent={() => setTabs("experience")}
          className={tabs === "experience" && "text-dark bg-warning"}
        />
      </div>
      <div className="tabs grid grid-cols-2">
        <div className="col">
          {tabs === "skills" ? (
            <Skills />
          ) : tabs === "education" ? (
            <EducationTab />
          ) : (
            <Experience />
          )}
        </div>

        <div className="col px-11 flex justify-center">
          {tabs === "skills" ? (
            <SkillsIcons />
          ) : tabs === "education" ? (
            <EduIcons />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Tabs;
