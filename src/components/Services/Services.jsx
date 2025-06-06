import React from "react";
import { FaStoreAlt, FaBriefcase, FaPaperPlane, FaBlog, FaUserAlt } from "react-icons/fa";

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card bg-black card-box p-6 rounded-lg shadow-lg text-center"
            data-aos="fade-up"
            data-aos-delay={service.delay}
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-[#ffff70]">{service.title}</h3>
            <p className="text-gray-300 mt-4">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
