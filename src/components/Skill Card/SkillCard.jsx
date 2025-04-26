import { useEffect, useState, useRef } from 'react'; import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'; import { useInView } from 'framer-motion';


export const SkillCard = ({ icon: Icon, title, percentage, color }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        if (current <= percentage) {
          setProgress(current);
        } else {
          clearInterval(interval);
        }
      }, 10);

      return () => clearInterval(interval);
    }
  }, [isInView, percentage]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3 p-4 bg-[#1a1a1a] border-2 border-[#ffff70] shadow-lg rounded-2xl transition-transform hover:scale-105"
    >
      <Icon className="text-4xl text-blue-600" />
      <div className="w-24 h-24">
        <CircularProgressbar
          value={progress}
          text={`${Math.round(progress)}%`}
          styles={buildStyles({
            pathColor: color,
            textColor: '#f9f9f9',
            trailColor: '#eee',
            textSize: '16px',
          })}
        />
      </div>
      <p className="text-sm font-semibold text-[#f9f9f9]">{title}</p>
    </div>
  );
};
