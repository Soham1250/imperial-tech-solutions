"use client";

import { Check, ArrowRight } from "lucide-react";
import BlurFade from "@/components/magicui/BlurFade";
import { cn } from "@/lib/utils";

const steps = [
    {
        title: "Discovery & Strategy",
        description: "We dive deep into your business goals, target audience, and market positioning.",
        icon: Search,
    },
    {
        title: "Design & Prototyping",
        description: "Creating intuitive, high-fidelity designs that align with your brand identity.",
        icon: Laptop,
    },
    {
        title: "Development & Testing",
        description: "Building robust, scalable solutions with clean code and rigorous testing.",
        icon: Code,
    },
    {
        title: "Launch & Growth",
        description: "Smooth deployment and ongoing optimization to ensure continuous success.",
        icon: Rocket,
    },
];

import { Search, Laptop, Code, Rocket } from "lucide-react";

export const MethodologyGrid = () => {
    return (
        <section id="process" className="py-24 px-6 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <BlurFade inView>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6"> Our Process </h2>
                        <p className="text-xl text-foreground/60">
                            A proven methodology that transforms ideas into impactful digital products.
                        </p>
                    </BlurFade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                            <div className="relative group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-foreground/60 leading-relaxed">
                                    {step.description}
                                </p>

                                <div className="absolute top-4 right-4 opacity-10 text-4xl font-bold font-sans">
                                    0{index + 1}
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
};
