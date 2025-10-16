import React from "react";
import { educationData } from "../../utils/data";

const Education = () => {
  const { degree, institute, cpa, year } = educationData;
  return (
    <div className="w-full pt-4">
      <h2 className="heading-uppercase border-b-1 text-gray-700">Education</h2>

      <table className="w-full text-[15px] mt-1.5">
        <thead className="text-gray-700 font-semibold">
          <tr>
            <th className="border-1 border-gray-600 text-center ">Degree</th>
            <th className="border-1 border-gray-600 text-center">Institute</th>
            <th className="border-1 border-gray-600 text-center">
              CPA/Percentage
            </th>
            <th className="border-1 border-gray-600 text-center">Year</th>
          </tr>
        </thead>

        <tbody>
          <tr className="text-gray-700 text-md">
            <td className="border-1 border-gray-600 text-center">{degree}</td>
            <td className="border-1 border-gray-600 text-center">
              {institute}
            </td>
            <td className="border-1 border-gray-600 text-center">{cpa}</td>
            <td className="border-1 border-gray-600 text-center">{year}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Education;
