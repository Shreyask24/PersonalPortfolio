import { motion } from "framer-motion"
import { styles } from "../styles"
import { FlipWordsDemo } from "./TextGenerator";


const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] mx-auto">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className={`${styles.heroHeadText} text-white text-center w-[70%]`}>Transforming Ideas into Successful <span className="text-[#915eff]"> Reality </span></h1>

        <div className="w-[50%] max-sm:w-[80%] max-sm:mt-8 max-sm:mb-36">
          <FlipWordsDemo />
        </div>

        {/* Hidden SEO keywords for crawlers */}
        <span className="sr-only">
          Frontend Developer, Full-Stack Developer, MERN Stack Developer, Modern Web Developer,
          Freelance Web Developer, Node.js Enthusiast, MongoDB Explorer, Open Source Contributor
        </span>
      </div>


      <div className="absolute xs:bottom-10 bottom-32 w-full flex 
      justify-center items-center">

        <a href="#about">
          {/* The Scrolling Animation */}

          <div className="w-[35px] h-[64px] mb-[-20vh] rounded-3xl border-4
     border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}

              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}

              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero