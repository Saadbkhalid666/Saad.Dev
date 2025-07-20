import React from "react";

const SkillCard = ({ icon: Icon, label, color, grip }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-center">
      <Icon size={40} color={color} className="mx-auto mb-2" />
      <h4 className="text-lg font-bold text-white">{label}</h4>
      <p className="text-sm text-gray-300">{grip}</p>
    </div>
  );
};

export default SkillCard;
