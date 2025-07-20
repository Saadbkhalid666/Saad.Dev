// importing css for curcular progress bar
import "react-circular-progressbar/dist/styles.css";

import { useEffect, useState } from "react";
import { WelcomeScreen } from "./pages/WelcomeScreen/WelcomeScreen";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./sections/HeroSection/Hero";
import { About } from "./sections/About/About";
import { Projects } from "./sections/Projects/Projects";
import { Contact } from "./sections/Contact/Contact";
import { Footer } from "./sections/Footer/Footer";
import { Services } from "./sections/Services/Services";
import AOS from "aos";
import {SkillsSection} from "./sections/Skills/Skills"
import "aos/dist/aos.css";


function App() {
  const [entered, setEntered] = useState(false);
  
  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("WelcomeAudioPlayed");
    if (hasPlayed) {
      setEntered(true); // If the audio was already played, show Navbar directly
    }
  }, []); // Empty dependency array to run only once on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {!entered ? (
        <WelcomeScreen onEnter={() => setEntered(true)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <SkillsSection />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
