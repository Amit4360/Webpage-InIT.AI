import React from "react";
import cardImg from '../../assets/ProjectImg.svg'

const ProjectCard = () => {
  return (
    <div className="px-3">
      <div className="w-48 h-64 border-[1px] border-gray-800 rounded-lg overflow-hidden shadow-md max-w-sm">
        <img className="w-full" src={cardImg} alt="Project Image"/>
        <div className="p-3 bg-[#CAE1FC]">
          <div className="font-medium text-sm mb-2">Project_title</div>
          <p className="text-xs">
            first few lines of the abstract of the project and some content related to the project.
          </p>
          <div className="px-2 pt-3 pb-2">
             <button className="w-10 h-6 rounded-md bg-[#37489B]"> <div className="text-center my-auto text-white text-xs font-medium">Visit</div> </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectCard;
