import Tabs from "../tabs/Tabs";

const About = (): any => {
  return (
    <>
      <section data-scroll data-scroll-section className="about-section">
        <div className="col">
          <h1
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-3"
            className="title font-semibold"
          >
            About me
          </h1>
          <Tabs />
        </div>
      </section>
    </>
  );
};

export default About;
