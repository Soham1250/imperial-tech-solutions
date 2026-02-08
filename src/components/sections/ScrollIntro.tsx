"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTheme } from "next-themes";

export const ScrollIntro = () => {
    const { theme } = useTheme();
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

    // Background Sky Color Blend - Smooth gradual transition
    const skyColor = useTransform(
        smoothProgress,
        [0, 0.5, 0.7, 0.85, 1],
        [
            "#8fc8e5",      // Standard Sky Blue Start
            "#b3daef",      // Softened Light Blue
            "#d5e8f4",      // Pale Blue
            "#eef5f9",      // Near White Blue
            "#fdfaf3"       // Final paper white background
        ]
    );

    // Heading animations - Start clear, then blur and scale away
    // We stay clear for the first 40% of the scroll
    const headingScale = useTransform(smoothProgress, [0.4, 0.9], [1, 1.1]);
    const headingOpacity = useTransform(smoothProgress, [0.5, 0.9], [1, 0]);
    const headingBlur = useTransform(smoothProgress, [0.4, 0.8], ["blur(0px)", "blur(20px)"]);

    // Hint animations - visible at start
    const hintOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
    const hintY = useTransform(smoothProgress, [0, 0.1], [0, 20]);

    return (
        <div ref={containerRef} className="relative h-[250vh] bg-background">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Background Sky */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ backgroundColor: skyColor }}
                />

                {/* Central Focus Title - Simple Blur Out */}
                <motion.div
                    className="relative z-10 text-center px-6"
                    style={{
                        scale: headingScale,
                        opacity: headingOpacity,
                        filter: headingBlur,
                    }}
                >
                    <h1 className="text-7xl md:text-9xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-4">
                        Imperial Tech
                    </h1>
                    <p className="text-3xl text-white/80 tracking-widest">
                        EST. 2026
                    </p>
                </motion.div>
            </div>

            {/* Hint to scroll */}
            {mounted && (
                <motion.div
                    className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40"
                    style={{
                        opacity: hintOpacity,
                        y: hintY
                    }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-white text-lg animate-pulse">Begin Journey</span>
                        <div className="w-1 h-12 bg-white/20 rounded-full relative overflow-hidden">
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
