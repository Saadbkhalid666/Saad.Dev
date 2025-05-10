import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser } from "react-icons/fa";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-12 px-6 ">
      {/* ABOUT ME SECTION */}
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
              className="text-lg md:text-xl text-white leading-relaxed"
              data-aos="flip-left"
            >
              I'm{" "}
              <span className="font-semibold text-[#ffff70]">
                Saad Bin Khalid
              </span>
              , a 16-year-old full-stack web developer from{" "}
              <span className="text-[#ffff70] font-semibold">Lahore, Pakistan</span>. I completed my matric in{" "}
              <span className="text-[#ffff70] font-semibold">
                Computer Science
              </span>{" "}
              from Balad ul Ilm School System, where I was proudly{" "}
              <span className="text-[#ffff70] font-semibold">
                Student of the Year
              </span>{" "}
              twice.
              <br />
              After my matric exams in{" "}
              <span className="text-[#ffff70] font-semibold">March 2024</span>,
              I started my journey in web development and completed it by{" "}
              <span className="text-[#ffff70] font-semibold">May 2025</span>.
              Since then, I have built several projects including{" "}
              <span className="text-[#ffff70] font-semibold">KS Traders</span>{" "}
              (an e-commerce website) and a real-time{" "}
              <span className="text-[#ffff70] font-semibold">Weather App</span>.
              <br />
              I love turning ideas into real-world digital solutions and enjoy working with both frontend and backend technologies.
              <br />
              My tech stack includes:{" "}
              <span className="text-[#ffff70] font-semibold">
                HTML, CSS, Tailwind CSS, JavaScript, React
              </span>
              ,{" "}
              <span className="text-[#ffff70] font-semibold">
                Node.js, Express, MongoDB, Python
              </span>{" "}
              and{" "}
              <span className="text-[#ffff70] font-semibold">Django</span>.
              <br />
              <span className="text-[#ffff70] font-semibold">I love to code</span>{" "}
              and I’m always excited to learn and build more. 🚀
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#ffff70]">
          🎓 My Education
        </h2>

        <div className="relative border-l-4 border-[#ffff70] pl-6 ml-2 space-y-12">
          {[
            {
              title: "FULL STACK DEVELOPER",
              year: "2024 – 2025",
              status: "Completed",
            },
            {
              title: "MERN STACK DEVELOPER – Codehelp",
              year: "2024 – 2025",
              status: "Completed",
            },
            {
              title: "FREELANCE GRADUATE – DigiSkills",
              year: "2024",
              status: "Completed",
            },
            {
              title: "Intermediate – Punjab Group of Colleges",
              year: "2024 – 2025",
              status: "Currently studying Pre-Engineering. Age: 16",
            },
            {
              title: "Matric – BALAD UL ILM SCHOOL SYSTEM",
              year: "2022 – 2024",
              status: "Completed Matric with Science subjects.",
            },
          ].map((edu, idx) => (
            <div className="relative" data-aos="fade-right" key={idx}>
              <div className="w-4 h-4 bg-[#ffff70] rounded-full transition-opacity duration-1000 opacity-100"></div>
              <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
              <span className="text-gray-400 text-sm">{edu.year}</span>
              <p className="text-gray-300 mt-1">{edu.status}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
