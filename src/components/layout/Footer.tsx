import React from "react";
import Link from "next/link";
import { Rocket, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-t from-secondary/20 to-[#fdfaf3] border-t-2 border-primary/10 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                {/* Brand */}
                <div className="flex flex-col gap-6">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 border-2 border-primary/30">
                            <Rocket className="text-primary w-7 h-7" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-foreground">
                            <span className="font-cursive">Imperial</span><span className="text-secondary">Tech</span>
                        </span>
                    </Link>
                    <p className="text-foreground/70 text-lg leading-relaxed max-w-xs">
                        Building digital treasures with the heart of a storyteller. We believe every project deserves a touch of magic.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="p-2 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="p-2 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="p-2 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                            <Instagram className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold mb-6">Services</h4>
                    <ul className="flex flex-col gap-4 text-sm text-foreground/60">
                        <li><Link href="#services" className="hover:text-primary transition-colors">Web Development</Link></li>
                        <li><Link href="#services" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
                        <li><Link href="#services" className="hover:text-primary transition-colors">AI Automation</Link></li>
                        <li><Link href="#services" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-bold mb-6">Company</h4>
                    <ul className="flex flex-col gap-4 text-sm text-foreground/60">
                        <li><Link href="#why-us" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                        <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                        <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-bold">Contact Us</h4>
                    <div className="flex flex-col gap-4 text-sm text-foreground/60">
                        <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-primary shrink-0" />
                            <span>hello@imperialtech@gmail.com</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary shrink-0" />
                            <span>Mumbai, Maharashtra, India</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-border pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-foreground/40">
                    © {currentYear} Imperial Tech Solutions. All rights reserved.
                </p>
                <div className="flex gap-8 text-sm text-foreground/40">
                    <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};
