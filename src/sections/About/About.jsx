import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser } from "react-icons/fa";
import abtimg from "../../assets/images/about-image.jpg";
export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-12 mt-16 px-6 ">
      {/* ABOUT ME SECTION */}
      <section id="about" className="  w-full h-screen overflow-hidden">
        <div className="container flex flex-row w-full h-full">
          <div className="image-container w-full h-full">
            <img src={abtimg} alt="About Image" className="w-[80%]" />
          </div>
          <div className="content-container">
            <h1 className="text-4xl text-white flex flex-row">
              <FaUser />
              Me & MySelf
            </h1>
            <p
              className="text-lg md:text-xl text-white leading-relaxed"
              data-aos="flip-left"
            >
              I'm{" "}
              <span className="font-semibold text-[#ffff70]">
                Saad Bin Khalid
              </span>
              — a{" "}
              <span className="font-semibold text-[#ffff70]">
                16-year-old full-stack web developer
              </span>{" "}
              based in{" "}
              <span className="font-semibold text-[#ffff70]">
                Lahore, Pakistan
              </span>
              . I specialize in building responsive, high-performance web
              applications with a clean UI, strong backend, and seamless user
              experience.
              <br />
              <br />
              My journey into the world of coding began during{" "}
              <span className="font-semibold text-[#ffff70]">9th grade</span>,
              when I discovered the magic of HTML and CSS. From that moment, I
              knew that technology would be my passion and my purpose.
              <br />
              <br />I completed my{" "}
              <span className="font-semibold text-[#ffff70]">
                Matriculation in Computer Science
              </span>{" "}
              from Balad ul Ilm School System, where I was honored to be named{" "}
              <span className="font-semibold text-[#ffff70]">
                Student of the Year
              </span>{" "}
              twice in a row. After finishing my matric exams in{" "}
              <span className="font-semibold text-[#ffff70]">March 2024</span>,
              I fully dedicated myself to mastering web development. By{" "}
              <span className="font-semibold text-[#ffff70]">May 2025</span>, I
              had successfully completed several real-world projects that
              combined both frontend and backend technologies.
              <br />
              <br />
              Some of my highlighted projects include:
              <span className="font-semibold text-[#ffff70]">
                KS Traders
              </span>{" "}
              (an advanced e-commerce website), a real-time{" "}
              <span className="font-semibold text-[#ffff70]">Weather App</span>,
              <span className="font-semibold text-[#ffff70]">AutoLog.AI</span>{" "}
              (a smart vehicle service tracking platform using AI and OCR), and
              <span className="font-semibold text-[#ffff70]">ChatWat</span> (a
              full-stack real-time chat application with custom authentication
              and admin dashboard).
              <br />
              <br />
              I provide end-to-end web development services — from crafting
              beautiful landing pages to building dynamic dashboards, admin
              panels, and API-integrated web systems. My code is clean,
              scalable, and always optimized for performance and SEO.
              <br />
              <br />
              <span className="font-semibold text-[#ffff70]">
                My tech stack includes:
              </span>
              <br />
              <span className="font-semibold text-[#ffff70]">
                Frontend:
              </span>{" "}
              HTML5, CSS3, Tailwind CSS, JavaScript, TypeScript, React.js,
              Angular
              <br />
              <span className="font-semibold text-[#ffff70]">
                Backend:
              </span>{" "}
              Node.js, Express.js, MongoDB, Python, Django
              <br />
              <span className="font-semibold text-[#ffff70]">
                Tools & Extras:
              </span>{" "}
              Git, GitHub, Vercel, Figma, REST APIs, JWT Auth, Socket.IO
              <br />
              <br />
              I'm deeply passionate about solving problems through technology
              and turning client ideas into real digital products. I believe in
              continuous learning, creative thinking, and delivering quality
              over quantity — every single time.
              <br />
              <br />
              <span className="font-semibold text-[#ffff70]">
                If you're looking for a reliable, hardworking, and passionate
                web developer to bring your next idea to life — I’m ready to
                help you build it.
              </span>
              <br />
              Let’s work together and create something impactful. 🚀
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
