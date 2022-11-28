import { useEffect, useState } from "react";
import Bubbles from "../Bubbles";
import Cards from "../Cards";

interface ErrorProps {
  error: boolean;
  msg: string;
}

const Project = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<ErrorProps>();
  useEffect(() => {
    const fetchGithubRepo = async () => {
      const response = await fetch("http://localhost:3000/api/projects");
      const data = await response.json();

      if (!response.ok) {
        setError({ error: true, msg: data.error });
      }
      if (response.ok) {
        setData(data);
      }
    };
    fetchGithubRepo();
  }, []);
  return (
    <>
      <section
        data-scroll
        data-scroll-section
        className="project-section pb-20"
        id="stick"
      >
        <h1
          data-scroll
          data-scroll-sticky
          data-scroll-speed="9"
          data-scroll-target="#stick"
          className="title mb-5 z-10"
        >
          My projects
        </h1>
        <Bubbles />
        <div className="grid grid-cols-4 gap-x-6 -z-10">
          {data.map((project: any) => (
            <Cards project={project} key={project.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
