 // importing css for curcular progress bar
 import 'react-circular-progressbar/dist/styles.css';
 
 import { useEffect, useState } from "react";
 import {WelcomeScreen} from "./pages/WelcomeScreen/WelcomeScreen"
 import {Navbar} from "./components/Navbar/Navbar"
 import {Hero} from "./components/HeroSection/Hero"
 import {About} from "./components/About/About"
 import {Skills} from "./components/Skills/Skills"
 import {Projects} from "./components/Projects/Projects"
 import {Contact} from "./components/Contact/Contact"
 import {Footer} from "./components/Footer/Footer"
 
 
 function App() {

   const [entered, setEntered] = useState(false);
 
   useEffect(() => {
     const hasPlayed = sessionStorage.getItem("WelcomeAudioPlayed");
     if (hasPlayed) {
       setEntered(true); // If the audio was already played, show Navbar directly
     }
   }, []); // Empty dependency array to run only once on component mount
 
   return (
     <>
       {!entered ? (
         <WelcomeScreen onEnter={() => setEntered(true)} /> 
       ) : (<>
         <Navbar />
         <Hero    />
         <About   />
         <Skills    />
         <Projects   />
         <Contact   />
         <Footer   />
         </>
       )}
     </>
   );
 }
 
 export default App;
 