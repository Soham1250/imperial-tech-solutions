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
    { name: "Planning", href: "/planning", icon: Map },
    { name: "Research", href: "/research", icon: Search },
    { name: "PRD", href: "/prd", icon: FileText },
    { name: "Design", href: "/design", icon: Palette },
    { name: "Implementation", href: "/implementation", icon: Terminal },
    { name: "Testing", href: "/testing", icon: CheckCircle },
    { name: "Deployment", href: "/maintenance", icon: Rocket },
];

export const MethodologyGrid = () => {
    return (
        <section className="py-24 px-6 bg-[#fdfaf3] border-t-2 border-primary/10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Magical Craft</h2>
                    <p className="text-foreground/60 text-xl font-hand max-w-2xl">
                        A slow-brewed, thoughtful approach to building digital wonders.
                    </p>
                </div>

                <div className="flex flex-wrap gap-6">
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
                                className="inline-flex items-center gap-4 px-8 py-5 rounded-3xl bg-white border-2 border-primary/20 hover:border-secondary/50 hover:bg-secondary/5 transition-all group shadow-sm hover:shadow-md"
                            >
                                <phase.icon className="w-6 h-6 text-secondary group-hover:scale-125 group-hover:rotate-12 transition-transform" />
                                <span className="font-bold text-xl font-hand text-foreground/80">{phase.name}</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
