"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight, Zap, Sparkles } from "lucide-react";
import Link from "next/link";
import { PageLayout } from "../layout/PageLayout";

export const Hero = () => {
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
        <PageLayout>
            <section
                id="home"
                className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden bg-[#fdfaf3]"
            >
                {/* Ghibli Clouds and Hills BACKGROUND */}
                <div className="absolute inset-0 pointer-events-none opacity-40">
                    <motion.div
                        className="absolute top-[20%] left-[-10%] w-[30rem] h-[15rem] bg-white rounded-full blur-[80px]"
                        animate={{ x: [0, 50, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute top-[40%] right-[-10%] w-[40rem] h-[20rem] bg-white rounded-full blur-[100px]"
                        animate={{ x: [0, -70, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-secondary/30 to-transparent" />
                </div>

                {/* Floating Petals/Leaves */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {mounted && [...Array(20)].map((_, i) => (
                        <motion.div
                            key={`petal-${i}`}
                            className={`absolute ${i % 2 === 0 ? 'w-4 h-6 rounded-tr-full rounded-bl-full bg-accent/30' :
                                'w-3 h-5 rounded-tl-full rounded-br-full bg-secondary/30'
                                }`}
                            initial={{
                                x: Math.random() * 100 + "%",
                                y: -20,
                                rotate: Math.random() * 360
                            }}
                            animate={{
                                y: ["0vh", "110vh"],
                                x: [null, (Math.random() - 0.5) * 50 + "%"],
                                rotate: [null, Math.random() * 360 + 720]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 10
                            }}
                        />
                    ))}
                </div>

                {/* Subtle Texture Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/40 border-2 border-primary/30 text-primary-foreground font-hand text-lg mb-8 hover:bg-white/60 transition-all cursor-default backdrop-blur-sm shadow-sm"
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <Zap className="w-5 h-5 fill-primary text-primary" />
                        </motion.div>
                        <span>Hand-Crafted Digital Solutions</span>
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Sparkles className="w-5 h-5 text-accent" />
                        </motion.div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 leading-[1.05] text-foreground"
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
                        className="flex flex-col sm:flex-row gap-6 items-center mb-16"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="#contact" className="button-primary flex items-center gap-3 group text-lg px-10">
                                Begin Your Journey
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.div>
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: -1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="#services"
                                className="px-10 py-3.5 ghibli-glass hover:bg-white/60 transition-all flex items-center gap-3 group text-lg font-bold text-foreground"
                            >
                                Explore Our Craft
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-primary" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Enhanced trust indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-10 text-lg font-hand text-foreground/60"
                    >
                        {[
                            { label: "30+ Magic Technologies", delay: 0 },
                            { label: "Swift Delivery", delay: 0.5 },
                            { label: "Artisanal Code Quality", delay: 1 }
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                className="flex items-center gap-3"
                                whileHover={{ scale: 1.1, color: "var(--color-primary)" }}
                            >
                                <motion.div
                                    className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-primary' :
                                        i === 1 ? 'bg-secondary' :
                                            'bg-accent'
                                        }`}
                                    animate={{
                                        scale: [1, 1.4, 1],
                                        opacity: [0.6, 1, 0.6]
                                    }}
                                    transition={{
                                        duration: 3,
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
        </PageLayout>
    );
};
