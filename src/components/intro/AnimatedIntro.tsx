"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { Rocket } from "lucide-react";

export const AnimatedIntro = ({ onComplete }: { onComplete: () => void }) => {
    const [stage, setStage] = useState<"logo" | "tagline" | "fade" | "complete">("logo");
    const controls = useAnimation();

    // Memoized particle positions for performance
    const particles = useMemo(() => {
        return Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            delay: Math.random() * 2,
            duration: Math.random() * 3 + 2,
        }));
    }, []);

    useEffect(() => {
        const sequence = async () => {
            // Stage 1: Logo entrance (0-2s)
            await controls.start("visible");
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Stage 2: Tagline reveal (2-4s)
            setStage("tagline");
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Stage 3: Fade out (4-5s)
            setStage("fade");
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Complete
            setStage("complete");
            onComplete();
        };

        sequence();
    }, [controls, onComplete]);

    if (stage === "complete") return null;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="intro"
                className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
                initial={{ opacity: 1 }}
                animate={{ opacity: stage === "fade" ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Gradient Background */}
                <motion.div
                    className="absolute inset-0"
                    initial={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
                    animate={{
                        background: [
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            "linear-gradient(135deg, #8fc8e5 0%, #a8d672 100%)",
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        ],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Animated Particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute rounded-full bg-white/20"
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                width: particle.size,
                                height: particle.size,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 0.6, 0],
                                scale: [0, 1, 0],
                                y: [0, -100],
                            }}
                            transition={{
                                duration: particle.duration,
                                delay: particle.delay,
                                repeat: Infinity,
                                ease: "easeOut",
                            }}
                        />
                    ))}
                </div>

                {/* Main Content Container */}
                <div className="relative z-10 flex flex-col items-center gap-8">
                    {/* Logo Animation */}
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { scale: 0, rotate: -180, opacity: 0 },
                            visible: {
                                scale: 1,
                                rotate: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                    duration: 1.5,
                                },
                            },
                        }}
                        className="relative"
                    >
                        {/* Glow Effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{
                                background: "radial-gradient(circle, rgba(143, 200, 229, 0.8) 0%, transparent 70%)",
                            }}
                        />

                        {/* Logo Icon */}
                        <motion.div
                            className="relative w-32 h-32 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border-4 border-white/30"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Rocket className="w-16 h-16 text-white" strokeWidth={1.5} />
                        </motion.div>
                    </motion.div>

                    {/* Brand Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-center"
                    >
                        <motion.h1
                            className="text-6xl md:text-8xl font-bold text-white tracking-tight"
                            animate={{
                                textShadow: [
                                    "0 0 20px rgba(255,255,255,0.3)",
                                    "0 0 40px rgba(255,255,255,0.6)",
                                    "0 0 20px rgba(255,255,255,0.3)",
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            Imperial <span className="text-white/90">Tech</span>
                        </motion.h1>
                    </motion.div>

                    {/* Tagline */}
                    <AnimatePresence>
                        {stage === "tagline" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.8 }}
                                className="text-center"
                            >
                                <p className="text-2xl md:text-3xl text-white/80 font-light tracking-widest uppercase">
                                    Building Digital Excellence
                                </p>
                                <motion.div
                                    className="mt-4 h-1 bg-white/40 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Loading Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: stage === "fade" ? 0 : 0.6 }}
                        className="absolute bottom-20 flex gap-2"
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 bg-white rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
