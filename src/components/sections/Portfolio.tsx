"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlurFade from "@/components/magicui/BlurFade";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "FinTech Dashboard",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        description: "Real-time financial analytics platform with AI-driven insights.",
        href: "#",
    },
    {
        title: "E-Commerce Rebrand",
        category: "Brand & Development",
        image: "https://images.unsplash.com/photo-1523726491678-bf852e717f63?q=80&w=2070&auto=format&fit=crop",
        description: "Complete digital transformation for a luxury fashion retailer.",
        href: "#",
    },
    {
        title: "HealthTech Mobile App",
        category: "Mobile Development",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        description: "Telemedicine application connecting patients with specialists worldwide.",
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
                        <Button variant="outline" className="rounded-full px-8 py-6 text-lg">
                            View All Projects <ArrowUpRight className="ml-2 w-5 h-5" />
                        </Button>
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
