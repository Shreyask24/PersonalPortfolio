import React from "react";
import { Tilt } from "react-tilt"; //To Tilt The cards
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    //xs:Extra Small Devices
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] 
      shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] 
        flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px] text-justify"
      >
        Hi, I’m <strong>Shreyas Kallurkar</strong> — also known online as
        <strong> Shreyasdevx</strong>. I’m a{" "}
        <strong>Full Stack Web Developer</strong> with expertise in{" "}
        <strong>React.js, Next.js, Node.js, and the MERN stack</strong>. Over
        the past few years, I’ve helped startups, businesses, and creators build{" "}
        <strong>fast, scalable, and user-friendly web applications</strong> that
        make a real impact. Beyond coding, I create content on{" "}
        <strong>YouTube</strong> and share insights on <strong>LinkedIn</strong>{" "}
        and <strong>X (Twitter)</strong> to help developers and entrepreneurs
        grow. My mission is to combine technical skills with creativity to
        deliver solutions that not only work but also{" "}
        <strong>stand out online</strong>. If you’re looking to{" "}
        <strong>
          build a modern website, launch a SaaS product, or scale your digital
          presence
        </strong>
        , let’s connect — I’d love to bring your ideas to life and grow
        together. 🚀
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about"); //Component & ID
