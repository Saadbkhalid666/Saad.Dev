import kstraders from "../../assets/images/ks-traders.PNG";
import mrsenterprise from "../../assets/images/mrsenterprise.PNG";
import snr from "../../assets/images/snr.PNG";
import { FaProjectDiagram } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import chatwat from "../../assets/images/chatwat.PNG";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export const Projects = () => {
  const cardsItems = [
    {
      title: "KS TRADERS",
      category: "Web Development",
      href: "https://kstraders.vercel.app/",
      skills: ["react", "tailwind", "nodejs", "expressjs", "nodemailer"],
      url: kstraders,
      github: "https://github.com/Saadbkhalid666/KS-Traders",
    },
    {
      title: "MRS ENTERPRISES",
      category: "Web Development",
      href: "https://mrsenterprise.vercel.app/",
      url: mrsenterprise,
      skills: ["react", "tailwind"],
      github: "https://github.com/Saadbkhalid666/m.r.s-enterprise",
    },
    {
      title: "SNR",
      category: "Web Development",
      href: "https://snrhub.vercel.app/",
      url: snr,
      skills: ["react", "tailwind"],
      github: "https://github.com/Saadbkhalid666/snr",
    },
    {
      title: "ChatWat",
      category: "Web Development",
      href: "https://chatwatapp.vercel.app",
      url: chatwat,
      skills: [
        "react",
        "tailwind",
        "nodejs",
        "expressjs",
        "mongodb",
        "socket.io",
        "jwt-authentication",
        "nodemailer",
      ],
      github: "https://github.com/Saadbkhalid666/chatwat",
    },
  ];

  return (
    <section id="projects" className="mt-[15%] mb-[5%] px-6">
      <h1 className="text-3xl text-[#ffff70] flex flex-row justify-center items-center font-extrabold font-sans mb-12">
        <FaProjectDiagram className="inline mr-2 text-4xl" />
        OUR PROJECTS
      </h1>

      <div className="projects-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsItems.map(
          ({ title, category, href, url, skills, github }, index) => (
            <div
              className="container group relative bg-black text-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
              key={index}
            >
              <img src={url} alt={title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold text-[#ffff70] mb-2">
                  {title}
                </h2>
                <p className="text-gray-300 text-sm">{category}</p>
                <p className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </p>
              </div>
              <div className="link-container flex flex-row justify-center gap-4 cursor-pointer pb-2 ">
                <a href={github}>
                  <FaGithub className="  text-2xl transition-transform duration-300 hover:scale-125 drop-shadow-[0_0_5px_#ffff70]" />
                </a>
                <a href={href}>
                  <FaLink
                    color="#3190ce"
                    className="  text-2xl transition-transform duration-300 hover:scale-125 drop-shadow-[0_0_5px_#ffff70]"
                  />
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
