"use client";

import { useState, useEffect } from "react";
import { AnimatedIntro } from "./AnimatedIntro";

export const IntroWrapper = ({ children }: { children: React.ReactNode }) => {
    const [showIntro, setShowIntro] = useState(true);
    const [hasSeenIntro, setHasSeenIntro] = useState(false);

    useEffect(() => {
        // Check if user has already seen the intro in this session
        const introSeen = sessionStorage.getItem("imperial-tech-intro-seen");
        if (introSeen === "true") {
            setShowIntro(false);
            setHasSeenIntro(true);
        }
    }, []);

    const handleIntroComplete = () => {
        sessionStorage.setItem("imperial-tech-intro-seen", "true");
        setShowIntro(false);
        setHasSeenIntro(true);
    };

    return (
        <>
            {showIntro && <AnimatedIntro onComplete={handleIntroComplete} />}
            <div style={{ opacity: hasSeenIntro ? 1 : 0, transition: "opacity 0.5s ease-in" }}>
                {children}
            </div>
        </>
    );
};
