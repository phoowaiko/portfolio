import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo font-semibold">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="rounded-3xl w-64 sm:w-80 max-w-none">
          <Image src={assets.user_image} alt="user" className="w-full" />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am a passionate and highly motivated front-end developer with a
            strong foundation in modern web technologies. While I am just
            beginning my professional journey, I have developed solid skills in
            HTML, CSS, JavaScript, and frameworks like React through self-study,
            projects, and continuous learning. I'm eager to apply my knowledge
            in real-world settings and contribute meaningfully to innovative
            teams and projects.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-darkHover hover:shadow-black hover:-translate-y-1 duration-500"
                key={index}>
                <Image className="w-7 mt-3" src={icon} alt={title} />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-Ovo">Tools I use </h4>

          <ul className="flex item-center gap-3 sm:gap-5 ">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}>
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
