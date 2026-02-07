"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Cloud,
    Sparkles,
    Zap,
    Palette,
    Brain,
    Lock,
    Rocket,
    Globe
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
    { value: 30, label: "Technologies Mastered", suffix: "+" },
    { value: 100, label: "Code Quality", suffix: "%" },
    { value: 24, label: "Hours Available", suffix: "/7" },
    { value: 5, label: "Day Avg Delivery", suffix: " " }
];

const techStack = [
    {
        category: "Frontend",
        icon: Code2,
        color: "#6366f1",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
        category: "Backend",
        icon: Database,
        color: "#0ea5e9",
        technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
        category: "AI & ML",
        icon: Brain,
        color: "#f43f5e",
        technologies: ["OpenAI", "LangChain", "TensorFlow", "Custom Models", "RAG"]
    },
    {
        category: "Cloud & DevOps",
        icon: Cloud,
        color: "#8b5cf6",
        technologies: ["AWS", "Vercel", "Docker", "GitHub Actions", "Terraform"]
    },
    {
        category: "Design",
        icon: Palette,
        color: "#ec4899",
        technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "3D Design"]
    },
    {
        category: "Security",
        icon: Lock,
        color: "#10b981",
        technologies: ["OAuth", "JWT", "SSL/TLS", "Encryption", "Pentesting"]
    }
];

const StatCard = ({ value, label, suffix }: { value: number; label: string; suffix: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);
    const count = useCountUp(value, 2000, 0, isInView);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 rounded-2xl bg-white border-2 border-primary/10 hover:border-primary/40 transition-all shadow-sm hover:shadow-md"
        >
            <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
                {count}{suffix}
            </div>
            <div className="text-foreground/60 text-sm md:text-base">{label}</div>
        </motion.div>
    );
};

export const SocialProof = () => {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    return (
        <section className="py-24 px-6 bg-background border-t border-border relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Stats Section */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Built on Excellence
                        </h2>
                        <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                            Fresh perspective, modern technology, and unwavering commitment to quality
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <StatCard key={i} {...stat} />
                        ))}
                    </div>
                </div>

                {/* Tech Stack Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Tech Arsenal
                        </h3>
                        <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                            Cutting-edge technologies to build your perfect solution
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techStack.map((stack, i) => (
                            <motion.div
                                key={stack.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="relative p-8 rounded-2xl bg-white border-2 border-primary/10 hover:border-primary/40 transition-all group overflow-hidden shadow-sm hover:shadow-md"
                            >
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div
                                        className="absolute inset-0 opacity-10"
                                        style={{
                                            background: `linear-gradient(135deg, ${stack.color}20, transparent)`
                                        }}
                                    />
                                </div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <motion.div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all border-2 border-transparent"
                                        style={{ backgroundColor: `${stack.color}25` }}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <stack.icon
                                            className="w-7 h-7"
                                            style={{ color: stack.color }}
                                        />
                                    </motion.div>

                                    <h4 className="text-xl font-bold mb-4">{stack.category}</h4>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {stack.technologies.map((tech, index) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.1 + index * 0.05 }}
                                                onHoverStart={() => setHoveredTech(tech)}
                                                onHoverEnd={() => setHoveredTech(null)}
                                                whileHover={{
                                                    scale: 1.15,
                                                    backgroundColor: `${stack.color}30`,
                                                    color: stack.color
                                                }}
                                                className="px-3 py-1.5 bg-primary/5 text-xs text-foreground font-bold rounded-full border border-primary/20 transition-all cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Corner decoration */}
                                <motion.div
                                    className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-20"
                                    style={{ backgroundColor: stack.color }}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: i * 0.1 + 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Why Choose Us CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-white/10"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Sparkles className="w-6 h-6 text-primary" />
                            <h4 className="text-2xl font-bold">Ready to Build Something Amazing?</h4>
                            <Rocket className="w-6 h-6 text-accent" />
                        </div>
                        <p className="text-foreground/60 mb-6 max-w-2xl mx-auto">
                            As a new agency, we bring fresh ideas, modern approaches, and 100% dedication to your success. No legacy methods, just cutting-edge solutions.
                        </p>
                        <motion.a
                            href="#contact"
                            className="button-primary inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let&apos;s Talk
                            <Zap className="w-4 h-4" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
