import Background from "../components/Background";

const Home = (): any => {
  return (
    <>
      <section
        data-scroll
        data-scroll-speed="2"
        data-scroll-section
        className="home-section"
      >
        <Background />
        <h1 className="title font-semibold border-b-8 border-solid border-warning">
          Ayush
        </h1>
      </section>
    </>
  );
};

export default Home;
