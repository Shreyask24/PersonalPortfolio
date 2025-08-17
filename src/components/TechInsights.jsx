import { lazy, Suspense, useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";
import { BsYoutube } from "react-icons/bs";

const TechInsights = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [InfiniteCards, setInfiniteCards] = useState(null);

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        // Only import after data is loaded
        import("./ui/infinite-moving-cards").then((module) => {
          setInfiniteCards(() => module.InfiniteMovingCards);
        });
      });
  }, []);

  return (
    <section className="relative w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Latest <span className="text-red-500">YouTube</span> Tech Insights
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Dive deep into modern web development, performance optimization, and
            cutting-edge tech trends
          </p>
        </div>

        {/* Video Cards */}
        <div className="w-full">
          {InfiniteCards ? (
            <Suspense
              fallback={
                <div className="text-center text-gray-400 py-16">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mb-4"></div>
                  <p className="text-lg">Loading latest insights...</p>
                </div>
              }
            >
              <InfiniteCards
                items={testimonials}
                direction="right"
                speed="slow"
                pauseOnHover={false}
              />
            </Suspense>
          ) : (
            <div className="text-center text-gray-400 py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mb-4"></div>
              <p className="text-lg">Loading latest insights...</p>
            </div>
          )}
        </div>

        {/* CTA to YouTube Channel */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://youtube.com/@shreyasdevx"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-wrap sm:inline-flex items-center justify-center 
      px-1 sm:px-8 py-3 sm:py-3 
      text-sm sm:text-lg font-semibold text-white 
      bg-red-600 rounded-full hover:bg-red-700 
      transition-all duration-300 transform hover:shadow-xl
      w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            <BsYoutube size={18} className="mr-2 sm:mr-3 shrink-0" />
            <span className="text-center leading-snug">
              Subscribe for More Tech Insights
            </span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(TechInsights, "techInsights");
