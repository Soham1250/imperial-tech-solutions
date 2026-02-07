"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight, Zap, Sparkles } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const rotateX = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [5, -5]);
    const rotateY = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1200], [-5, 5]);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
            {/* Enhanced Background with moving gradients */}
            <div className="absolute top-0 left-0 right-0 h-full w-full pointer-events-none">
                <motion.div
                    className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] bg-secondary/20 rounded-full blur-[100px]"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                <motion.div
                    className="absolute top-[40%] right-[20%] w-[20rem] h-[20rem] bg-accent/10 rounded-full blur-[80px]"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {mounted && [...Array(15)].map((_, i) => (
                    <motion.div
                        key={`shape-${i}`}
                        className={`absolute ${i % 3 === 0 ? 'w-4 h-4 rounded-full' :
                            i % 3 === 1 ? 'w-3 h-3 rotate-45' :
                                'w-2 h-2 rounded-sm'
                            } ${i % 2 === 0 ? 'bg-primary/20' : 'bg-secondary/20'
                            } backdrop-blur-sm`}
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: Math.random() * 2 + 0.5,
                            rotate: Math.random() * 360
                        }}
                        animate={{
                            y: [null, Math.random() * window.innerHeight],
                            x: [null, Math.random() * window.innerWidth],
                            rotate: [null, Math.random() * 360 + 360],
                            opacity: [0, 1, 0.5, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 15 + 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 hover:bg-primary/20 transition-all cursor-default backdrop-blur-sm shimmer"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                        <Zap className="w-4 h-4 fill-primary" />
                    </motion.div>
                    <span>AI-Powered Digital Transformation</span>
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <Sparkles className="w-4 h-4" />
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        perspective: '1000px',
                    }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
                >
                    <motion.div
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        Scale Faster with <br />
                        <span className="text-gradient inline-block animate-gradient">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="inline-block"
                                whileHover={{
                                    scale: 1.05,
                                    textShadow: "0 0 20px rgba(99, 102, 241, 0.5)"
                                }}
                            >
                                Tech & AI Leverage
                            </motion.span>
                        </span>
                    </motion.div>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-foreground/60 max-w-3xl mb-12 leading-relaxed"
                >
                    We build modern digital experiences and AI-first systems that help SMBs,
                    startups, and professionals automate growth and dominate their market.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 items-center mb-12"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="#contact" className="button-primary flex items-center gap-2 group">
                            Start Your Growth
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="#services"
                            className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 group backdrop-blur-sm"
                        >
                            Explore Services
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Enhanced trust indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/50"
                >
                    {[
                        { label: "30+ Technologies", delay: 0 },
                        { label: "5-Day Avg Delivery", delay: 0.5 },
                        { label: "100% Code Quality", delay: 1 }
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            className="flex items-center gap-2"
                            whileHover={{ scale: 1.1, color: "rgba(99, 102, 241, 1)" }}
                        >
                            <motion.div
                                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' :
                                    i === 1 ? 'bg-secondary' :
                                        'bg-accent'
                                    }`}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: item.delay
                                }}
                            />
                            <span>{item.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
