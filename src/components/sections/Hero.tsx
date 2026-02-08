"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "../layout/PageLayout";
import { AnimatedGridPattern } from "@/components/magicui/AnimatedGridPattern";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import BlurFade from "@/components/magicui/BlurFade";
import { cn } from "@/lib/utils";

export const Hero = () => {
    return (
        <PageLayout>
            <section
                id="hero"
                className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden bg-background"
            >
                {/* Magic UI Background */}
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                />

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                    {/* Badge */}
                    <BlurFade delay={0.25} inView>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-sm font-semibold tracking-wide uppercase">
                                Available for New Projects
                            </span>
                        </div>
                    </BlurFade>

                    {/* Headline */}
                    <BlurFade delay={0.3} inView>
                        <h1 className="text-5xl md:text-7xl font-sans font-bold leading-tight tracking-tight text-foreground">
                            We Build <span className="text-primary italic">Digital Dreams</span> <br />
                            That <span className="text-secondary">Scale.</span>
                        </h1>
                    </BlurFade>

                    {/* Subheadline */}
                    <BlurFade delay={0.4} inView>
                        <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-sans leading-relaxed">
                            For ambitious brands who demand excellence. We craft high-performance websites and applications that leave a lasting impression.
                        </p>
                    </BlurFade>

                    {/* CTAs */}
                    <BlurFade delay={0.5} inView>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                            <Link href="#contact">
                                <InteractiveHoverButton>
                                    Start Your Project
                                </InteractiveHoverButton>
                            </Link>

                            <Link href="#portfolio">
                                <InteractiveHoverButton>
                                    View Our Work
                                </InteractiveHoverButton>
                            </Link>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </PageLayout>
    );
};
