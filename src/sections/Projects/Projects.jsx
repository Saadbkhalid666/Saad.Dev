import kstraders from "../../assets/images/ks-traders.PNG";
import mrsenterprise from "../../assets/images/mrsenterprise.PNG";
import snr from "../../assets/images/snr.PNG";
import { FaProjectDiagram } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


export const Projects = () => {
  const cardsItems = [
    {
      title: "KS TRADERS",
      category: "Web Development",
      href: "https://kstraders.vercel.app/",
      url: kstraders,
    },
    {
      title: "MRS ENTERPRISES",
      category: "Web Development",
      href: "https://mrsenterprise.vercel.app/",
      url: mrsenterprise,
    },
    {
      title: "SNR",
      category: "Web Development",
      href: "https://snrhub.vercel.app/",
      url: snr,
    },
  ];

  return (
    <section id="projects" className="mt-[15%] mb-[5%] px-6">
      <h1 className="text-3xl text-[#ffff70] flex flex-row justify-center items-center font-extrabold font-sans mb-12">
        <FaProjectDiagram className="inline mr-2 text-4xl" />
        OUR PROJECTS
      </h1>

      <div className="projects-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsItems.map(({ title, category, href, url }, index) => (
          <div
  className="container group relative bg-black text-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
  key={index}
>
  <a href={href} target="_blank" rel="noopener noreferrer" className="block relative">
    <img
      src={url}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold text-[#ffff70] mb-2">
        {title}
      </h2>
      <p className="text-gray-300 text-sm">{category}</p>
    </div>

    {/* Eye icon */}
    <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 text-[#ffff70] text-2xl  transition duration-300 ease-in-out bg-black/50 w-[100%] h-[100%] flex justify-center items-center ">
      <FaEye />
    </span>
  </a>
</div>

        ))}
      </div>
    </section>
  );
};
