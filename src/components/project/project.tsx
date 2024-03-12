import React from "react";

interface ProjectProps {
  index: number;
  title: string;
  setModal: (modalState: { active: boolean; index: number }) => void;
}

const Project: React.FC<ProjectProps> = ({ index, title, setModal }) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="project flex w-full cursor-pointer transition-all duration-200 border-t border-gray-300 hover:opacity-50"
    >
      <h2 className="transition-all duration-400 hover:translate-x-[-10px]">
        {title}
      </h2>
      <p className="transition-all duration-400 hover:translate-x-[10px]">
        Design & Development
      </p>
    </div>
  );
};

export default Project;
