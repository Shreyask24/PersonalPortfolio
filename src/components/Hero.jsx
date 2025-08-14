import { motion } from "framer-motion"
import { styles } from "../styles"
import ShinyText from "./ShinyText";
import { lazy, Suspense, useEffect, useState } from "react";
import { BsYoutube } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center px-4 py-12 md:py-20 min-h-[90vh]">
        {/* Headline */}
        <h1
          className={`${styles.heroHeadText} text-center text-white 
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
      max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-4xl 
      mb-6 sm:mb-8 leading-snug`}
        >
          <span>
            <ShinyText speed={2} text="Shreyas Kallurkar (Shreyasdevx)" />
          </span>
        </h1>

        {/* Main Tagline */}
        <p
          className={`${styles.heroSubText} text-center text-gray-300 
      text-base sm:text-lg md:text-xl capitalize
      max-w-xs sm:max-w-md md:max-w-3xl 
      leading-relaxed mb-4 sm:mb-6`}
        >
          Transforming Ideas into Fast,{" "}
          <ShinyText speed={2} text="Modern Websites" /> that Bring Your Vision to Successful Reality.
        </p>

        {/* Role & Location */}
        <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-2 font-medium">
          Frontend Developer & Tech Content Creator based in{" "}
          <ShinyText speed={2} text="India" />
        </p>

        {/* USP */}
        <p className="text-center text-purple-400 text-xs sm:text-sm md:text-base mb-10 font-semibold">
          <ShinyText speed={2} text="🚀 300+ YouTube Views • Latest Tech Insights" />
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-10">
          <a
            href="#work"
            className="group relative inline-flex items-center justify-center 
        px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg 
        font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 
        rounded-full hover:from-purple-700 hover:to-blue-700 
        transition-all duration-300 transform hover:shadow-2xl w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center">
              View My Work
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          </a>

          <a
            href="https://www.youtube.com/@Shreyasdevx"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center 
        px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg 
        font-semibold text-purple-400 border-2 border-purple-400 
        rounded-full hover:bg-purple-700 hover:text-white 
        transition-all duration-300 transform w-full sm:w-auto"
          >
            <span className="flex items-center">
              Watch Tech Insights
              <BsYoutube className="ml-2 text-lg sm:text-xl" />
            </span>
          </a>
        </div>
      </div>


      {/* Scroll indicator */}
      <div className="flex justify-center">
        <a href="#techInsights">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 will-change-transform"
            />
          </div>
        </a>
      </div>

      {/* Hidden SEO keywords */}
      <span className="sr-only">
        Frontend Developer, Full-Stack Developer, MERN Stack Developer, Modern Web Developer,
        Freelance Web Developer, Node.js Enthusiast, MongoDB Explorer, Open Source Contributor
      </span>
    </section>

  )
}

export default Hero