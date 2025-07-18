import img from "../../assets/images/my-image.png";
import "./Hero.css";
export const Hero = () => {
  return (
    <section id="home" className="w-full h-screen overflow-hidden">
      <div className="relative w-full h-full flex flex-col lg:flex-row">
        {/* Left Side - Black background always visible */}
        <div
          data-aos="fade-right"
          className="w-full lg:w-1/2 h-full flex flex-col justify-center px-6 lg:px-16 py-10 z-10 text-white"
          style={{
            backgroundColor: "#000",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <div className="mb-4">
            {/* Typing effect only on lg */}
            <h1 className="typing-heading text-2xl md:text-3xl text-[#ffff70] font-extrabold font-serif max-w-full border-r-2 border-[#ffff70] overflow-hidden whitespace-nowrap lg:whitespace-nowrap">
              <span className="text-white">HI! I AM SAAD</span>
              <br />
              <span className="text-[#ffff70]">FULL STACK WEB DEVELOPER</span>
            </h1>
          </div>

          <div className="w-full lg:w-[90%]">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I specialize in creating high-performance, mobile-friendly web
              applications using technologies like React, Node.js, Express,
              MongoDB, and Django — blending frontend creativity with powerful
              backend solutions.
            </p>
          </div>
        </div>

        {/* Right Side - Yellow background + image only on large screens */}
        <div
          data-aos="fade-left"
          className="hidden lg:flex w-1/2 relative h-full items-center justify-center"
          style={{
            backgroundColor: "#ffff70",
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <img
            data-aos="fade-up"
            data-aos-delay={100}
            src={img}
            alt="my-image"
            className="w-[80%] absolute bottom-0 object-cover"
          />
        </div>
      </div>
    </section>
  );
};
