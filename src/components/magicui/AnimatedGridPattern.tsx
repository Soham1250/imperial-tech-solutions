"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGridPatternProps {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    strokeDasharray?: any;
    numSquares?: number;
    className?: string;
    maxOpacity?: number;
    duration?: number;
    repeatDelay?: number;
}

export const AnimatedGridPattern = ({
    width = 40,
    height = 40,
    x = -1,
    y = -1,
    strokeDasharray = 0,
    numSquares = 30,
    className,
    maxOpacity = 0.5,
    duration = 3,
    repeatDelay = 1,
    ...props
}: AnimatedGridPatternProps) => {
    const id = useId();
    const containerRef = useRef(null);
    const [activeSquares, setActiveSquares] = useState<number[][]>([]); // Array of [x, y] coordinates

    const getPos = () => {
        return [
            Math.floor((Math.random() * window.innerWidth) / width),
            Math.floor((Math.random() * window.innerHeight) / height),
        ];
    };

    useEffect(() => {
        const updateSquares = () => {
            const squares = [];
            for (let i = 0; i < numSquares; i++) {
                squares.push(getPos());
            }
            setActiveSquares(squares);
        };

        if (numSquares > 0) {
            updateSquares();
            const interval = setInterval(() => {
                updateSquares();
            }, (duration + repeatDelay) * 1000);

            return () => clearInterval(interval);
        }
    }, [width, height, numSquares, duration, repeatDelay]);

    return (
        <svg
            ref={containerRef}
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
                className,
            )}
            {...props}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path
                        d={`M.5 ${height}V.5H${width}`}
                        fill="none"
                        strokeDasharray={strokeDasharray}
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
            <svg x={x} y={y} className="overflow-visible">
                {activeSquares.map((pos, index) => (
                    <motion.rect
                        initial={{ opacity: 0 }}
                        animate={{ opacity: maxOpacity }}
                        transition={{
                            duration,
                            repeat: 1,
                            delay: index * 0.1,
                            repeatType: "reverse",
                        }}
                        onAnimationComplete={() => {
                            // Trigger new pos logic if needed, but the interval handles generic updates
                        }}
                        key={`${pos[0]}-${pos[1]}-${index}`}
                        width={width - 1}
                        height={height - 1}
                        x={pos[0] * width + 1}
                        y={pos[1] * height + 1}
                        fill="currentColor"
                        strokeWidth="0"
                    />
                ))}
            </svg>
        </svg>
    );
};
