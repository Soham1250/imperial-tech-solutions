"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Brain,
    Smartphone,
    Search,
    Zap,
    Globe,
    Check,
    ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Code2,
        title: "Web Development",
        description: "Custom web applications built with modern tech stacks. Fast, scalable, and SEO-optimized.",
        features: ["React/Next.js", "Full-stack solutions", "API integration", "Performance optimized"],
        price: "Starting at ₹2,500",
        popular: false
    },
    {
        icon: Brain,
        title: "AI Automation",
        description: "Intelligent automation systems that streamline operations and boost productivity with AI agents.",
        features: ["Custom AI agents", "Workflow automation", "Data processing", "Smart integrations"],
        price: "Starting at ₹4,500",
        popular: true
    },
    {
        icon: Search,
        title: "SEO Optimization",
        description: "Data-driven SEO strategies that increase organic traffic and improve search rankings.",
        features: ["Technical SEO", "Content strategy", "Link building", "Analytics tracking"],
        price: "Starting at ₹1,500/mo",
        popular: false
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        features: ["React Native", "Native iOS/Android", "App store deployment", "Push notifications"],
        price: "Starting at ₹8,000",
        popular: false
    },
    {
        icon: Zap,
        title: "Digital Transformation",
        description: "End-to-end digital transformation consulting and implementation services.",
        features: ["Strategy consulting", "Process automation", "Legacy modernization", "Training"],
        price: "Capped at ₹10,000",
        popular: false
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/60 text-lg max-w-2xl mx-auto"
                    >
                        Comprehensive digital solutions designed to scale your business and automate growth.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="relative group"
                        >
                            {service.popular && (
                                <motion.div
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                                >
                                    <span className="px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full shadow-lg animate-gradient">
                                        Most Popular
                                    </span>
                                </motion.div>
                            )}
                            <div className={
                                `h-full p-8 rounded-2xl border transition-all duration-300 backdrop-blur-sm relative overflow-hidden ${service.popular
                                    ? "bg-primary/5 border-primary/50 shadow-lg shadow-primary/10"
                                    : "bg-white/5 border-white/10 hover:border-primary/50 hover:bg-primary/5"
                                }`
                            }>
                                {/* Hover gradient effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                                </div>

                                <div className="relative z-10">
                                    <motion.div
                                        className="mb-6"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <motion.div
                                            className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <service.icon className="w-7 h-7 text-primary" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="text-foreground/60 leading-relaxed">{service.description}</p>
                                    </motion.div>

                                    <ul className="space-y-3 mb-6">
                                        {service.features.map((feature, index) => (
                                            <motion.li
                                                key={feature}
                                                className="flex items-center gap-2 text-sm"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 + index * 0.1 }}
                                            >
                                                <Check className="w-4 h-4 text-primary shrink-0" />
                                                <span className="text-foreground/70">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <div className="pt-6 border-t border-white/10">
                                        <motion.p
                                            className="text-2xl font-bold mb-4"
                                            whileHover={{ scale: 1.05, color: "#6366f1" }}
                                        >
                                            {service.price}
                                        </motion.p>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                href="#contact"
                                                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all group/btn"
                                            >
                                                Get Started
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};