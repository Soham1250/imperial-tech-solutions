"use client";

import { useEffect, useState } from "react";

export const useCountUp = (end: number, duration: number = 2000, start: number = 0, enabled: boolean = true) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        if (!enabled) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
            const current = start + (end - start) * easeOutQuart;

            setCount(Math.floor(current));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration, start, enabled]);

    return count;
};
