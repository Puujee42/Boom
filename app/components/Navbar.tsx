"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-neutral-800/50 py-3" : "bg-transparent py-5"
                    }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">
                            Blüm.
                        </Link>
                        <div className="hidden md:flex gap-8">
                            <Link href="#places" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Places</Link>
                            <Link href="#featured" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Featured</Link>
                            <Link href="/en/about" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Editorial</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="text-neutral-400 hover:text-white transition-colors">
                            <Search className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden text-neutral-400 hover:text-white transition-colors"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                        <Link href="/en/sign-in" className="hidden md:block rounded-full bg-white px-5 py-2 text-sm font-bold tracking-wide text-black transition-transform hover:scale-105">
                            Sign In
                        </Link>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-3xl px-6 py-8"
                    >
                        <div className="flex items-center justify-between mb-12">
                            <span className="text-2xl font-extrabold tracking-tight text-white">Blüm.</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="rounded-full bg-neutral-900 p-2 text-white border border-neutral-800"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8 text-2xl font-semibold tracking-tight">
                            <Link href="/#places" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-neutral-400 transition-colors">Places.</Link>
                            <Link href="/#featured" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-neutral-400 transition-colors">Featured.</Link>
                            <Link href="/en/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-neutral-400 transition-colors">Editorial.</Link>
                            <div className="mt-8 pt-8 border-t border-neutral-800">
                                <Link href="/sign-in" onClick={() => setIsMobileMenuOpen(false)} className="block w-full rounded-full bg-white px-5 py-4 text-center text-lg font-bold text-black">
                                    Sign In
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
