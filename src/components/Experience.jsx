import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { AnimatedTestimonialsDemo } from "./AnimatedExperience";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Professional Journey</p>

        <h2 className={styles.sectionSubText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <AnimatedTestimonialsDemo />
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
