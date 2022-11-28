import Link from "next/link";
import styles from "../styles/Cards.module.css";
interface Data {
  project: { name: string; html_url: string; description: string };
}

const Cards: React.FC<Data> = ({ project }) => {
  return (
    <>
      <div
        data-scroll
        data-scroll-speed="4"
        className={`${styles.card} h-[220px] w-full bg-light rounded-2xl shadow-lg px-11 mb-3 cursor-pointer`}
      >
        <h1 className="uppercase text-xl font-medium text-danger">
          {project.name}
        </h1>
        <p className="text-xl">
          {project.description === null
            ? "No Description"
            : project.description.slice(0,80)}
        </p>
        <Link
          className={`${styles.project_link} absolute top-0 h-full w-full bg-primary left-0 rounded-2xl flex justify-center items-center translate-y-[15rem] invisible text-white text-xl border-b-8 border-double border-white duration-300`}
          href={project.html_url}
        >
          Visit
        </Link>
      </div>
    </>
  );
};

export default Cards;
