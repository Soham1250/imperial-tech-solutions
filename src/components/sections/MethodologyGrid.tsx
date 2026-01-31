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
    Rocket
} from "lucide-react";

const phases = [
    { name: "Research", href: "/research", icon: Search },
    { name: "Planning", href: "/planning", icon: Map },
    { name: "PRD", href: "/prd", icon: FileText },
    { name: "Design", href: "/design", icon: Palette },
    { name: "Implementation", href: "/implementation", icon: Terminal },
    { name: "Testing", href: "/testing", icon: CheckCircle },
    { name: "Deployment", href: "/maintenance", icon: Rocket },
];

export const MethodologyGrid = () => {
    return (
        <section className="py-24 px-6 bg-background border-t border-border">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Methodology</h2>
                    <p className="text-foreground/60 max-w-2xl">
                        A systematic approach to building high-performance digital products and AI solutions.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4">
                    {phases.map((phase, i) => (
                        <motion.div
                            key={phase.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Link
                                href={phase.href}
                                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                            >
                                <phase.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                <span className="font-semibold text-lg">{phase.name}</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
