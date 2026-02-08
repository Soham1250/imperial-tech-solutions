"use client";

import {
    Code,
    Laptop,
    Rocket,
    Search,
    ShoppingCart,
    Smartphone,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/magicui/BentoGrid";
import BlurFade from "@/components/magicui/BlurFade";

const features = [
    {
        Icon: Laptop,
        name: "Custom Web Development",
        description: "Tailored websites built with modern frameworks for speed, SEO, and scalability.",
        href: "#contact",
        cta: "Learn more",
        background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: ShoppingCart,
        name: "E-Commerce Solutions",
        description: "Robust online stores designed to convert visitors into loyal customers.",
        href: "#contact",
        cta: "Start Selling",
        background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-50" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: Smartphone,
        name: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        href: "#contact",
        cta: "Go Mobile",
        background: <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-50" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: Search,
        name: "SEO & Digital Marketing",
        description: "Strategies to boost your online visibility and drive organic traffic.",
        href: "#contact",
        cta: "Get Found",
        background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-50" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: Code,
        name: "Software Consulting",
        description: "Expert advice on architecture, tech stack, and digital transformation.",
        href: "#contact",
        cta: "Consult Us",
        background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-50" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 px-6 bg-background-secondary/30 relative">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <BlurFade inView>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6"> Our Expertise </h2>
                        <p className="text-xl text-foreground/60">
                            We deliver comprehensive digital solutions tailored to your unique business needs.
                        </p>
                    </BlurFade>
                </div>

                <BentoGrid className="lg:grid-rows-3">
                    {features.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}