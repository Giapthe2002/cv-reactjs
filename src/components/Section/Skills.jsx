import React from "react";
import { skillsData } from "../../utils/data";

const Skills = () => {
  return (
    <div className="w-full pt-2">
      <h2 className="heading-uppercase border-b-1 text-gray-700">Skills</h2>

      <ul className="list-disc ml-3 text-[14px]">
        {skillsData.map((skill, index) => (
          <li key={index} className="text-gray-700">
            <span className="font-semibold text-gray-700">
              {skill.category}:
            </span>{" "}
            {skill.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
