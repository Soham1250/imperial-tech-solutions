import React from "react";
import Link from "next/link";
import { Rocket, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-border pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                {/* Brand */}
                <div className="flex flex-col gap-6">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                            <Rocket className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            Imperial<span className="text-primary">Tech</span>
                        </span>
                    </Link>
                    <p className="text-foreground/60 text-sm leading-relaxed max-w-xs">
                        Empowering SMBs and startups with cutting-edge AI solutions and premium digital development. We build for outcomes, not just features.
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
                        <li><Link href="#" className="hover:text-primary transition-colors">Web Development</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">AI Automation</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-bold mb-6">Company</h4>
                    <ul className="flex flex-col gap-4 text-sm text-foreground/60">
                        <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Process</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-bold">Contact Us</h4>
                    <div className="flex flex-col gap-4 text-sm text-foreground/60">
                        <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-primary shrink-0" />
                            <span>hello@imperialtech.com</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-primary shrink-0" />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary shrink-0" />
                            <span>123 Tech Hub, Bengaluru, India</span>
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
