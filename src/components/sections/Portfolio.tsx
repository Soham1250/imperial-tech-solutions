"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
    Code,
    Smartphone,
    Brain,
    Rocket,
    Shield,
    Zap,
    TrendingUp,
    Globe,
    Database,
    Sparkles
} from "lucide-react";

const capabilities = [
    {
        title: "Custom Web Applications",
        category: "Web Development",
        description: "Full-stack web applications built with modern frameworks. From landing pages to complex SaaS platforms.",
        icon: Code,
        color: "#6366f1",
        features: [
            "React & Next.js expertise",
            "Responsive design",
            "SEO optimized",
            "Lightning fast"
        ],
        gradient: "from-blue-500 to-indigo-600"
    },
    {
        title: "AI-Powered Solutions",
        category: "Artificial Intelligence",
        description: "Intelligent automation systems, chatbots, and AI integrations that work 24/7 for your business.",
        icon: Brain,
        color: "#f43f5e",
        features: [
            "Custom AI agents",
            "Natural language processing",
            "Automated workflows",
            "Smart recommendations"
        ],
        gradient: "from-rose-500 to-pink-600"
    },
    {
        title: "Mobile App Development",
        category: "Mobile",
        description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
        icon: Smartphone,
        color: "#0ea5e9",
        features: [
            "React Native",
            "Cross-platform",
            "App store ready",
            "Push notifications"
        ],
        gradient: "from-cyan-500 to-blue-600"
    },
    {
        title: "Cloud Infrastructure",
        category: "DevOps & Cloud",
        description: "Scalable cloud solutions with automated deployment, monitoring, and enterprise-grade security.",
        icon: Globe,
        color: "#8b5cf6",
        features: [
            "AWS/Azure/GCP",
            "Auto-scaling",
            "CI/CD pipelines",
            "24/7 monitoring"
        ],
        gradient: "from-purple-500 to-violet-600"
    },
    {
        title: "Database Architecture",
        category: "Backend",
        description: "Robust database design and optimization for high-performance data management and analytics.",
        icon: Database,
        color: "#10b981",
        features: [
            "SQL & NoSQL",
            "Performance tuning",
            "Data modeling",
            "Backup strategies"
        ],
        gradient: "from-emerald-500 to-green-600"
    },
    {
        title: "Security & Compliance",
        category: "Cybersecurity",
        description: "Enterprise-level security implementations, compliance audits, and penetration testing.",
        icon: Shield,
        color: "#f59e0b",
        features: [
            "Security audits",
            "Encryption",
            "Compliance (GDPR, etc)",
            "Penetration testing"
        ],
        gradient: "from-amber-500 to-orange-600"
    }
];

export const Portfolio = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-[#e8f5e9] to-[#fdfaf3] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
                        Our Gallery of Wonders
                    </h2>
                    <p className="text-foreground/60 text-xl max-w-2xl mx-auto">
                        A curation of our most magical work, built with love and attention to every detail.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {capabilities.map((capability, i) => {
                        const mouseX = useMotionValue(0);
                        const mouseY = useMotionValue(0);

                        const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
                        const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

                        return (
                            <motion.div
                                key={capability.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const centerX = rect.left + rect.width / 2;
                                    const centerY = rect.top + rect.height / 2;
                                    mouseX.set((e.clientX - centerX) / rect.width);
                                    mouseY.set((e.clientY - centerY) / rect.height);
                                }}
                                onMouseLeave={() => {
                                    mouseX.set(0);
                                    mouseY.set(0);
                                }}
                                onHoverStart={() => setHoveredIndex(i)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                style={{
                                    rotateX: hoveredIndex === i ? rotateX : 0,
                                    rotateY: hoveredIndex === i ? rotateY : 0,
                                    transformStyle: "preserve-3d",
                                    perspective: 1000,
                                }}
                                whileHover={{ scale: 1.02, z: 50 }}
                                className="group relative rounded-2xl overflow-hidden bg-white border-2 border-primary/10 hover:border-primary/40 transition-all cursor-default shadow-sm hover:shadow-md"
                            >
                                {/* Gradient header */}
                                <div className="relative h-32 overflow-hidden">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-20`}
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background"
                                        initial={{ opacity: 0.7 }}
                                        whileHover={{ opacity: 0.9 }}
                                    />

                                    {/* Icon */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <motion.div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                                            style={{
                                                backgroundColor: `${capability.color}20`,
                                                border: `2px solid ${capability.color}40`
                                            }}
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <capability.icon
                                                className="w-8 h-8"
                                                style={{ color: capability.color }}
                                            />
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        className="absolute top-4 right-4"
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                                    >
                                        <span
                                            className="px-3 py-1 backdrop-blur-sm text-white text-xs font-semibold rounded-full"
                                            style={{ backgroundColor: `${capability.color}80` }}
                                        >
                                            {capability.category}
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6 relative" style={{ transform: "translateZ(20px)" }}>
                                    <motion.h3
                                        className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        {capability.title}
                                    </motion.h3>
                                    <p className="text-foreground font-medium text-sm leading-relaxed mb-4 opacity-80">
                                        {capability.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2 mb-4">
                                        {capability.features.map((feature, index) => (
                                            <motion.div
                                                key={feature}
                                                className="flex items-center gap-2 text-sm"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 + index * 0.1 }}
                                            >
                                                <div
                                                    className="w-2.5 h-2.5 rounded-full shadow-sm"
                                                    style={{ backgroundColor: capability.color }}
                                                />
                                                <span className="text-foreground font-semibold">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <motion.div
                                        className="pt-4 border-t border-white/10"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <a
                                            href="#contact"
                                            className="flex items-center gap-2 text-sm font-medium group/btn"
                                            style={{ color: capability.color }}
                                        >
                                            <span>Learn More</span>
                                            <motion.div
                                                animate={{ x: hoveredIndex === i ? [0, 5, 0] : 0 }}
                                                transition={{ duration: 1, repeat: hoveredIndex === i ? Infinity : 0 }}
                                            >
                                                <TrendingUp className="w-4 h-4" />
                                            </motion.div>
                                        </a>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center p-10 rounded-2xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border border-white/10 relative overflow-hidden"
                >
                    {/* Animated background */}
                    <div className="absolute inset-0 opacity-30">
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20"
                            animate={{
                                x: [-100, 100],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Rocket className="w-8 h-8 text-primary" />
                            <h3 className="text-3xl font-bold">Your Project Awaits</h3>
                            <Sparkles className="w-8 h-8 text-accent" />
                        </div>
                        <p className="text-foreground/60 text-lg mb-6 max-w-2xl mx-auto">
                            Every great product starts with a conversation. Let&apos;s discuss how we can turn your ideas into reality.
                        </p>
                        <motion.a
                            href="#contact"
                            className="button-primary inline-flex items-center gap-2 text-lg px-8 py-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your Project
                            <Zap className="w-5 h-5" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
