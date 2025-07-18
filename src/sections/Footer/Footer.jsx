import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, link: "https://github.com/SaadRajpoot666/", color: "text-white" },
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/saadbinkhalid666", color: "text-blue-500" },
  { icon: <FaTwitter />, link: "https://x.com/saadrajpoot666", color: "text-cyan-400" },
  { icon: <FaInstagram />, link: "https://instagram.com/sagit_saad", color: "text-pink-500" },
  { icon: <FaPinterest />, link: "https://pinterest.com/khalidmehmoodeditz", color: "text-red-500" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[#f9f9f9] px-6 py-10">
      <div className="flex justify-center gap-6 mb-6">
        {socialLinks.map(({ icon, link, color }, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${color} text-2xl transition-transform duration-300 hover:scale-125 drop-shadow-[0_0_5px_#ffff70]`}
          >
            {icon}
          </a>
        ))}
      </div>

      <div className="text-center text-sm text-[#f9f9f9] mt-4 border-t border-[#1a1a1a] pt-4">
        &copy; {new Date().getFullYear()} <span className="text-[#ffff70] font-semibold">Saad.Dev</span> — All rights reserved.
      </div>
    </footer>
  );
};
