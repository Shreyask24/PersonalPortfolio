import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { AnimatedPinDemo } from "./AnimatedPinDemo";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Showcasing My Work</p>

        <h2 className={styles.sectionSubText}>Projects.</h2>
      </motion.div>

      <div className="w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] 
        max-w-6xl leading-[30px] text-justify"
        >
          Here’s a selection of projects I’ve built — from{" "}
          <strong>real-time chat applications</strong> and{" "}
          <strong>AI-powered SaaS platforms</strong> to{" "}
          <strong>scalable full stack web apps</strong>. Each project highlights
          my ability to combine{" "}
          <strong>
            modern technologies like React, Next.js, Node.js, and MongoDB{" "}
          </strong>
          with problem-solving skills to deliver{" "}
          <strong>fast, secure, and user-friendly digital solutions</strong>.
          These examples reflect how I work with clients and teams to turn ideas
          into impactful products. Check out the <strong>live demos</strong> and{" "}
          <strong>GitHub code</strong> to see them in action — and imagine what
          we could build together.
        </motion.p>

        <div className="mt-20 relative">
          <AnimatedPinDemo />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
