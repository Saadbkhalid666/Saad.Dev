import React from "react";
import { FaStoreAlt, FaBriefcase, FaPaperPlane, FaBlog, FaUserAlt } from "react-icons/fa"; // Using FaPaperPlane for Landing Page

export const Services = () => {
  return (
    <section id="services" className="py-12 px-6 ">
      <h2 className="text-3xl font-bold text-center text-[#ffff70] mb-12" data-aos="fade-down">
        💼 My Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1: E-Commerce Website */}
        <div className="service-card bg-black  p-6 rounded-lg shadow-lg text-center" data-aos="fade-up">
          <FaStoreAlt className="w-16 h-16 text-[#ffff70] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#ffff70]">E-Commerce Websites</h3>
          <p className="text-gray-300 mt-4">
            I create secure, scalable e-commerce websites with full shopping cart functionality, payment gateways, and product management.
          </p>
        </div>

        {/* Service 2: Business Website */}
        <div className="service-card bg-black p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="200">
          <FaBriefcase className="w-16 h-16 text-[#ffff70] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#ffff70]">Business Websites</h3>
          <p className="text-gray-300 mt-4">
            I build professional websites for businesses, helping you establish a strong online presence with a focus on your brand.
          </p>
        </div>

        {/* Service 3: Landing Page */}
        <div className="service-card  bg-black p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="400">
          <FaPaperPlane className="w-16 h-16 text-[#ffff70] mx-auto mb-4" /> {/* Replaced with FaPaperPlane */}
          <h3 className="text-xl font-semibold text-[#ffff70]">Landing Pages</h3>
          <p className="text-gray-300 mt-4">
            I design conversion-focused landing pages that capture leads, drive sales, and engage users effectively.
          </p>
        </div>

        {/* Service 4: Blog Website */}
        <div className="service-card bg-black p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="600">
          <FaBlog className="w-16 h-16 text-[#ffff70] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#ffff70]">Blog Websites</h3>
          <p className="text-gray-300 mt-4">
            I build clean, SEO-friendly blog websites that are easy to manage and optimize for content creators.
          </p>
        </div>

        {/* Service 5: Portfolio Website */}
        <div className="service-card bg-black p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="800">
          <FaUserAlt className="w-16 h-16 text-[#ffff70] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#ffff70]">Portfolio Websites</h3>
          <p className="text-gray-300 mt-4">
            I create personal portfolio websites to showcase your skills, projects, and achievements in a stunning, professional manner.
          </p>
        </div>
      </div>
    </section>
  );
};
