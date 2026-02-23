"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <div className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-black py-20">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070"
                    alt="Atmospheric Restaurant"
                    className="h-full w-full object-cover grayscale"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="z-10 mx-auto max-w-4xl px-4 text-center"
            >
                <motion.h1 variants={itemVariants} className="mb-6 text-6xl font-extrabold tracking-tighter text-white sm:text-7xl lg:text-8xl">
                    DISCOVER<br />THE <span className="text-neutral-500 italic font-serif">AESTHETIC.</span>
                </motion.h1>
                <motion.p variants={itemVariants} className="mx-auto mb-10 max-w-2xl text-lg text-neutral-400 sm:text-xl font-light">
                    Curated collection of the finest cafes, restaurants, bars, karaoke, and billiards. Found locally, designed globally.
                </motion.p>
                <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="#places"
                        className="rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wide text-black transition-transform hover:scale-105"
                    >
                        Explore Places
                    </a>
                    <a
                        href="#about"
                        className="rounded-full border border-neutral-700 bg-transparent px-8 py-4 text-sm font-bold tracking-wide text-white transition-colors hover:bg-neutral-800"
                    >
                        Our Mission
                    </a>
                </motion.div>
            </motion.div>

        </div>
    );
}
