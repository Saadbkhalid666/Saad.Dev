import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const BackgroundLaptop = () => {
  const codeRef = useRef(null);
  const wrapperRef = useRef(null); // For section-based movement
  const laptopRef = useRef(null);  // For mouse tilt only

  useEffect(() => {
    // Typing code effect
    const code = `const observer = new IntersectionObserver((entries)=>{\n  entries.forEach(entry =>{\n    if(entry.!isIntersecting){\n      return true\n    }else{\n      return false\n    }\n  })\n})`;
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < code.length) {
        codeRef.current.innerText += code.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    // Idle floating animation (up-down)
    gsap.to(wrapperRef.current, {
      y: "-=10",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Mouse parallax tilt
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const rotateX = ((e.clientY - innerHeight / 2) / innerHeight) * 10;
      const rotateY = ((e.clientX - innerWidth / 2) / innerWidth) * 10;

      gsap.to(laptopRef.current, {
        rotateX,
        rotateY,
        duration: 0.6,
        ease: "power2.out",
        transformPerspective: 1000,
        transformOrigin: "center",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Section shift animation (only wrapper)
    const screenWidth = window.innerWidth;
    const shift = screenWidth < 768 ? 100 : 300;

    gsap.set(wrapperRef.current, {
      xPercent: -50,
      x: 0,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "home") {
              gsap.to(wrapperRef.current, {
                x: 0,
                duration: 1,
                ease: "power3.out",
              });
            } else if (["about", "education", "services"].includes(id)) {
              gsap.to(wrapperRef.current, {
                x: shift,
                duration: 1,
                ease: "power3.out",
              });
            } else if (["skills", "experience", "projects"].includes(id)) {
              gsap.to(wrapperRef.current, {
                x: -shift,
                duration: 1,
                ease: "power3.out",
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ["home", "about", "education", "skills", "services", "projects", "experience"];
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      clearInterval(typeInterval);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed top-1/2 left-1/2 -translate-y-1/2 z-[-10] pointer-events-none"
    >
      <div ref={laptopRef}>
        <svg
          viewBox="0 0 800 600"
          className="w-[500px] md:w-[600px] stroke-gray-500 fill-none"
        >
          <g id="base">
            <rect x="150" y="300" width="500" height="30" rx="5" ry="5" strokeWidth="2" />
          </g>
          <g id="screen">
            <rect x="170" y="100" width="460" height="200" rx="5" ry="5" strokeWidth="2" />
          </g>
          <g id="keyboard">
            <rect x="180" y="310" width="440" height="10" strokeWidth="1" />
            <rect x="190" y="325" width="80" height="5" strokeWidth="1" />
            <rect x="280" y="325" width="80" height="5" strokeWidth="1" />
            <rect x="370" y="325" width="80" height="5" strokeWidth="1" />
          </g>
        </svg>

        <pre
          ref={codeRef}
          className="absolute top-[100px] left-[140px] w-[420px] h-[160px] text-green-400 text-[5px] md:text-[10px] leading-tight overflow-hidden whitespace-pre"
        ></pre>
      </div>
    </div>
  );
};

export default BackgroundLaptop;
