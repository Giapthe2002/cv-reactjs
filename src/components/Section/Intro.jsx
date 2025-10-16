import React from "react";
import { profileData } from "../../utils/data";

const Intro = () => {
  const { position, name, university, school, phone, email, portfolio, image } =
    profileData;
  return (
    <header className="flex flex-col md:flex-row items-center pt-6 gap-4 font-times">
      <div className="w-[120px] h-[120px] object-center rounded-[50%] overflow-hidden">
        <img src={image} alt="Profile" className="scale-130" />
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-stretch-125% mb-1">{position}</h2>
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-xl text-gray-700 font-medium">{name}</h1>
            <p className="text-gray-700 text-md leading-none">{university}</p>
            <p className="text-gray-700 text-md">{school}</p>
          </div>
          <div className="text-md text-right">
            <p className="text-gray-800">{phone}</p>
            <p className="text-gray-800 leading-none">{email}</p>
            <a
              href={portfolio}
              className="text-gray-600 hover:underline font-medium"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro;
