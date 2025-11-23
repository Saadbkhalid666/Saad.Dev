import { useState } from "react";
import logo from "../../assets/images/logo-without-bg.png"
import Loader from "../../components/Loader/Loader"
import sound from "../../assets/audio/welcomevoice.mp3"
export const WelcomeScreen = ({ onEnter }) => {
     
       
  return (
    <div className="relative w-screen h-screen ">
      <img
        src={logo}
        alt="Logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      
<h1 className="text-2xl text-center text-white"> OOPs!, The Website is under maintenance right now. </h1>

    </div>
  );
};
