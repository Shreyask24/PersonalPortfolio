"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../../utils/motion";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className
}) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards");
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse");
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller cursor-pointer relative z-20 max-w-[90rem] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_80%,transparent)]",
                className
            )}>
            {/* <h1 className="ml-6">
                Watch Our Latest <span className="text-red-500 font-bold">YouTube Tech Insights</span>
            </h1> */}
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}>
                {items.map((item, idx) => (
                    <li
                        className="relative w-[350px] max-w-full h-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-6 py-3 md:w-[350px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
                        key={`${item.title}-${idx}`}>
                        <a
                            href={item.ytUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Watch "${item.title}" on YouTube`}
                            className="relative group">

                            <blockquote>
                                <div
                                    aria-hidden="true"
                                    className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
                                <span
                                    className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                                    <img src={item.thumbnailUrl} loading="lazy" alt={item.title} className="h-[120px] w-full object-cover rounded-md" />
                                </span>
                                <div className="relative z-20 mt-3 flex flex-row items-center">
                                    <span className="flex flex-col gap-1">
                                        <span
                                            className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                                            {item.title}
                                        </span>
                                        <span
                                            className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                                            {item.name}
                                        </span>

                                    </span>
                                </div>
                            </blockquote>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
