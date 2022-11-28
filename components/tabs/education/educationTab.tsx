import React from "react";

const EducationTab = () => {
  return (
    <>
      <div className="skills flex w-full space-x-10">
        <div className="bar h-[65vh] w-[3px] bg-danger"></div>
        <div className="skill-sets w-full">
          <div className="skill-group w-full mb-8">
            <h1 className="text-4xl font-semibold text-secondary">
              Govt. Model Sen. Sec. School
            </h1>
            <p className="text-[18px] text-light font-medium">
              Ludhiana, Punjab
            </p>
            <p className="text-xl font-semibold">10th 2017</p>
          </div>
          <div className="skill-group w-full mb-8">
            <h1 className="text-4xl font-semibold text-secondary">
              Govt. Model Sen. Sec. School
            </h1>
            <p className="text-[18px] text-light font-medium">
              Ludhiana, Punjab
            </p>
            <p className="text-xl font-semibold">
              +2 Non-Medical (2017 - 2019)
            </p>
          </div>
          <div className="skill-group w-full mb-8">
            <h1 className="text-4xl font-semibold text-secondary">
              Gulzar Group of Institutes
            </h1>
            <p className="text-[18px] text-light font-medium">Khanna, Punjab</p>
            <p className="text-xl font-semibold">B.TECH CSE (2019 - 2023)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationTab;
