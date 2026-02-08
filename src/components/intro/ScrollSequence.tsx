"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export const ScrollSequence = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // --- Sequence Orchestration ---

    // 1. Background Turn from Dark to Blue/Light
    // Starts dark, transitions to brand colors, then fades out to transparent/white
    const backgroundColor = useTransform(
        smoothProgress,
        [0, 0.4, 0.8, 1],
        ["#0f172a", "#1e293b", "#fdfaf3", "#fdfaf3"]
    );

    // 2. Logo Assembly (0 - 30%)
    const logoScale = useTransform(smoothProgress, [0, 0.3], [0.5, 1.5]);
    const logoOpacity = useTransform(smoothProgress, [0, 0.1, 0.3, 0.5], [0, 1, 1, 0]);
    const logoRotate = useTransform(smoothProgress, [0, 0.3], [-45, 0]);

    // 3. Text Reveal (20% - 60%)
    const textOpacity = useTransform(smoothProgress, [0.2, 0.3, 0.6, 0.8], [0, 1, 1, 0]);
    const textScale = useTransform(smoothProgress, [0.2, 0.6], [0.8, 1.2]);
    const textBlur = useTransform(smoothProgress, [0.2, 0.4], ["blur(10px)", "blur(0px)"]);

    // 4. Tagline Reveal (40% - 70%)
    const taglineY = useTransform(smoothProgress, [0.4, 0.6], [50, 0]);
    const taglineOpacity = useTransform(smoothProgress, [0.4, 0.5, 0.8], [0, 1, 0]);

    // 5. Hero Reveal Overlay (80% - 100%)
    // The sequence container itself will maintain opacity until the end, then fade out or slide away
    const containerOpacity = useTransform(smoothProgress, [0.85, 1], [1, 0]);
    const containerY = useTransform(smoothProgress, [0.9, 1], ["0%", "-100%"]);

    // 6. Particles
    // Generate some random transforms for particles based on progress
    // We can't generate hooks in loops effectively without fixed counts, so use fixed indices

    return (
        <div ref={containerRef} className="relative h-[400vh] z-50">
            <motion.div
                className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
                style={{
                    backgroundColor,
                    opacity: containerOpacity,
                    y: containerY
                }}
            >
                {/* Abstract Grid/Particle Background */}
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full">
                        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                    </svg>
                </div>

                {/* Central Content */}
                <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">

                    {/* Logo Segment */}
                    <motion.div
                        style={{ scale: logoScale, opacity: logoOpacity, rotate: logoRotate }}
                        className="mb-8"
                    >
                        <div className="w-32 h-32 md:w-48 md:h-48 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center border-2 border-white/20 shadow-2xl">
                            <Rocket className="w-16 h-16 md:w-24 md:h-24 text-primary drop-shadow-[0_0_15px_rgba(143,200,229,0.5)]" />
                        </div>
                    </motion.div>

                    {/* Main Title Segment */}
                    <motion.div
                        style={{ opacity: textOpacity, scale: textScale, filter: textBlur }}
                    >
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary drop-shadow-sm">
                            Imperial Tech
                        </h1>
                    </motion.div>

                    {/* Tagline Segment */}
                    <motion.div
                        style={{ y: taglineY, opacity: taglineOpacity }}
                        className="mt-6"
                    >
                        <p className="text-xl md:text-3xl font-light tracking-[0.2em] text-white/80 uppercase">
                            Forging the Future
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-50" />
                </motion.div>

            </motion.div>
        </div>
    );
};
