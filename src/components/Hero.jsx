import { motion } from "framer-motion"

import { styles } from "../styles"
import { ComputersCanvas } from "./canvas";

import PersoalDesktop from "../assets/Personal-desktop.png"
import { Tilt } from "react-tilt";
import { SparklesPreview } from "./Sparkles";
import { FlipWordsDemo } from "./TextGenerator";


const Hero = () => {
  return (


    <section className="relative w-full h-screen mx-auto">

      <div className="flex flex-col justify-center items-center w-full h-full">



        <h1 className={`${styles.heroHeadText} text-white text-center w-[70%]`}>Transforming Ideas into Successful <span className="text-[#915eff]"> Reality </span></h1>

        <div className="w-[50%] max-sm:w-[80%]">
          <FlipWordsDemo />
        </div>

        {/* <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]"> Shreyas Kallurkar </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> I build interactive user interfaces and scalable web apps.
            <br className="sm:block hidden " /> Focused on efficiency and user experience.
          </p> */}


      </div>


      <div className=" flex justify-center items-center ">

        {/* <img className="my-80 hidden mt-[62vh] w-[90%] xl:block xl:mt-[48vh] lg:block lg:w-[30%]" src={PersoalDesktop} alt="" /> */}

        {/* <SparklesPreview /> */}
      </div>
      {/* <ComputersCanvas /> */}


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