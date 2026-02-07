"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Here you would normally send the data to your backend
            console.log("Form submitted:", formData);
            setIsSubmitted(true);
            
            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", company: "", message: "" });
            }, 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: ""
            });
        }
    };

    return (
        <section id="contact" className="py-24 px-6 bg-background border-t border-border">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Let&apos;s Build Something Great
                    </h2>
                    <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                        Ready to transform your business? Get in touch and let&apos;s discuss your project.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                            <p className="text-foreground/60 leading-relaxed">
                                Have a project in mind? We&apos;re here to help you bring your ideas to life. 
                                Reach out and let&apos;s start a conversation about your digital transformation journey.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Email Us</h4>
                                    <a href="mailto:hello@imperialtech.com" className="text-foreground/60 hover:text-primary transition-colors">
                                            soham.pansare1250@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Visit Us</h4>
                                    <p className="text-foreground/60">
                                        Mumbai, India <br />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                            <p className="text-sm text-foreground/70">
                                <strong className="text-white">Quick Response:</strong> We typically respond to all inquiries within 24 hours during business days.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                                        errors.name ? "border-red-500" : "border-white/10"
                                    } focus:border-primary focus:outline-none transition-colors`}
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                                        errors.email ? "border-red-500" : "border-white/10"
                                    } focus:border-primary focus:outline-none transition-colors`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium mb-2">
                                    Company (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                                    placeholder="Your Company"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                                        errors.message ? "border-red-500" : "border-white/10"
                                    } focus:border-primary focus:outline-none transition-colors resize-none`}
                                    placeholder="Tell us about your project..."
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitted}
                                className="w-full button-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitted ? (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
