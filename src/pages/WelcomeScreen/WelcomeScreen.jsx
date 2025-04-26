export const WelcomeScreen = ({ onEnter }) => {
    const handleClick = () => {
      // Check if the audio has already been played
      const hasPlayed = sessionStorage.getItem("WelcomeAudioPlayed");
  
      if (!hasPlayed) {
        // If audio hasn't been played, play it
        const audio = new Audio("/audio/welcomevoice.mp3");
        
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
    };
  
    return (
      <div className="relative w-screen h-screen">
        <img
          src="/images/remove-bg-logo.png"
          alt="Centered"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        
        <button 
          onClick={handleClick} 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-md shadow-md focus:bg-white focus:text-black transition duration-150 hover:bg-white hover:text-black"
        >
          GET STARTED
        </button>
      </div>
    );
  };
  