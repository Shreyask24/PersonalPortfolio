import React from "react";
import { FlipWords } from "./ui/flipwords";

export function FlipWordsDemo() {
    const words = [
        "Frontend Developer",
        "Full-Stack Developer",
        "React Developer",
        "Next.js Developer",
        "MERN Stack Developer",
        "JavaScript Developer",
        "Responsive UI Designer",
        "Website Developer",
        "Modern Web Developer",
        "Freelance Web Developer",
        "Node.js Enthusiast",
        "MongoDB Explorer",
        "UI/UX Focused Developer",
        "Open Source Contributor",
        "Tech Intern (Kaash, Jellylogic)",
    ];


    return (
        <div className="h-[10rem] flex justify-center items-center px-4">
            <div
                className="text-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Hi, I'm Shreyas Kallurkar,
                <FlipWords words={words} />based in India
            </div>
        </div>
    );
}
