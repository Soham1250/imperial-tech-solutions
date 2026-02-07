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
        <section id="services" className="py-24 px-6 bg-gradient-to-b from-[#fdfaf3] to-[#e8f5e9]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold mb-4 text-foreground"
                    >
                        Our Hand-Crafted Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/60 text-xl max-w-2xl mx-auto"
                    >
                        Every project is a unique story. We build digital experiences with the care and detail of a master artisan.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{
                                y: -12,
                                transition: { duration: 0.3 }
                            }}
                            className="relative group"
                        >
                            {service.popular && (
                                <motion.div
                                    className="absolute -top-5 left-1/2 -translate-x-1/2 z-10"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                                >
                                    <span className="px-6 py-1.5 bg-accent text-white text-sm font-bold rounded-full shadow-md animate-bounce">
                                        Community Favorite
                                    </span>
                                </motion.div>
                            )}
                            <div className={
                                `h-full p-8 rounded-[40px] transition-all duration-300 relative overflow-hidden bg-white shadow-md border-2 ${service.popular
                                    ? "border-accent/60 bg-accent/[0.03] ring-4 ring-accent/10"
                                    : "border-primary/30 hover:border-primary/60"
                                }`
                            }>
                                {/* Hand-drawn border effect */}
                                <div className="absolute inset-0 border-[3px] border-black/10 rounded-[40px] pointer-events-none m-1" style={{ borderRadius: '45px 15px 35px 25px/25px 35px 15px 45px' }} />

                                <div className="relative z-10">
                                    <motion.div
                                        className="mb-6"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <motion.div
                                            className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 border-2 border-secondary/30"
                                            whileHover={{ rotate: [0, -10, 10, 0] }}
                                        >
                                            <service.icon className="w-8 h-8 text-secondary-foreground" />
                                        </motion.div>
                                        <h3 className="text-3xl font-bold mb-4 text-foreground">{service.title}</h3>
                                        <p className="text-foreground/70 leading-relaxed text-lg">{service.description}</p>
                                    </motion.div>

                                    <ul className="space-y-4 mb-8">
                                        {service.features.map((feature, index) => (
                                            <motion.li
                                                key={feature}
                                                className="flex items-center gap-3 text-md"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 + index * 0.1 }}
                                            >
                                                <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm" />
                                                <span className="text-foreground font-medium">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <div className="pt-6 border-t border-black/5">
                                        <motion.p
                                            className="text-3xl font-bold mb-6 text-secondary-foreground"
                                            whileHover={{ scale: 1.05, x: 5 }}
                                        >
                                            {service.price}
                                        </motion.p>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                href="#contact"
                                                className="inline-flex items-center gap-3 text-foreground font-bold hover:text-primary transition-all group/btn bg-primary/10 px-6 py-2 rounded-xl border border-primary/20"
                                            >
                                                Send a Message
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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