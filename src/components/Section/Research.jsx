import { academicExperience } from "../../utils/data";
import ScrollSection from "../ScrollSection";

const Research = () => {
  return (
    <ScrollSection delay={0.8}>
      <div className="w-full pt-2">
        <h2 className="heading-uppercase border-b-1 text-gray-700">
          Academic involvement
        </h2>

        <div className="mt-1">
          {academicExperience.map((item, index) => (
            <div key={index}>
              <div className="flex flex-row justify-between text-gray-700 items-center">
                <ul className="list-disc">
                  <li className="font-semibold text-gray-800 text-[14px] ml-3">
                    {item.lab} - {item.position}
                  </li>
                </ul>
                <p className="italic text-sm leading-none">{item.date}</p>
              </div>
              <ul className="ml-3">
                {item.details.map((detail, index) => (
                  <li>
                    <p className="text-[14px] text-gray-700 leading-4.5 tracking-wide">
                      – {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
};

export default Research;
