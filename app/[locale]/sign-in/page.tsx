"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function SignIn() {
    return (
        <div className="flex min-h-screen bg-black text-white selection:bg-white selection:text-black">
            {/* Left Side: Aesthetic Image */}
            <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <motion.img
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070"
                    alt="Aesthetic Architecture"
                    className="absolute inset-0 h-full w-full object-cover grayscale opacity-80"
                />
                <div className="absolute top-8 left-8 z-20">
                    <Link href="/" className="flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors group">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Directory
                    </Link>
                </div>
            </div>

            {/* Right Side: Auth Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-neutral-950 relative">
                {/* Mobile Back Button */}
                <div className="absolute top-8 left-8 lg:hidden">
                    <Link href="/" className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors group">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-md mx-auto"
                >
                    <div className="mb-12">
                        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Welcome Back.</h1>
                        <p className="text-neutral-400 font-light">Access your curated aesthetic profile.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-white transition-colors"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-xs font-semibold uppercase tracking-widest text-neutral-500" htmlFor="password">
                                    Password
                                </label>
                                <a href="#" className="text-xs text-neutral-500 hover:text-white transition-colors">
                                    Forgot password?
                                </a>
                            </div>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-white transition-colors"
                            />
                        </div>

                        <button
                            type="button"
                            className="w-full rounded-full bg-white py-4 text-sm font-bold tracking-wide text-black transition-transform hover:scale-[1.02] mt-8"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-12 text-center text-sm text-neutral-500">
                        Don't have an account?{" "}
                        <Link href="/en/sign-up" className="text-white hover:underline underline-offset-4 font-semibold">
                            Apply for access
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
