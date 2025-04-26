import { FaProjectDiagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

export const Projects = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
    AOS.refresh(); // Refresh AOS to recalculate the scroll positions
  }, []);
  return (
    <section id="projects">
      <div className="projects-section-container mt-55">
        <div className="projects-heading-container">
          <h1
            data-aos="fade"
            className="projects-heading text-3xl text-center text-[#ffff70] font-extrabold font-serif"
          >
            <FaProjectDiagram className="inline" /> My Projects
          </h1>
        </div>

        <div
          data-aos="zoom-in"
          className="projects-container flex justify-between md:flex-row flex-col mt-20"
        >
          <div className="project-1-container md:w-[30%] flex flex-col lg:ml-10 m-4 rounded-2xl  shadow-md px-4 py-4">
            <div className="image-container flex justify-center">
              <img
                src="/images/ks-traders.PNG"
                alt="KS TRADERS IMAGE"
                className="w-77 "
              />
            </div>
            <div className="projects-content-container mt-5 ">
              <h1 className="text-lg text-gray-600">
                <p className="text-2xl text-[#ffff70] inline mr-1 ">
                  KS TRADERS
                </p>
                is a responsive MERN stack e-commerce site with secure orders
                and email notifications.
              </h1>
              <a
                href="https://kstraders.vercel.app/"
                className="link text-blue-400 mt-6"
              >
                {" "}
                🔗 kstraders.vercel.app
              </a>
            </div>
          </div>
          {/* second card */}
          <div className="project-1-container md:w-[30%] flex flex-col md:mr-10  m-4 rounded-2xl shadow-md px-4 py-4">
            <div className="image-container flex justify-center">
              <img
                src="/images/Weather app.PNG"
                alt="SKY CAST IMAGE"
                className="w-77 "
              />
            </div>
            <div className="projects-content-container mt-5 ">
              <h1 className="text-lg text-gray-600">
                <p className="text-2xl text-[#ffff70] inline mr-1 ">SkyCast </p>
                is a simple weather app where you can enter your city name to
                get real-time weather updates and forecasts.
              </h1>
              <a
                href="https://skycast.free.nf/?i=1"
                className="link text-blue-400 mt-6"
              >
                {" "}
                🔗 skycast.free.nf
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
