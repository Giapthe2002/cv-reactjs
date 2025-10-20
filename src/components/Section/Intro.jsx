import { profileData } from "../../utils/data";
import ImageAnimation from "../ImageAnimation";
import ScrollSection from "../ScrollSection";

const Intro = () => {
  const { position, name, university, school, phone, email, portfolio, image } =
    profileData;
  return (
    <div className="flex flex-row gap-4 items-center">
      <ImageAnimation image={image} />
      <ScrollSection delay={0}>
        <div className="">
          <h2 className="text-2xl font-semibold mb-1 text-gray-800">
            {position}
          </h2>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="text-gray-700">
              <h1 className="text-xl font-medium">{name}</h1>
              <p className="text-md leading-none">{university}</p>
              <p className="text-md">{school}</p>
            </div>
            <div className="text-md text-right text-gray-700 flex flex-col">
              <a href="tel:+84395318514">{phone}</a>
              <a href="mailto:giapthe2002@gmail.com" className="leading-none">
                {email}
              </a>
              <a href={portfolio} className="text-gray-700 font-medium">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </ScrollSection>
    </div>
  );
};

export default Intro;
