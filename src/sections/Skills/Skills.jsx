import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiMongodb,
  SiVercel,
  SiFigma,
  SiPhotopea,
  SiRender,
  SiSocketdotio,
  SiJsonwebtokens,
  SiApachenetbeanside
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const SkillsSection = () => {
  const sectionStyle = "bg-black text-white py-16 px-4 md:px-16";
  const headingStyle = "text-4xl font-bold text-[#ffff80] mb-10 text-center";
  const boxContainer = "grid md:grid-cols-2 lg:grid-cols-3 gap-10";
  const boxStyle = "border border-[#ffff70] rounded-lg p-6 shadow-lg";
  const skillGrid = "grid grid-cols-3 gap-4 mt-4";

  // Reusable card with icon, label, grip & color
  const SkillItem = ({ icon: Icon, label, color, grip }) => (
    <div className="flex flex-col items-center text-center">
      <Icon size={30} className={`mb-2`} style={{ color }} />
      <span className="text-sm font-medium">{label}</span>
      <span className="text-xs text-gray-400">{grip}</span>
    </div>
  );

  return (
    <section className={sectionStyle} id="skills">
      <h2 className={headingStyle}>🧠 Skills That Power My Code</h2>

      <div className={boxContainer}>
        {/* Frontend */}
        <div className={boxStyle}>
          <h3 className="text-[#ffff80] text-xl font-semibold mb-4 text-center">
            Frontend Development
          </h3>
          <div className={skillGrid}>
            <SkillItem icon={SiTypescript} label="TypeScript" color="#3178C6" grip="Intermediate" />
            <SkillItem icon={SiJavascript} label="JavaScript" color="#F7DF1E" grip="Expert" />
            <SkillItem icon={SiTailwindcss} label="Tailwind CSS" color="#38BDF8" grip="Expert" />
            <SkillItem icon={SiHtml5} label="HTML5" color="#E34F26" grip="Expert" />
            <SkillItem icon={SiCss3} label="CSS3" color="#1572B6" grip="Expert" />
            <SkillItem icon={SiAngular} label="Angular" color="#DD0031" grip="Beginner" />
          </div>
        </div>

        {/* Backend */}
        <div className={boxStyle}>
          <h3 className="text-[#ffff80] text-xl font-semibold mb-4 text-center">
            Backend Development
          </h3>
          <div className={skillGrid}>
            <SkillItem icon={SiNodedotjs} label="Node.js" color="#339933" grip="Expert" />
            <SkillItem icon={SiExpress} label="Express.js" color="#ffffff" grip="Expert" />
            <SkillItem icon={SiPython} label="Python" color="#3776AB" grip="Intermediate" />
            <SkillItem icon={SiDjango} label="Django" color="#092E20" grip="Intermediate" />
          </div>
        </div>

        {/* Database */}
        <div className={boxStyle}>
          <h3 className="text-[#ffff80] text-xl font-semibold mb-4 text-center">
            Database
          </h3>
          <div className={skillGrid}>
            <SkillItem icon={SiMongodb} label="MongoDB" color="#47A248" grip="Expert" />
          </div>
        </div>

        {/* Tools */}
        <div className={boxStyle}>
          <h3 className="text-[#ffff80] text-xl font-semibold mb-4 text-center">
            Tools & DevOps
          </h3>
          <div className={skillGrid}>
            <SkillItem icon={VscVscode} label="VS Code" color="#007ACC" grip="Expert" />
            <SkillItem icon={SiVercel} label="Vercel" color="#fffff" grip="Expert" />
            <SkillItem icon={SiFigma} label="Figma" color="#F24E1E" grip="Intermediate" />
            <SkillItem icon={SiPhotopea} label="Photopea" color="#18A497" grip="Intermediate" />
            <SkillItem icon={SiRender} label="Render" color="#46E3B7" grip="Intermediate" />
          </div>
        </div>

        {/* Extra Skills */}
        <div className={boxStyle}>
          <h3 className="text-[#ffff80] text-xl font-semibold mb-4 text-center">
            Extra Skills
          </h3>
          <div className={skillGrid}>
            <SkillItem icon={SiSocketdotio} label="Socket.IO" color="yellow" grip="Intermediate" />
            <SkillItem icon={SiJsonwebtokens} label="JWT Auth" color="orange" grip="Intermediate" />
            <SkillItem icon={SiApachenetbeanside} label="REST APIs" color="#F89820" grip="Intermediate" />
            <SkillItem icon={() => <span className="text-2xl">🏏</span>} label="Cricket" grip="Intermediate" />
          </div>
        </div>
      </div>
    </section>
  );
};
