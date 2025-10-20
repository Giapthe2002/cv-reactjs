import { projectsData } from "../../utils/data";
import ScrollSection from "../ScrollSection";

const Projects = () => {
  return (
    <ScrollSection delay={0.4}>
      <div className="w-full pt-2">
        <h2 className="heading-uppercase border-b-1 text-gray-700">Projects</h2>

        <div className="mt-1">
          {projectsData.map((project, index) => (
            <div key={index}>
              <div className="flex flex-row justify-between text-gray-700">
                <div>
                  <ul className="list-disc">
                    <li className="font-semibold text-gray-800 text-[14px] ml-3">
                      {project.name}
                    </li>
                  </ul>
                  <p className="italic text-sm leading-none">
                    {project.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="italic text-sm leading-none">
                    {project.duration}
                  </p>
                  <a href={project.link} className="text-sm">
                    Github
                  </a>
                </div>
              </div>
              <div>
                <div className="text-gray-700">
                  <p className="text-[15px]">– Key Features:</p>
                  <ul className="list-[circle] ml-12 text-[14px]">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-gray-700">
                  <p className="text-[15px]">– Technical Implementation:</p>
                  <ul className="list-[circle] ml-12 text-[14px]">
                    {project.technicalImplementation.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
};

export default Projects;
