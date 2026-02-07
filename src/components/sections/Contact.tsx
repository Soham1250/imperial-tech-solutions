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
        <section id="contact" className="py-24 px-6 bg-[#fdfaf3] border-t-2 border-primary/10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 font-sans text-foreground">
                        Let&apos;s Start a New Tale
                    </h2>
                    <p className="text-foreground/60 text-xl max-w-2xl mx-auto font-hand">
                        Ready to bring some magic to your business? Reach out and let&apos;s talk.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div>
                            <h3 className="text-3xl font-bold mb-6 font-hand text-secondary-foreground">Our Studio Address</h3>
                            <p className="text-foreground/70 leading-relaxed text-lg">
                                we&apos;re here to help you bring your ideas to life.
                                Send us a message and we&apos;ll get back to you with the same care we put into our code.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border-2 border-primary/20">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Send a Letter</h4>
                                    <a href="mailto:soham.pansare1250@gmail.com" className="text-foreground/60 hover:text-primary transition-colors text-lg">
                                        soham.pansare1250@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 border-2 border-secondary/20">
                                    <MapPin className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Find Our Cottage</h4>
                                    <p className="text-foreground/60 text-lg">
                                        Mumbai, India <br />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-secondary/10 border-2 border-secondary/20 shadow-md font-hand">
                            <p className="text-lg text-foreground italic">
                                <strong className="text-secondary-foreground not-italic font-sans">Swift Response:</strong> We typically respond to all inquiries within 24 hours during business days, faster if the birds are flying high.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-12 bg-white rounded-[40px] border-2 border-primary/20 shadow-xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-lg font-bold mb-2 font-hand">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-5 py-4 rounded-2xl bg-white border-2 ${errors.name ? "border-accent/50" : "border-primary/20"
                                            } focus:border-primary focus:outline-none transition-all shadow-md placeholder:text-foreground/40`}
                                        placeholder="How shall we call you?"
                                    />
                                    {errors.name && (
                                        <p className="text-accent text-sm mt-2 font-hand">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-lg font-bold mb-2 font-hand">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-5 py-4 rounded-2xl bg-white border-2 ${errors.email ? "border-accent/50" : "border-primary/10"
                                            } focus:border-primary focus:outline-none transition-all shadow-sm`}
                                        placeholder="Where should we send our bird?"
                                    />
                                    {errors.email && (
                                        <p className="text-accent text-sm mt-2 font-hand">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-lg font-bold mb-2 font-hand">
                                    Your Village (Company/Project)
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-primary/20 focus:border-primary focus:outline-none transition-all shadow-md placeholder:text-foreground/40"
                                    placeholder="Tell us about your realm"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-lg font-bold mb-2 font-hand">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className={`w-full px-5 py-4 rounded-2xl bg-white border-2 ${errors.message ? "border-accent/50" : "border-primary/20"
                                        } focus:border-primary focus:outline-none transition-all shadow-md resize-none placeholder:text-foreground/40`}
                                    placeholder="Write your story here..."
                                />
                                {errors.message && (
                                    <p className="text-accent text-sm mt-2 font-hand">{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitted}
                                className="w-full button-primary flex items-center justify-center gap-3 py-5 text-xl disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                {isSubmitted ? (
                                    <>
                                        <CheckCircle className="w-6 h-6" />
                                        Message Sent to the Wind!
                                    </>
                                ) : (
                                    <>
                                        Send Your Message
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
