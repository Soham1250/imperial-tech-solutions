"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on scope and complexity. A simple website might take 2-3 weeks, while a full web application with AI features could take 8-12 weeks. We always provide detailed timelines during our initial consultation and keep you updated throughout the process."
    },
    {
        question: "What technologies do you specialize in?",
        answer: "We specialize in modern web technologies including React, Next.js, Node.js, and TypeScript for web development. For AI solutions, we work with OpenAI, LangChain, and custom ML models. We also have expertise in cloud platforms like AWS, Azure, and GCP."
    },
    {
        question: "Do you offer ongoing support and maintenance?",
        answer: "Yes! We offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature enhancements. We also provide 24/7 monitoring for critical applications."
    },
    {
        question: "How much does a project typically cost?",
        answer: "Our pricing is transparent and highly competitive. Simple projects start at ₹1,500, while even the most complex AI-leveraged systems are capped at ₹10,000. We believe in providing premium tech leverage at accessible rates for startups and SMBs."
    },
    {
        question: "Can you help with existing projects or just new builds?",
        answer: "We work with both! Whether you need to modernize a legacy system, fix bugs in existing code, add new features, or start from scratch, we can help. We're experienced in taking over and improving existing codebases."
    },
    {
        question: "What is your development process?",
        answer: "We follow an agile methodology: Planning & Research → PRD Creation → Design → Development → Testing → Deployment → Maintenance. You'll have full visibility throughout, with regular check-ins, demos, and the ability to provide feedback at each stage."
    },
    {
        question: "Do you sign NDAs and protect intellectual property?",
        answer: "Absolutely. We take confidentiality very seriously. We're happy to sign NDAs before any detailed discussions. All code and intellectual property developed for your project belongs entirely to you upon project completion and final payment."
    },
    {
        question: "What makes you different from other agencies?",
        answer: "We combine technical excellence with business acumen. We don't just build what you ask for - we understand your business goals and recommend solutions that drive real ROI. Plus, our AI-first approach means we build smarter, more efficient systems that scale with your growth."
    },
    {
        question: "Do you work with startups or only established businesses?",
        answer: "We work with both! We love helping startups bring their vision to life and have flexible packages to accommodate startup budgets. We also work with established businesses looking to modernize or scale their digital presence."
    },
    {
        question: "How do I get started?",
        answer: "Simple! Click the 'Get Started' button to schedule a free 30-minute consultation. We'll discuss your project, goals, and requirements. Then we'll provide a detailed proposal with timeline and pricing. No obligation, no pressure."
    }
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="border-b border-primary/10 last:border-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group hover:text-primary transition-colors"
            >
                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {isOpen ? (
                        <Minus className="w-4 h-4 text-primary" />
                    ) : (
                        <Plus className="w-4 h-4 text-primary" />
                    )}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-foreground font-medium leading-relaxed opacity-80">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const FAQ = () => {
    return (
        <section id="faq" className="py-24 px-6 bg-gradient-to-b from-[#fdfaf3] to-[#e8f5e9]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
                        Questions & Wonders
                    </h2>
                    <p className="text-foreground/60 text-xl">
                        Everything you might want to know about our magical process.
                    </p>
                </motion.div>

                <div className="p-8 md:p-12 bg-white rounded-[40px] border-2 border-primary/20 shadow-xl">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center p-10 rounded-[40px] bg-white border-2 border-secondary/20 shadow-sm"
                >
                    <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                    <p className="text-foreground/60 text-lg mb-6">
                        Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help you out.
                    </p>
                    <a
                        href="#contact"
                        className="button-primary inline-flex items-center gap-2 text-lg"
                    >
                        Send a Message
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
