import React from "react";
import { FaStoreAlt, FaBriefcase, FaPaperPlane, FaBlog, FaUserAlt } from "react-icons/fa";
import "./services.css"

export const Services = () => {
  const services = [
    {
      icon: <FaStoreAlt className="w-16 h-16 text-[#ffff70] mx-auto mb-4" />,
      title: "E-Commerce Websites",
      description:
        "I create secure, scalable e-commerce websites with full shopping cart functionality, payment gateways, and product management.",
      delay: "0",
    },
    {
      icon: <FaBriefcase className="w-16 h-16 text-[#ffff70] mx-auto mb-4" />,
      title: "Business Websites",
      description:
        "I build professional websites for businesses, helping you establish a strong online presence with a focus on your brand.",
      delay: "200",
    },
    {
      icon: <FaPaperPlane className="w-16 h-16 text-[#ffff70] mx-auto mb-4" />,
      title: "Landing Pages",
      description:
        "I design conversion-focused landing pages that capture leads, drive sales, and engage users effectively.",
      delay: "400",
    },
    {
      icon: <FaBlog className="w-16 h-16 text-[#ffff70] mx-auto mb-4" />,
      title: "Blog Websites",
      description:
        "I build clean, SEO-friendly blog websites that are easy to manage and optimize for content creators.",
      delay: "600",
    },
    {
      icon: <FaUserAlt className="w-16 h-16 text-[#ffff70] mx-auto mb-4" />,
      title: "Portfolio Websites",
      description:
        "I create personal portfolio websites to showcase your skills, projects, and achievements in a stunning, professional manner.",
      delay: "800",
    },
  ];

  return (
    <section id="services" className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-[#ffff70] mb-12" data-aos="fade-down">
        💼 My Services
      </h2>

       <div
        className="services-container grid grid-cols-1 sm:grid-cols-2 place-items-center  gap-3"
        
      >
        {services.map(({icon,title,description,delay}, index) => (
          <div
  key={index}
  className="card-box flex justify-center items-center p-6 w-full sm:w-1/2 md:w-1/3  "
  data-aos="fade-up"
  data-aos-delay={delay}
>
  <div className="card-content hover:scale-110 transition-all duration-500 bg-black rounded-lg shadow-2xl p-6 text-center relative z-10 w-full h-full flex flex-col items-center justify-center">
    {icon}
    <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
</div>

        ))}
      </div>
    </section>
  );
};
