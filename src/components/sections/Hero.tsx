"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 right-0 h-full w-full pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] bg-secondary/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
                >
                    <Zap className="w-4 h-4 fill-primary" />
                    <span>AI-Powered Digital Transformation</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
                >
                    Scale Faster with <br />
                    <span className="text-gradient">Tech & AI Leverage</span>
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
                    className="flex flex-col sm:flex-row gap-4 items-center"
                >
                    <Link href="#contact" className="button-primary flex items-center gap-2 group">
                        Start Your Growth
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#services"
                        className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
                    >
                        Explore Services
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                {/* Stats / Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-border pt-12 w-full"
                >
                    {[
                        { label: "Active Clients", value: "20+" },
                        { label: "ROI Delivered", value: "3.5x" },
                        { label: "AI Automations", value: "150+" },
                        { label: "Project Success", value: "100%" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            <span className="text-3xl font-bold">{stat.value}</span>
                            <span className="text-sm text-foreground/40 uppercase tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
