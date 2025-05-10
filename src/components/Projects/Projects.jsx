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
          data-aos="fade"
          className="projects-container  flex justify-between md:flex-row flex-col  mt-40 mb-20"
        > <section className="w-full px-4 py-10">
        <div className="flex flex-wrap lg:justify-between justify-center gap-10">
          
          {/* SKYCAST CARD */}
          <div className="relative w-full sm:w-[300px] md:w-[400px] group overflow-hidden rounded-lg">
            <div className="image-container">
              <img
                src="images/Weather app.PNG"
                alt="skycast image"
                className="h-48 sm:h-56 md:h-64 w-full object-cover transition duration-500 ease-in-out group-hover:blur-sm group-active:blur-sm  group-active:brightness-75 group-hover:brightness-75"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 bg-black/40">
              <h1 className="text-[#ffff70] text-2xl font-bold">SKYCAST</h1>
              <p className="text-white text-sm mt-2">
                SkyCast is a fast, user-friendly weather web app that provides real-time
                weather updates and forecasts for any city worldwide.
              </p>
            </div>
          </div>
      
          {/* KS TRADERS CARD */}
          <div className="relative w-full sm:w-[300px] md:w-[400px] group overflow-hidden rounded-lg">
            <div className="image-container">
              <img
                src="images/ks-traders.PNG"
                alt="ks traders image"
                className="h-48 sm:h-56 md:h-64 w-full object-cover transition duration-500 ease-in-out group-hover:blur-sm group-hover:brightness-75 group-active:blur-sm  group-active:brightness-75"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 bg-black/40">
              <h1 className="text-[#ffff70] text-2xl font-bold">KS TRADERS</h1>
              <p className="text-white text-sm mt-2">
                KS Traders is a full-stack e-commerce website built using the MERN stack. It provides a secure shopping experience, real-time product control, and email notifications — all mobile-friendly and stylish.
              </p>
            </div>
          </div>
      
        </div>
      </section>
      

         </div>
      </div>
    </section>
  );
};
