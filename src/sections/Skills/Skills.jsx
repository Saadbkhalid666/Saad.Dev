import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  } from 'react-icons/fa';
  import { SiMongodb, SiTailwindcss, SiExpress, SiDjango } from 'react-icons/si';
import { useEffect } from 'react';
import AOS from "aos"
import {SkillCard} from "../../components/Skill Card/SkillCard"  
  const skills = [
    { icon: FaHtml5, title: 'HTML5', percentage: 95, color: '#e34c26' },
    { icon: FaCss3Alt, title: 'CSS3', percentage: 90, color: '#264de4' },
    { icon: FaJs, title: 'JavaScript', percentage: 85, color: '#f0db4f' },
    { icon: FaReact, title: 'React', percentage: 75, color: '#61DBFB' },
    { icon: FaNodeJs, title: 'Node.js', percentage: 75, color: '#3c873a' },
    { icon: FaPython, title: 'Python', percentage: 70, color: '#306998' },
    { icon: SiMongodb, title: 'MongoDB', percentage: 75, color: '#4DB33D' },
    { icon: SiExpress, title: 'Express.js', percentage: 70, color: '#000000' },
    { icon: SiTailwindcss, title: 'Tailwind CSS', percentage: 70, color: '#38bdf8' },
    { icon: SiDjango, title: 'Django', percentage: 50, color: '#092e20' },
  ];
  
  export const Skills = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS when the component mounts
        AOS.refresh(); // Refresh AOS to recalculate the scroll positions
      }, []);
    return (
      <section id="skills" className="py-12  mt-54"  >
        <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-[#ffff70]"
          data-aos="fade-right"
          data-aos-duration="1000" // Optional: Control the duration of the animation
        >
          💻 My Skills
        </h2>
          <div data-aos="fade-up"   data-aos-duration="1000"
 className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  