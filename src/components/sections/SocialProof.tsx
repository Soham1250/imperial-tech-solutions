"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import BlurFade from "@/components/magicui/BlurFade";
import { Marquee } from "@/components/magicui/Marquee";
import { cn } from "@/lib/utils";

const logos = [
    "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    "https://cdn.worldvectorlogo.com/logos/supabase-logo-icon.svg",
    "https://cdn.worldvectorlogo.com/logos/vercel.svg",
    "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
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
                <Marquee pauseOnHover className="[--duration:20s]">
                    {logos.map((logo, i) => (
                        <div key={i} className="mx-8 flex items-center justify-center h-16 w-32 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={logo}
                                alt={`Tech logo ${i}`}
                                className="h-full w-auto object-contain"
                                style={{ filter: theme === 'dark' && mounted ? 'invert(1) brightness(2)' : 'none' }}
                            />
                        </div>
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent"></div>
            </div>
        </section>
    );
};
