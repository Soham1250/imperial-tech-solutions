"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const ScrollIntro = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Parting clouds
    const leftCloudX = useTransform(smoothProgress, [0, 0.6], ["0%", "-120%"]);
    const rightCloudX = useTransform(smoothProgress, [0, 0.6], ["0%", "120%"]);
    const cloudBlur = useTransform(smoothProgress, [0, 0.4], ["blur(15px)", "blur(0px)"]);
    const cloudOpacity = useTransform(smoothProgress, [0.7, 0.9], [1, 0]);

    // Background Sky Color Blend
    const skyColor = useTransform(
        smoothProgress,
        [0, 0.6, 1],
        ["#8fc8e5", "#87ceeb", "#fdfaf3"]
    );

    // Heading animations
    const headingOpacity = useTransform(smoothProgress, [0, 0.3, 0.5], [0, 1, 0]);
    const headingY = useTransform(smoothProgress, [0, 0.5], [20, -50]);
    const headingScale = useTransform(smoothProgress, [0, 0.5], [0.9, 1.1]);

    // Final transition overlay
    const finalOverlayOpacity = useTransform(smoothProgress, [0.7, 1], [0, 1]);

    // Hint animation
    const hintOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-[250vh] bg-[#fdfaf3]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Background Sky */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ backgroundColor: skyColor }}
                />

                {/* Main Heading shown while in clouds */}
                <motion.div
                    className="relative z-10 text-center px-6"
                    style={{
                        opacity: headingOpacity,
                        y: headingY,
                        scale: headingScale
                    }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold font-hand text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)] mb-4">
                        Imperial Tech
                    </h1>
                    <p className="text-2xl font-hand text-white/90 italic drop-shadow-md">
                        Entering a world of digital wonders...
                    </p>
                </motion.div>

                {/* Parting Clouds Layer */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    <motion.div
                        className="absolute inset-y-0 left-0 w-1/2 bg-white"
                        style={{ x: leftCloudX, filter: cloudBlur, opacity: cloudOpacity }}
                    >
                        {/* Cloud texture detail */}
                        {mounted && [...Array(15)].map((_, i) => (
                            <div
                                key={`l-cloud-${i}`}
                                className="absolute bg-white rounded-full blur-3xl opacity-80"
                                style={{
                                    top: `${(i * 7) % 100}%`,
                                    right: `${(i * 13) % 40}%`,
                                    width: `${((i * 17) % 300) + 300}px`,
                                    height: `${((i * 23) % 200) + 150}px`,
                                }}
                            />
                        ))}
                    </motion.div>
                    <motion.div
                        className="absolute inset-y-0 right-0 w-1/2 bg-white"
                        style={{ x: rightCloudX, filter: cloudBlur, opacity: cloudOpacity }}
                    >
                        {mounted && [...Array(15)].map((_, i) => (
                            <div
                                key={`r-cloud-${i}`}
                                className="absolute bg-white rounded-full blur-3xl opacity-80"
                                style={{
                                    top: `${(i * 11) % 100}%`,
                                    left: `${(i * 9) % 40}%`,
                                    width: `${((i * 19) % 300) + 300}px`,
                                    height: `${((i * 21) % 200) + 150}px`,
                                }}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Final transition gradient */}
                <motion.div
                    className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-b from-transparent via-white/20 to-[#fdfaf3]"
                    style={{
                        opacity: finalOverlayOpacity
                    }}
                />
            </div>

            {/* Hint to scroll */}
            {mounted && (
                <motion.div
                    className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40"
                    style={{ opacity: hintOpacity }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-white font-hand text-lg animate-bounce drop-shadow-md">Scroll to descend</span>
                        <div className="w-1 h-12 bg-white/30 rounded-full relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 right-0 bg-white h-1/2"
                                animate={{ y: [0, 24, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};
