"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-10 h-10" />;

    return (
        <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/20 hover:border-primary/40 transition-all group relative overflow-hidden"
            aria-label="Toggle Theme"
        >
            <AnimatePresence mode="wait">
                {theme === "dark" ? (
                    <motion.div
                        key="dark"
                        initial={{ y: 20, opacity: 0, rotate: -45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -20, opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Moon className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="light"
                        initial={{ y: 20, opacity: 0, rotate: -45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -20, opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Sun className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Whimsical Glow */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                    rotate: [0, 360],
                    transition: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
            />
        </motion.button>
    );
};
