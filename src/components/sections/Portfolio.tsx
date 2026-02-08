"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlurFade from "@/components/magicui/BlurFade";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const projects = [
    {
        title: "Nexus Finance Dashboard",
        category: "Custom Web Development",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        description: "High-performance financial analytics platform handling millions of transactions with real-time visualization.",
        href: "#",
    },
    {
        title: "Lumina E-Commerce",
        category: "E-Commerce Solutions",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2370&auto=format&fit=crop",
        description: "A seamless, high-conversion shopping experience for a luxury lifestyle brand with AI product recommendations.",
        href: "#",
    },
    {
        title: "Vitality Health App",
        category: "Mobile App Development",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1740&auto=format&fit=crop",
        description: "Cross-platform wellness application integrating with wearables for real-time health tracking.",
        href: "#",
    },
    {
        title: "Growth Analytics Suite",
        category: "SEO & Digital Marketing",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        description: "Comprehensive marketing dashboard unifying SEO, PPC, and social metrics for actionable insights.",
        href: "#",
    },
];

export const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 px-6 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <BlurFade inView>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Selected Works</h2>
                        <p className="mt-4 text-xl text-foreground/60 max-w-lg">
                            Showcasing our best digital craftsmanship and strategic solutions.
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.2} inView>
                        <InteractiveHoverButton>
                            View All Projects
                        </InteractiveHoverButton>
                    </BlurFade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                            <Link href={project.href} className="group block space-y-4">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 bg-muted">
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-20 transition-opacity z-10" />
                                    {/* Placeholder image logic if next/image fails with external URL without config */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm font-medium text-foreground/50 uppercase tracking-wider">
                                                {project.category}
                                            </p>
                                        </div>
                                        <div className="p-2 rounded-full border border-border group-hover:bg-primary group-hover:text-white transition-all">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <p className="text-foreground/70 line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </Link>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
};
