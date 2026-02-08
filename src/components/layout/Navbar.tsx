"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Why Us", href: "#why-us" },
    { name: "FAQ", href: "#faq" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show navbar as the landing page parallax completes
            const threshold = window.innerHeight * 3.8;
            setIsScrolled(window.scrollY > threshold);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-4",
                isScrolled
                    ? "bg-white/60 dark:bg-card/60 backdrop-blur-md border-b border-primary/10 dark:border-white/5 py-3 shadow-sm opacity-100 translate-y-0"
                    : "bg-transparent opacity-0 -translate-y-10 pointer-events-none"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <motion.div
                        className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 border-2 border-primary/30"
                        whileHover={{ rotate: 180, scale: 1.1 }}
                    >
                        <motion.div
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Rocket className="text-primary w-7 h-7" />
                        </motion.div>
                    </motion.div>
                    <span className="text-3xl font-bold tracking-tight text-foreground">
                        <span className="font-bold">Imperial</span><span className="text-secondary ml-1">Tech</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className="text-lg font-bold text-foreground/80 hover:text-foreground transition-colors relative group"
                            >
                                {link.name}
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-0 h-1 bg-secondary rounded-full group-hover:w-full transition-all duration-300 shadow-[0_2px_4px_rgba(168,214,114,0.4)]"
                                />
                            </Link>
                        </motion.div>
                    ))}
                    <div className="flex items-center gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, type: "spring" }}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="#contact">
                                <InteractiveHoverButton>Connect</InteractiveHoverButton>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden flex flex-col gap-4 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-foreground/70 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full flex justify-center mt-2"
                        >
                            <InteractiveHoverButton className="w-full">Get Started</InteractiveHoverButton>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
