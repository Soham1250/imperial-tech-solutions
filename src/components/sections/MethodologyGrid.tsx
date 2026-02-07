"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Search,
    Map,
    FileText,
    Palette,
    Terminal,
    CheckCircle,
    Rocket,
    ArrowRight
} from "lucide-react";

const phases = [
    {
        name: "Discovery",
        description: "Mapping the hidden paths of your project.",
        href: "/planning",
        icon: Map,
        color: "#8fc8e5" // blue
    },
    {
        name: "Deep Research",
        description: "Diving into market trends & user needs.",
        href: "/research",
        icon: Search,
        color: "#a8d672" // green
    },
    {
        name: "The Blueprint",
        description: "Defining the soul and structure of the app.",
        href: "/prd",
        icon: FileText,
        color: "#f28b82" // coral
    },
    {
        name: "Visual Art",
        description: "Crafting beautiful, soulful interfaces.",
        href: "/design",
        icon: Palette,
        color: "#ffd93d" // yellow
    },
    {
        name: "The Forge",
        description: "Writing clean, magical code that scales.",
        href: "/implementation",
        icon: Terminal,
        color: "#6c5ce7" // purple
    },
    {
        name: "The Ritual",
        description: "Ensuring every detail is perfect.",
        href: "/testing",
        icon: CheckCircle,
        color: "#00b894" // teal
    },
    {
        name: "Ascension",
        description: "Launching your wonder into the world.",
        href: "/maintenance",
        icon: Rocket,
        color: "#ff7675" // red
    },
];

export const MethodologyGrid = () => {
    return (
        <section id="methodology" className="py-32 px-6 bg-[#fdfaf3] relative overflow-hidden">
            {/* Artistic Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                            Our Magical Craft
                        </h2>
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-20 bg-primary/30" />
                            <p className="text-foreground/60 text-xl">
                                A slow-brewed, thoughtful approach to building digital wonders.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {phases.map((phase, i) => (
                        <motion.div
                            key={phase.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                        >
                            <Link
                                href={phase.href}
                                className="group block relative h-full p-8 rounded-[2rem] bg-white border-2 border-primary/10 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 card-hover"
                            >
                                {/* Phase Number Tag */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-white border-2 border-primary/10 flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                                    0{i + 1}
                                </div>

                                {/* Icon with animated background */}
                                <div className="relative mb-8 inline-block">
                                    <div
                                        className="absolute inset-0 scale-150 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
                                        style={{ backgroundColor: phase.color }}
                                    />
                                    <div className="relative w-16 h-16 rounded-2xl bg-white border-2 border-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                                        <div
                                            className="absolute bottom-0 left-0 right-0 h-1 group-hover:h-full opacity-10 group-hover:opacity-100 transition-all duration-500"
                                            style={{ backgroundColor: phase.color }}
                                        />
                                        <phase.icon
                                            className="w-8 h-8 relative z-10 transition-colors duration-500"
                                            style={{ color: phase.color }}
                                        />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                    {phase.name}
                                </h3>
                                <p className="text-foreground/60 text-lg mb-6 leading-relaxed">
                                    {phase.description}
                                </p>

                                <div className="flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Learn the Process <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                    {/* Final "Let's Start" Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="lg:col-span-1"
                    >
                        <Link
                            href="#contact"
                            className="h-full p-8 rounded-[2rem] bg-primary flex flex-col items-center justify-center text-center group border-4 border-white/50 shadow-xl relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-white/10"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{ duration: 10, repeat: Infinity }}
                            />
                            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Start Your Story?</h3>
                            <p className="text-white/80 mb-6 relative z-10">Let's build something magical together.</p>
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary group-hover:scale-125 transition-transform relative z-10">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
