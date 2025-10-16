import React from "react";
import { extracurriculars } from "../../utils/data";

const Extracurriculars = () => {
  return (
    <div className="w-full pt-2">
      <h2 className="heading-uppercase border-b-1 text-gray-700">
        Extracurriculars
      </h2>

      <ul className="list-disc ml-3 text-[14px]">
        {extracurriculars.map((item, index) => (
          <li key={index} className="text-gray-700">
            <span className="font-semibold text-gray-700">{item.title}</span>
            {"  "}
            {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Extracurriculars;
