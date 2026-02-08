"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import BlurFade from "@/components/magicui/BlurFade";
import { Marquee } from "@/components/magicui/Marquee";
import { cn } from "@/lib/utils";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/lamp-tooltip";

const techLogos = [
    { name: "React", url: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Next.js", url: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "TypeScript", url: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "Tailwind CSS", url: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "Node.js", url: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "PostgreSQL", url: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
    { name: "MongoDB", url: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Supabase", url: "https://cdn.worldvectorlogo.com/logos/supabase-logo-icon.svg" },
    { name: "Firebase", url: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
    { name: "Redis", url: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
    { name: "Vercel", url: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
    { name: "Docker", url: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
    { name: "AWS", url: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
    { name: "Git", url: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "Figma", url: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg" },
    { name: "Framer Motion", url: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
    { name: "GraphQL", url: "https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg" },
    { name: "Stripe", url: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
    { name: "Python", url: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "OpenAI", url: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
];

export const SocialProof = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                <BlurFade inView>
                    <p className="text-lg font-medium text-foreground/50 uppercase tracking-widest">
                        Powered by Modern Technologies
                    </p>
                </BlurFade>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <TooltipProvider delayDuration={0}>
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {techLogos.map((tech, i) => (
                            <Tooltip key={i}>
                                <TooltipTrigger asChild>
                                    <div className="mx-8 flex items-center justify-center h-16 w-32 transition-all duration-300 hover:scale-110 cursor-pointer">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={tech.url}
                                            alt={`${tech.name} logo`}
                                            className="h-full w-auto object-contain"
                                            // Conditional inversion only for dark mode if logo is likely dark, 
                                            // but user wants "colorful by default" so we'll be careful.
                                            // Some SVGs are black so they need invert in dark mode.
                                            style={{
                                                filter: tech.name === 'Next.js' || tech.name === 'Vercel' || tech.name === 'OpenAI'
                                                    ? (theme === 'dark' && mounted ? 'invert(1) brightness(2)' : 'none')
                                                    : 'none'
                                            }}
                                        />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent side="bottom" className="font-bold">
                                    <p>{tech.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </Marquee>
                </TooltipProvider>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent"></div>
            </div>
        </section>
    );
};
