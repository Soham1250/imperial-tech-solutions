"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Rocket,
    Target,
    Lightbulb,
    Shield,
    Zap,
    Users,
    TrendingUp,
    Award
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: Rocket,
        title: "Fast Delivery",
        description: "We move fast without compromising quality. Most projects delivered 30% faster than industry average.",
        className: "md:col-span-2 md:row-span-1",
        color: "primary"
    },
    {
        icon: Target,
        title: "Results-Driven",
        description: "We focus on metrics that matter. Every project is tied to clear outcomes.",
        className: "md:col-span-1 md:row-span-1",
        color: "secondary"
    },
    {
        icon: Lightbulb,
        title: "Innovation First",
        description: "Stay ahead with cutting-edge AI and modern tech. We bring latest innovations.",
        className: "md:col-span-1 md:row-span-2",
        color: "accent"
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-level security and compliance. Your data is protected with industry best practices.",
        className: "md:col-span-1 md:row-span-1",
        color: "primary"
    },
    {
        icon: Zap,
        title: "AI-Powered",
        description: "Leverage AI automation to scale faster. Intelligent systems that work 24/7.",
        className: "md:col-span-2 md:row-span-1",
        color: "secondary"
    },
    {
        icon: Award,
        title: "Quality Guaranteed",
        description: "100% satisfaction or we make it right. We stand behind every line of code.",
        className: "md:col-span-1 md:row-span-1",
        color: "accent"
    }
];

export const WhyUs = () => {
    return (
        <section id="why-us" className="py-24 px-6 bg-background-secondary relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Why Choose <span className="text-primary">Imperial</span>?
                    </h2>
                    <p className="text-foreground/60 text-xl max-w-2xl mx-auto font-hand">
                        We combine technical brilliance with a touch of whimsy to build products people actually love.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4 md:gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className={cn(
                                "group p-8 rounded-[2rem] bg-white dark:bg-card/60 backdrop-blur-md border-2 border-primary/10 hover:border-primary/40 dark:border-white/5 dark:hover:border-primary/30 transition-all relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl dark:shadow-none",
                                feature.className
                            )}
                        >
                            {/* Inner moving gradient */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-transparent animate-gradient`} />
                            </div>

                            <div className="relative z-10">
                                <div className={cn(
                                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500",
                                    `bg-${feature.color}/10`
                                )}>
                                    <feature.icon className={cn("w-7 h-7", `text-${feature.color}`)} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-foreground/70 font-medium text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Whimsical ornament */}
                            <motion.div
                                className={cn("absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-20", `bg-${feature.color}`)}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.1, 0.2, 0.1]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Counter Stats Section */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t-2 border-primary/5 pt-16">
                    {[
                        { value: "30+", label: "Technologies", desc: "Expertly curated stack", color: "primary" },
                        { value: "24/7", label: "Availability", desc: "AI never sleeps", color: "secondary" },
                        { value: "3x", label: "Efficiency", desc: "Faster time-to-market", color: "accent" }
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="text-center group"
                        >
                            <div className={cn("text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-500", `text-${item.color}`)}>
                                {item.value}
                            </div>
                            <div className="text-xl font-bold text-foreground/80 mb-1">{item.label}</div>
                            <p className="text-foreground/50 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
