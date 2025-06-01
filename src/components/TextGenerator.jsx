import React from "react";
import { FlipWords } from "./ui/flipwords";

export function FlipWordsDemo() {
    const words = [
        "Frontend Developer",
        "Full-Stack Developer",
        "MERN Stack Developer",
        "Modern Web Developer",
        "Freelance Web Developer",
        "Node.js Enthusiast",
        "MongoDB Explorer",
        "Open Source Contributor",
    ];


    return (
        <div className="h-[5rem] flex justify-center items-center max-sm:text-center px-4">
            <div
                className="text-xl max-sm:text-lg mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Hi, I'm Shreyas Kallurkar, <FlipWords words={words} />based in India
            </div>
        </div>
    );
}
