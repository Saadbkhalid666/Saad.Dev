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
      <section data-aos="fade" id="about" className="   ">
        <div className="container flex flex-row w-full h-full">
          <div className="image-container w-full h-full">
            <img src={abtimg} alt="About Image" className="w-[80%]" />
          </div>
          <div className="content-container">
            <h1 className="text-4xl pb-2 text-white flex flex-row">
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
      <section id="education" className="py-16 mt-12 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#ffff70] tracking-wide">
          🎓 My Learning Journey
        </h2>

        <div className="relative border-l-4 border-[#ffff70] pl-6 ml-2 space-y-16">
          {/* FULL STACK */}
          <div className="relative" data-aos="fade-right">
            <div className="w-4 h-4 bg-[#ffff70] rounded-full  "></div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              🧑‍💻 Full Stack Developer
              <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                Completed
              </span>
            </h3>
            <span className="text-gray-400 text-sm">2024 – 2025</span>
            <p className="text-gray-300 mt-1">
              Mastered full-stack web development using modern technologies
              including React, Node.js, MongoDB, Python, and Django.
            </p>
          </div>

          {/* MERN */}
          <div className="relative" data-aos="fade-right">
            <div className="w-4 h-4 bg-[#ffff70] rounded-full  "></div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              🧑‍💻 MERN Stack Developer – CodeHelp
              <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                Completed
              </span>
            </h3>
            <span className="text-gray-400 text-sm">2024 – 2025</span>
            <p className="text-gray-300 mt-1">
              Built real-world projects with MongoDB, Express, React, and
              Node.js. Gained strong experience in building full-stack apps.
            </p>
          </div>

          {/* DIGISKILLS */}
          <div className="relative" data-aos="fade-right">
            <div className="w-4 h-4 bg-[#ffff70] rounded-full  "></div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              💼 Freelance Graduate – DigiSkills
              <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                Completed
              </span>
            </h3>
            <span className="text-gray-400 text-sm">2024</span>
            <p className="text-gray-300 mt-1">
              Learned the principles of freelancing, client communication,
              bidding, and project handling — now offering professional web
              solutions.
            </p>
          </div>

          {/* INTERMEDIATE */}
          <div className="relative" data-aos="fade-right">
            <div className="w-4 h-4 bg-[#ffff70] rounded-full  "></div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              📘 Intermediate – Punjab Group of Colleges
              <span className="text-xs bg-yellow-600 text-white px-2 py-0.5 rounded-full">
                In Progress
              </span>
            </h3>
            <span className="text-gray-400 text-sm">2024 – 2025</span>
            <p className="text-gray-300 mt-1">
              Currently pursuing Pre-Engineering. Balancing academic excellence
              with passion for development. Age: 16
            </p>
          </div>

          {/* MATRIC */}
          <div className="relative" data-aos="fade-right">
            <div className="w-4 h-4 bg-[#ffff70]  rounded-full   "></div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              🏫 Matric – Balad ul Ilm School System
              <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                Completed
              </span>
            </h3>
            <span className="text-gray-400 text-sm">2022 – 2024</span>
            <p className="text-gray-300 mt-1">
              Completed Matriculation in Computer Science. Honored as{" "}
              <span className="text-[#ffff70] font-semibold">
                Student of the Year
              </span>{" "}
              twice for academic brilliance and discipline.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
