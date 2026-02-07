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

const features = [
    {
        icon: Rocket,
        title: "Fast Delivery",
        description: "We move fast without compromising quality. Most projects delivered 30% faster than industry average."
    },
    {
        icon: Target,
        title: "Results-Driven",
        description: "We focus on metrics that matter. Every project is tied to clear, measurable business outcomes."
    },
    {
        icon: Lightbulb,
        title: "Innovation First",
        description: "Stay ahead with cutting-edge AI and modern tech. We bring the latest innovations to your business."
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-level security and compliance. Your data and systems are protected with industry best practices."
    },
    {
        icon: Zap,
        title: "AI-Powered",
        description: "Leverage AI automation to scale faster. We build intelligent systems that work 24/7 for your business."
    },
    {
        icon: Users,
        title: "Dedicated Support",
        description: "Real humans when you need them. Get direct access to our team for ongoing support and guidance."
    },
    {
        icon: TrendingUp,
        title: "Proven Growth",
        description: "Average 3x ROI for our clients. We build solutions that directly impact your bottom line."
    },
    {
        icon: Award,
        title: "Quality Guaranteed",
        description: "100% satisfaction or we make it right. We stand behind every line of code we write."
    }
];

export const WhyUs = () => {
    return (
        <section id="why-us" className="py-24 px-6 bg-card/30">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Why Choose Imperial Tech?
                    </h2>
                    <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                        We&apos;re not just another dev shop. We&apos;re your growth partner, combining technical excellence with business acumen.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ 
                                y: -10,
                                rotateY: 5,
                                transition: { duration: 0.3 }
                            }}
                            className="p-6 rounded-2xl bg-background border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all group relative overflow-hidden"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Animated background gradient */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-gradient" />
                            </div>

                            <div className="relative z-10">
                                <motion.div 
                                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </motion.div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-foreground/60 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Corner decoration */}
                            <motion.div 
                                className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.05 + 0.2 }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Additional Value Props */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {[
                        { value: "30+", label: "Technologies", desc: "Modern tech stack expertise", color: "primary" },
                        { value: "24/7", label: "AI Automation", desc: "Systems that never sleep", color: "secondary" },
                        { value: "3x", label: "Average ROI", desc: "Measurable business impact", color: "accent" }
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            className={`text-center p-8 rounded-2xl bg-${item.color}/5 border border-${item.color}/20 relative overflow-hidden group`}
                            whileHover={{ scale: 1.05, y: -5 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}/10 to-transparent`} />
                            </div>
                            <motion.div 
                                className={`text-4xl font-bold text-${item.color} mb-2 relative z-10`}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                {item.value}
                            </motion.div>
                            <div className="text-foreground/80 font-semibold mb-1 relative z-10">{item.label}</div>
                            <div className="text-foreground/60 text-sm relative z-10">{item.desc}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
