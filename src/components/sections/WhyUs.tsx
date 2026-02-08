"use client";

import { CheckCircle2 } from "lucide-react";
import BlurFade from "@/components/magicui/BlurFade";
import { AnimatedGridPattern } from "@/components/magicui/AnimatedGridPattern";
import { cn } from "@/lib/utils";

const reasons = [
    {
        title: "Data-Driven Strategy",
        description: "We don't guess. We use analytics and market data to inform every design decision and line of code."
    },
    {
        title: "Future-Proof Tech Stack",
        description: "Built on Next.js 14, React Server Components, and edge computing for unmatched speed and SEO."
    },
    {
        title: "Conversion Focused",
        description: "Beautiful design is meaningless if it doesn't sell. We prioritize user journeys that convert."
    },
    {
        title: "Transparent Process",
        description: "No black boxes. You get full visibility into our workflow, timeline, and deliverables."
    }
];

export const WhyUs = () => {
    return (
        <section id="why-us" className="py-24 px-6 relative overflow-hidden bg-background-secondary/50">
            <AnimatedGridPattern
                className={cn(
                    "[mask-image:linear-gradient(to_bottom,transparent,white,transparent)]",
                    "inset-0 h-full w-full opacity-50",
                )}
                maxOpacity={0.05}
                numSquares={20}
            />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-8">
                    <BlurFade inView>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Why Industry Leaders <br />
                            <span className="text-primary">Choose Us</span>
                        </h2>
                    </BlurFade>

                    <BlurFade delay={0.2} inView>
                        <p className="text-xl text-foreground/70 leading-relaxed">
                            We bridge the gap between creative ambition and technical excellence.
                            Our team functions as an extension of yours, dedicated to your long-term growth.
                        </p>
                    </BlurFade>

                    <div className="space-y-6 pt-4">
                        {reasons.map((reason, i) => (
                            <BlurFade key={i} delay={0.3 + i * 0.1} inView>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                                        <p className="text-foreground/60">{reason.description}</p>
                                    </div>
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                </div>

                <div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-border/10 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                    {/* Abstract visual or image */}
                    <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:dither(0.5)]" />
                    <div className="text-center p-8">
                        <div className="text-9xl font-bold text-primary/70">#1</div>
                        <div className="text-2xl font-bold text-foreground/40 mt-4">AGENCY CHOICE</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
