import { AnimatedTestimonials } from "./ui/animatedTestimonials";

import {
  valethi,
  oytie,
  jellylogic,
  ujjwal,
  codsoft,
  defaultImg,
} from "../assets";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Developed a multi-role Helpdesk platform and a Flight Booking Web App with 10+ real-time API integrations, seat selection UI, and dynamic travel features. Improved booking success rates by 17% using React, TypeScript, Next.js, and MUI.",
      name: "Kaash Overseas",
      designation: "Frontend Developer",
      src: defaultImg,
    },
    {
      quote:
        "Built mobile-responsive modules, real-time analytics dashboards, and reusable UI components. Enhanced data fetch speeds by ~30% and improved user flows for banking and finance applications using React and Node.js.",
      name: "Jellylogic (Bluemap IT Solutions)",
      designation: "Full Stack Developer",
      src: jellylogic,
    },
    {
      quote:
        "Delivered responsive React.js web apps in collaboration with cross-functional teams. Improved maintainability and user experience by implementing clean architecture and reusable components.",
      name: "Oytie Pvt Ltd",
      designation: "Frontend Developer",
      src: oytie,
    },
    {
      quote:
        "Designed and launched a high-performing React website with 3,000+ monthly visitors. Achieved 90+ Lighthouse performance scores and boosted client visibility with SEO optimization.",
      name: "Ujjwal Engineers & Environmental Services",
      designation: "Freelance Web Developer",
      src: ujjwal,
    },
    {
      quote:
        "Built portfolio projects including a calculator app, interactive landing page, and static websites using HTML, CSS, and JavaScript. Strengthened fundamentals while creating engaging user interfaces.",
      name: "Codsoft",
      designation: "Web Developer",
      src: codsoft,
    },
    {
      quote:
        "Collaborated with international clients, handled IT operations, and improved customer satisfaction by resolving issues and streamlining email support processes.",
      name: "Valethi Technologies",
      designation: "IT Operations",
      src: valethi,
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
