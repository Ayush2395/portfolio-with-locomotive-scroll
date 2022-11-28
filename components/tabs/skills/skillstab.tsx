const Skills = () => {
  return (
    <>
      <div className="skills flex w-full space-x-10">
        <div className="bar h-96 w-[3px] bg-danger"></div>
        <div className="skill-sets w-full">
          <div className="skill-group w-full mb-8">
            <h1 className="text-2xl font-semibold">HTML</h1>
            <div className="progress w-full">
              <p className="font-sm">75%</p>
              <div className="progress-bar bg-dark p-1">
                <div className="bg-warning h-[3px] w-[75%]"></div>
              </div>
            </div>
          </div>
          <div className="skill-group w-full mb-8">
            <h1 className="text-2xl font-semibold">CSS</h1>
            <div className="progress w-full">
              <p className="font-sm">53%</p>
              <div className="progress-bar bg-dark p-1">
                <div className="bg-warning h-[3px] w-[53%]"></div>
              </div>
            </div>
          </div>
          <div className="skill-group w-full mb-8">
            <h1 className="text-2xl font-semibold">ReactJs</h1>
            <div className="progress w-full">
              <p className="font-sm">80%</p>
              <div className="progress-bar bg-dark p-1">
                <div className="bg-warning h-[3px] w-[80%]"></div>
              </div>
            </div>
          </div>
          <div className="skill-group w-full mb-8">
            <h1 className="text-2xl font-semibold">Tailwind CSS</h1>
            <div className="progress w-full">
              <p className="font-sm">82%</p>
              <div className="progress-bar bg-dark p-1">
                <div className="bg-warning h-[3px] w-[82%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
