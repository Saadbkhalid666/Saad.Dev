import "./Hero.css";
import img from "../../assets/images/my-image.webp"
export const Hero = () => {
  return (
    <section id="home">
      <div className="hero-section-container mb-55 pt-[70%] md:pt-[20%] md:ml-10 md:mr-10 flex flex-col md:flex-row  justify-center ">
        <div className="content-container  md:w-[80%] ml-5 mr-5 ">
          <div className="heading-container md:w-[max-content] mb-4">
            <h1 className="typing-heading text-2xl text-[#ffff70] font-extrabold font-serif overflow-hidden whitespace-nowrap border-r-2 border-[#ffff70] max-w-full">
              <span className="text-white">HI! I AM SAAD</span>
              <br />
              <span className="text-[#ffff70]">FULL STACK WEB DEVELOPER</span>
            </h1>

            <style>{`
         @keyframes typing {
  0% { width: 0 }
  50% { width: 100% }
  100% { width: 0 }
}

@keyframes blink {
  50% { border-color: transparent }
}

.typing-heading {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #ffff70;
  animation:
    typing 6s steps(40, end) infinite,
    blink 0.8s step-end infinite;
}

      `}</style>
          </div>
          <div className="intro-container md:w-[60%] ">
            <p className="text-xl font-sans text-[#f9f9f9] ">
              {" "}
              I specialize in creating high-performance, mobile-friendly web
              applications using technologies like React, Node.js, Express,
              MongoDB, and Django, blending frontend creativity with powerful
              backend solutions.
            </p>
          </div>
        </div>
        <div className="image-container shadow-sm rounded-tl-2xl  rounded-tr-4xl rounded-br-2xl rounded-bl-4xl invisible md:visible">
          <img
            src={img}
            className="h-55 rounded-full hover:scale-110 duration-150 transition-all"
            alt="my-image"
          />
        </div>
      </div>
    </section>
  );
};
