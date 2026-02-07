"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });

    // Simple unblur and resolve transition
    // Synchronized with ScrollIntro blurring out
    const opacity = useTransform(scrollYProgress, [0.4, 0.9], [0, 1]);
    const blur = useTransform(scrollYProgress, [0.4, 0.9], ["blur(15px)", "blur(0px)"]);
    const y = useTransform(scrollYProgress, [0.4, 0.9], [20, 0]);

    return (
        <motion.div
            ref={containerRef}
            style={{
                opacity: mounted ? opacity : 0,
                filter: mounted ? blur : "none",
                y: mounted ? y : 0
            }}
            className="will-change-[opacity,filter]"
        >
            {children}
        </motion.div>
    );
};
