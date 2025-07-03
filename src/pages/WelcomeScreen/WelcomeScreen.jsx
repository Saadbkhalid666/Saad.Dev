import { useState } from "react";
import logo from "../../assets/images/remove-bg-logo.png"
import Loader from "../../components/Loader/Loader"
import sound from "../../assets/audio/welcomevoice.mp3"
export const WelcomeScreen = ({ onEnter }) => {
  const [showLoader, setShowLoader] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    setShowButton(false);
    setShowLoader(true);
          const hasPlayed = sessionStorage.getItem("WelcomeAudioPlayed");
  
      if (!hasPlayed) {
        // If audio hasn't been played, play it
        const audio = new Audio(sound);
        
        audio
          .play()
          .then(() => {
            // Set in sessionStorage and trigger onEnter callback to move forward
            sessionStorage.setItem("WelcomeAudioPlayed", "true");
            onEnter(); // move to the main site (Navbar)
          })
          .catch((err) => {
            // If autoplay is blocked or fails, still move forward
            console.log("AutoPlay is Blocked", err);
            onEnter(); // move forward even if audio fails
          });
      } else {
        // If audio was already played, just trigger onEnter
        onEnter();
      }
    

    setTimeout(() => {
      setShowLoader(false);
      onEnter(); // tell App.jsx to enter site
    }, 3000);
  };

  return (
    <div className="relative w-screen h-screen ">
      <img
        src={logo}
        alt="Logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      {showButton && (
        <button
          onClick={handleClick}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-md hover:bg-white hover:cursor-pointer hover:text-black transition duration-150"
        >
          GET STARTED
        </button>
      )}

      {showLoader && <Loader />}
    </div>
  );
};
