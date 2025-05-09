import { AnimatedTestimonials } from "./ui/animatedTestimonials";

import {
    valethi,
    oytie,
    jellylogic,
    ujjwal,
    codsoft,
    defaultImg
} from "../assets";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "Built a multi-role Helpdesk platform and contributed to a Flight Booking Web App with real-time APIs, seat selection UI, and dynamic travel features using React, TypeScript, Next.js, and MUI.",
            name: "Kaash Overseas",
            designation: "Product Intern",
            src: defaultImg,
        },
        {
            quote:
                "Developed responsive frontend modules, analytics features, and production-ready UI components using React and Node.js",
            name: "Jellylogic, Bluemap IT Solutions Pvt Ltd",
            designation: "Full Stack Developer Intern",
            src: jellylogic,
        },
        {
            quote:
                "Maintained and built responsive web apps using React.js while collaborating with cross-functional teams and contributing to code quality through reviews.",
            name: "Oytie Pvt Ltd",
            designation: "Frontend Developer Intern",
            src: oytie,
        },
        {
            quote:
                "Delivered a high-performing, SEO-optimized React website with 3,000+ monthly visitors, incorporating client feedback and achieving 90+ Lighthouse scores.",
            name: "Ujjwal Engineers & Environmental Services",
            designation: "Website Developer (Freelance)",
            src: ujjwal,
        },
        {
            quote:
                "Built a personal portfolio, calculator app, and engaging landing page using HTML, CSS, and JavaScript to showcase skills and enhance user interaction.",
            name: "Codsoft",
            designation: "Web Developer (Intern)",
            src: codsoft,
        },
        {
            quote:
                "Communicated with international clients, resolved product issues via effective email support, and gathered feedback to improve customer satisfaction.",
            name: "Valethi Technologies",
            designation: "IT Operations (Intern)",
            src: valethi,
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
