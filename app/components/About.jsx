import React from "react";
import Image from "next/image";

import { motion } from "motion/react";

import { infoList, toolsData } from "@/assets/assets";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-8 scroll-mt-20 "
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo">
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo font-semibold ">
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=" w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1">
          <p className="mb-12 text-xl font-Ovo">
            I am a passionate and highly motivated front-end developer with a
            strong foundation in modern web technologies. While I am just
            beginning my professional journey, I have developed solid skills in
            HTML, CSS, JavaScript, and frameworks like React through self-study,
            projects, and continuous learning. I'm eager to apply my knowledge
            in real-world settings and contribute meaningfully to innovative
            teams and projects.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:shadow hover:-translate-y-1 duration-500 hover:shadow-black  dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}>
                <Image
                  className="w-7 mt-3"
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <div className="flex mt-10 items-center justify-center gap-y-5 flex-col">
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="my-6 text-gray-700 text-4xl font-semibold font-Ovo dark:text-white/80">
              Tools I use
            </motion.h4>

            <motion.ul
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex item-center justify-center flex-wrap  gap-3 sm:gap-7 ">
              {toolsData.map((tool, index) => (
                <motion.li
                  viewport={{ once: true }}
                  whileInView={{ scale: 1.1 }}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                  key={index}>
                  <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
