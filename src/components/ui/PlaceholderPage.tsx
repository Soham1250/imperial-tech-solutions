import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PlaceholderPageProps {
    title: string;
    description: string;
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
            <div className="max-w-3xl w-full">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-12"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter">
                    {title}
                </h1>

                <div className="space-y-6 text-lg text-foreground/60 leading-relaxed">
                    <p className="font-medium text-foreground">{description}</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="font-bold mb-2">Status</h3>
                        <span className="text-primary font-medium">Coming Soon</span>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="font-bold mb-2">Phase</h3>
                        <span className="text-foreground/60 font-medium">In Development</span>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="font-bold mb-2">Priority</h3>
                        <span className="text-foreground/60 font-medium">High</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
