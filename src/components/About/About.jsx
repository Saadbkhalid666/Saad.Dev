import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser } from "react-icons/fa"; // Import your icon

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" py-12 px-6">
      <section id="about">
        <div className="flex flex-col items-center justify-center gap-4 mb-8 px-4">
          <div className="flex items-center gap-2 mb-4">
            <FaUser
              className="w-8 h-8 text-[#ffff70] hover:text-yellow-400 transition-all"
              data-aos="fade"
            />
            <h2
              className="text-3xl font-bold text-[#ffff70]"
              data-aos="fade-down"
            >
              About Me
            </h2>
          </div>

          <div className="about-container w-full md:w-[60%] text-center px-4 mb-30">
            <p
              className="text-2xl text-gray-800 leading-relaxed"
              data-aos="flip-left"
            >
              I'm{" "}
              <span className="font-semibold text-yellow-400">
                Saad Bin Khalid
              </span>
              , a full-stack web developer with a passion for building
              high-performance, mobile-friendly web apps. I specialize in{" "}
              <span className="font-semibold text-yellow-400">React</span>,{" "}
              <span className="font-semibold text-yellow-400">Node.js</span>,{" "}
              <span className="font-semibold text-yellow-400">Express</span>,{" "}
              <span className="font-semibold text-yellow-400">MongoDB</span>,
              and <span className="font-semibold text-yellow-400">Django</span>,
              with additional experience in{" "}
              <span className="font-semibold text-yellow-400">Python</span>. I
              deliver seamless, scalable digital solutions with a focus on
              creating dynamic and responsive websites. Whether it's front-end
              or back-end, I ensure that every project is optimized for both
              performance and user experience.
            </p>
          </div>
        </div>
      </section>
      <section id="education">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#ffff70]">
          🎓 My Education
        </h2>

        <div className="relative border-l-4 border-[#ffff70] pl-6 ml-2 space-y-12">
          <div className="relative" data-aos="fade-right">
            <div className="w-4 h-4 bg-[#ffff70] rounded-full  transition-opacity duration-1000 opacity-100"></div>

            <h3 className="text-xl font-semibold text-[#f9f9f9]">
              FULL STACK DEVELOPER
            </h3>
            <span className="text-gray-600 text-sm">2024 – 2025</span>
            <p className="text-gray-700 mt-1">Completed</p>
          </div>

          <div className="relative" data-aos="fade-right">
            <div className="w-4 h-4 bg-[#ffff70] rounded-full  transition-opacity duration-1000 opacity-100"></div>

            <h3 className="text-xl font-semibold text-[#f9f9f9]">
              MERN STACK DEVELOPER – Codehelp
            </h3>
            <span className="text-gray-600 text-sm">2024 – 2025</span>
            <p className="text-gray-700 mt-1">Completed</p>
          </div>
          <div className="relative" data-aos="fade-right">
            <div className="w-4 h-4 bg-[#ffff70] rounded-full  transition-opacity duration-1000 opacity-100"></div>

            <h3 className="text-xl font-semibold text-[#f9f9f9]">
              FREELANCE GRADUATE – DigiSkills
            </h3>
            <span className="text-gray-600 text-sm">2024</span>
            <p className="text-gray-700 mt-1">completed</p>
          </div>

          <div className="relative" data-aos="fade-right">
            <div className="w-4 h-4 bg-[#ffff70] rounded-full  transition-opacity duration-1000 opacity-100"></div>

            <h3 className="text-xl font-semibold text-[#f9f9f9]">
              Intermediate – Punjab Group of Colleges
            </h3>
            <span className="text-gray-600 text-sm">2024 – 2025</span>
            <p className="text-gray-700 mt-1">
              Currently studying Pre-Engineering. Age: 16
            </p>
          </div>

          <div className="relative" data-aos="fade-right" data-aos-delay="200">
            <div className="w-4 h-4 bg-[#ffff70] rounded-full  transition-opacity duration-1000 opacity-100"></div>

            <h3 className="text-xl font-semibold text-[#f9f9f9]">
              Matric – BALAD UL ILM SCHOOL SYSTEM
            </h3>
            <span className="text-gray-600 text-sm">2022 – 2024</span>
            <p className="text-gray-700 mt-1">
              Completed Matric with Science subjects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
