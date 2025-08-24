import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Tools & Frameworks</p>

        <h2 className={styles.sectionSubText}>Tech stack</h2>
      </motion.div>

      <div className="flex-col justify-center items-center text-center mt-5">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="center relative select-none whitespace-nowrap justify-center items-center inline-flex rounded-full border border-white/20 bg-slate-600/30 backdrop-blur-md py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none mr-5 mt-2 text-white shadow-md hover:bg-slate-500/40"
          >
            <div className="w-45 h-10 flex items-center gap-2">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-6 h-6 object-contain"
              />
              <p className="text-lg max-sm:text-sm">{technology.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
