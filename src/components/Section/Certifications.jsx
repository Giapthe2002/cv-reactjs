import { certifications } from "../../utils/data";
import ScrollSection from "../ScrollSection";

const Certifications = () => {
  return (
    <ScrollSection delay={1.2}>
      <div className="w-full pt-2">
        <h2 className="heading-uppercase border-b-1 text-gray-700">
          Certifications
        </h2>

        <ul className="list-disc ml-3 text-[14px]">
          {certifications.map((item, index) => (
            <li key={index} className="text-gray-700">
              <span className=" text-gray-700">{item.title}</span> -{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    </ScrollSection>
  );
};

export default Certifications;
