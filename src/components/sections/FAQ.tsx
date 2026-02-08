"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import BlurFade from "@/components/magicui/BlurFade";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: " timelines vary based on complexity. A standard website takes 2-4 weeks, while custom applications can take 8-12 weeks."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes, we provide 30 days of free support after launch and offer ongoing maintenance packages."
    },
    {
        question: "What makes your agency different?",
        answer: "We combine enterprise-grade engineering with boutique design attention. No bloat, just results."
    },
    {
        question: "Can you work with existing codebases?",
        answer: "Absolutely. We specialize in modernization and refactoring of legacy systems."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 px-6 bg-background-secondary/30">
            <div className="max-w-4xl mx-auto">
                <BlurFade inView>
                    <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                </BlurFade>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <BlurFade key={index} delay={index * 0.1} inView>
                            <div
                                className="border border-border rounded-xl overflow-hidden bg-background transition-colors hover:border-primary/30"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="flex items-center justify-between w-full p-6 text-left"
                                >
                                    <span className="text-lg font-medium">{faq.question}</span>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-foreground/50" />
                                    )}
                                </button>
                                <div
                                    className={cn(
                                        "overflow-hidden transition-all duration-300 ease-in-out",
                                        openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <p className="px-6 pb-6 text-foreground/70 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
};
