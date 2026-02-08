"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/BlurFade";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                    <BlurFade inView>
                        <h2 className="text-4xl md:text-5xl font-bold">Let&apos;s Build <br /><span className="text-primary">Something Great</span></h2>
                        <p className="text-xl text-foreground/60 leading-relaxed max-w-md">
                            Ready to transform your digital presence? Reach out and let&apos;s discuss your vision.
                        </p>
                    </BlurFade>

                    <div className="space-y-6">
                        <BlurFade delay={0.2} inView>
                            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email Us</h3>
                                    <p className="text-foreground/60">hello@imperialtech.com</p>
                                </div>
                            </div>
                        </BlurFade>
                        <BlurFade delay={0.3} inView>
                            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Call Us</h3>
                                    <p className="text-foreground/60">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </BlurFade>
                    </div>
                </div>

                <BlurFade delay={0.4} inView>
                    <div className="p-8 rounded-2xl border border-border bg-card shadow-sm">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xl font-bold font-cursive text-primary">Your Identity</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:font-sans" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xl font-bold font-cursive text-primary">Digital Owl Address</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:font-sans" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xl font-bold font-cursive text-primary">Visualise Your Dream</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:font-sans" placeholder="Tell us about your project..." />
                            </div>
                            <div className="w-full flex justify-center">
                                <InteractiveHoverButton className="w-full py-6 text-lg">
                                    Send Message
                                </InteractiveHoverButton>
                            </div>
                        </form>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
};
